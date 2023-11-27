import styled from "styled-components";
import { IFullProductContext, IProductsPage } from "../../types/product";
import { useProductContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DivButtons = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.6rem;
`;

const PagesButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;

  border-radius: 8px;

  background-color: #e9ecef;

  &:hover:not(:disabled) {
    background-color: #ced4da;
    color: black;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f1f3f5;
  }

  &.hidden {
    display: none;
  }

  &.active {
    background-color: #212529;
    color: white;

    &:hover {
      background-color: #343a40;
      color: white;
    }
  }
`

function ManagePages({ nextPage, prevPage }: IProductsPage) {
  const {getProductsByCategory} = useProductContext() as IFullProductContext;
  
  const [prevPageIndex, setPrevPageIndex] = useState<string | false>(false);
  const [nextPageIndex, setNextPageIndex] = useState<string | false>(false);
  
  const setPage = () => {
    const prevIndex = prevPage?.indexOf('page=');
    const nextIndex = nextPage?.indexOf('page=');
  
    setPrevPageIndex(prevIndex ? prevPage![prevIndex+5] : false);
    setNextPageIndex(nextIndex ? nextPage![nextIndex+5] : false);
  }

  const params = useParams();

  const handleSubmit = async (url: string | null) => {
    const newPages = await getProductsByCategory(params.categoryName!, url?.slice(141));

    nextPage = newPages.nextPage;
    prevPage = newPages.prevPage;

    setPage();
    window.scroll(0, 0)
  }
  
  useEffect(() => {
    setPage();
  }, [])

  return (
    <DivButtons>
      <PagesButtons type="button" className={prevPageIndex === false ? 'hidden' : ''} onClick={() => handleSubmit(prevPage)} >{prevPageIndex}</PagesButtons>
      <PagesButtons type="button" className={prevPageIndex !== false && nextPageIndex !== false ? 'hidden' : 'active'} >{prevPageIndex !== false ? Number(prevPageIndex)+1 : nextPageIndex !== false ? Number(nextPageIndex)-1 : 1}</PagesButtons>
      <PagesButtons type="button" className={nextPageIndex === false ? 'hidden' : ''} onClick={() => handleSubmit(nextPage!)} >{nextPageIndex}</PagesButtons>
    </DivButtons>
  )
}

export default ManagePages;