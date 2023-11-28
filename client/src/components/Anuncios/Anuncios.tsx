import styled from "styled-components";
import { H1, H2 } from "../../styled-components/Typography.styles";
import { useAnuncioContext } from "../../providers/UserContext/AnuncioProvider";
import NotFound from "../../assets/Nothing-in-Cart.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useEffect } from "react";
import Modal from "../Modal";
import { colors } from "../../styled-components/root.ts";
import { IAnuncioContext } from "../../types/anuncios";
import CreateAnuncioForm from "./Form/CreateAnuncioForm/CreateAnuncioForm.tsx";
import AnuncioCard from "./AnuncioCard/AnuncioCard.tsx";
import { ResumeHeader } from "../Addresses";
import Loader from "../Loader";
import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";

const AnuncioContent = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 20px;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;

const AddAnuncioBtn = styled.button`
  padding: 16px;
  border-radius: 20px;
  transition: scale 500ms;

  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  background-color: ${colors.purple};
  color: ${colors.white000};

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.purpleHover};
  }
`;

export const AnuncioFormContainer = styled.div`
  overflow-y: auto;
  padding-inline-end: 16px;
`;

function Anuncios() {
  const {
    anuncios,
    isCreateAnuncioModalOpen,
    setIsCreateAnuncioModalOpen,
    getAllAnuncios,
  } = useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;

  useEffect(() => {
    getAllAnuncios();
  }, []);

  return (
    <>
      <ResumeHeader>
        <H1>ANÚNCIOS</H1>
        <AddAnuncioBtn onClick={() => setIsCreateAnuncioModalOpen(true)}>
          <MdOutlineAddCircleOutline size="18" />
          Anúncio
        </AddAnuncioBtn>
      </ResumeHeader>

      <div>
        {isLoading ? (
          <Loader />
        ) : anuncios.length > 0 ? (
          <AnuncioContent>
            {anuncios.map((anuncio) => (
              <AnuncioCard key={anuncio.id} anuncio={anuncio} />
            ))}
          </AnuncioContent>
        ) : (
          <>
            <img alt="" src={NotFound} style={{ alignSelf: "center" }} />
            <H2>Nenhum produto anunciado.</H2>
          </>
        )}
      </div>

      <Modal
        open={isCreateAnuncioModalOpen}
        onOpenChange={setIsCreateAnuncioModalOpen}
        element={CreateAnuncioForm()}
      />
    </>
  );
}

export default Anuncios;
