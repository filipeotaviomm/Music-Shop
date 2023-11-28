import styled from "styled-components";
import { IFullProductContext, IManagePagesProps } from "../../types/product";
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

function ManagePages({ nextPage, prevPage, setPrevPage, setNextPage }: IManagePagesProps) {
  const {getProductsByCategory, getProductsByBrand, getAllProducts} = useProductContext() as IFullProductContext;
  
  const [prevPageIndex, setPrevPageIndex] = useState<string | false>(false);
  const [nextPageIndex, setNextPageIndex] = useState<string | false>(false);
  
  const setPage = () => {
    const prevIndex = prevPage?.slice(141).split('&')[0].slice(6);
    const nextIndex = nextPage?.slice(141).split('&')[0].slice(6);
    
    setPrevPageIndex(prevIndex ? prevIndex : false);
    setNextPageIndex(nextIndex ? nextIndex : false);
  }

  const params = useParams();

  const handleSubmit = async (url: string | null) => {
    let newPages;

    if(params.categoryName) {
      newPages = await getProductsByCategory(params.categoryName, url?.slice(141));
    } else if (params.brandName && params.brandName !== 'todas') {
      newPages = await getProductsByBrand(params.brandName, url?.slice(141));
    } else {
      const page = url?.slice(141).split('&')[0].slice(6)
      newPages = await getAllProducts(Number(page), 7);
    }

    setNextPage(newPages.nextPage);
    setPrevPage(newPages.prevPage);

    setPage();
    window.scroll(0, 0)
  }
  
  useEffect(() => {
    setPage();
  }, [prevPage, nextPage])

  return (
    <DivButtons>
      <PagesButtons type="button" className={prevPageIndex === false ? 'hidden' : ''} onClick={() => handleSubmit(prevPage)} >{prevPageIndex}</PagesButtons>
      <PagesButtons type="button" className={prevPageIndex === false && nextPageIndex === false ? 'hidden' : 'active'} >{prevPageIndex !== false ? Number(prevPageIndex)+1 : nextPageIndex !== false ? Number(nextPageIndex)-1 : 1}</PagesButtons>
      <PagesButtons type="button" className={nextPageIndex === false ? 'hidden' : ''} onClick={() => handleSubmit(nextPage!)} >{nextPageIndex}</PagesButtons>
    </DivButtons>
  )
}

export default ManagePages;