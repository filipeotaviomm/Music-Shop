import styled from "styled-components";
import { colors } from "../../../styled-components/root";
import { useAnuncioContext } from "../../../providers/UserContext/AnuncioProvider";
import Modal from "../../Modal";
import EditAnuncioForm from "../Form/EditAnuncioForm";
import {
  IAnuncio,
  IAnuncioCard,
  IAnuncioContext,
} from "../../../types/anuncios";
import { Link } from "react-router-dom";
import { IFullProductContext } from "../../../types/product";
import { useProductContext } from "../../../providers/UserContext";
import {
  Button,
  Card,
  CardTitle,
  CartButtons,
  CartContent,
} from "../../../styled-components/resumeCard.styles.ts";
import ModalQuit from "../../ModalQuit";

const ViewButton = styled(Link)`
  color: ${colors.purple};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Span = styled.span`
  font-weight: 600;
`;
const Li = styled.li`
  display: flex;
  gap: 8px;
`;

export function AnuncioCard(props: IAnuncioCard) {
  const { anuncio } = props;
  const { name, condition, stock, price, brandName } = anuncio;
  const {
    isEditAnuncioModalOpen,
    setIsEditAnuncioModalOpen,
    setEditingAnuncio,
    setIsDeleteAnuncioModalOpen,
    isDeleteAnuncioModalOpen,
    deleteAnuncio,
  } = useAnuncioContext() as IAnuncioContext;
  const { getProductById } = useProductContext() as IFullProductContext;

  function handleEditPost(anuncio: IAnuncio) {
    setEditingAnuncio(anuncio);
    setIsEditAnuncioModalOpen(true);
  }

  const finalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
  return (
    <Card>
      <CardTitle>{`${name.toUpperCase()} - ${brandName.toUpperCase()}`}</CardTitle>
      <CartContent>
        <ul>
          <Li>
            <Span>Preço:</Span> {finalPrice},
          </Li>
          <Li>
            <Span>Estoque:</Span> {stock}
          </Li>
          <Li>
            <Span>Condição:</Span>
            {condition === "new" ? "Novo" : "Usado"}
          </Li>
        </ul>
        <CartButtons>
          <ViewButton
            to={`/products/${String(anuncio.id)}`}
            onClick={async () => {
              await getProductById(anuncio.id);
              window.scrollTo(0, 0);
            }}
            tabIndex={0}
          >
            Ver
          </ViewButton>
          <Button
            style={{ color: "black" }}
            onClick={() => handleEditPost(anuncio)}
          >
            Editar
          </Button>
          <Button onClick={() => setIsDeleteAnuncioModalOpen(true)}>
            Excluir
          </Button>
        </CartButtons>
      </CartContent>
      <Modal
        open={isEditAnuncioModalOpen}
        onOpenChange={setIsEditAnuncioModalOpen}
        element={EditAnuncioForm()}
      />
      <Modal
        open={isDeleteAnuncioModalOpen}
        onOpenChange={setIsDeleteAnuncioModalOpen}
        element={
          <ModalQuit
            question={`Tens certeza de remover o produto: ${anuncio.name}?`}
            handleCloseModalClick={() => setIsDeleteAnuncioModalOpen(false)}
            handleQuitButtonClick={() => deleteAnuncio(anuncio)}
          />
        }
      />
    </Card>
  );
}

export default AnuncioCard;
