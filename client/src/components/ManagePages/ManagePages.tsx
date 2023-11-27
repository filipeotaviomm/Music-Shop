import styled from "styled-components";
import { IFullProductContext, IProductsPage } from "../../types/product";
import { useProductContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";

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
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f1f3f5;
  }
`

function ManagePages({ nextPage, prevPage }: IProductsPage) {
  const {getProductsByCategory} = useProductContext() as IFullProductContext;
  const prevIndex = prevPage?.indexOf('page=');
  const nextIndex = nextPage?.indexOf('page=');

  const prevPageIndex = prevIndex ? prevPage![prevIndex+5] : '...';
  const nextPageIndex = nextIndex ? nextPage![nextIndex+5] : '...';

  const params = useParams();

  const handleSubmit = (url: string | null) => {
    getProductsByCategory(params.categoryName!, url?.slice(141))
  }

  return (
    <DivButtons>
      <PagesButtons type="button" disabled={prevPageIndex === '...'} onClick={() => handleSubmit(prevPage)} >{prevPageIndex}</PagesButtons>
      <PagesButtons type="button" >{prevPageIndex !== '...' ? Number(prevPageIndex)+1 : nextPageIndex !== '...' ? Number(nextPageIndex)-1 : 1}</PagesButtons>
      <PagesButtons type="button" disabled={nextPageIndex === '...'} onClick={() => handleSubmit(nextPage!)} >{nextPageIndex}</PagesButtons>
    </DivButtons>
  )
}

export default ManagePages;