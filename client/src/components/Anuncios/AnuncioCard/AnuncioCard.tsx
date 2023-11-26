import styled from "styled-components";
import { colors } from "../../../styled-components/root";
import { useAnuncioContext } from "../../../providers/UserContext/AnuncioProvider";
import Modal from "../../Modal";
import EditAnuncioForm from "../Form/EditAnuncioForm";
import { IAnuncio, IAnuncioCard, IAnuncioContext } from "../../../types/anuncios";
import { Link } from "react-router-dom";
import { IFullProductContext } from "../../../types/product";
import { useProductContext } from "../../../providers/UserContext";

    const Card = styled.div`
        width: 100%;
        border-top: 2px solid ${colors.purple};
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    `;

    const CardTitle = styled.h3`
    color: ${colors.grey40};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    `;

    const CartContent = styled.div`
        width: 100%;

        display: flex;
        flex-direction: column;
    `;

    const CartButtons = styled.div`
        display: flex;
        align-self: end;
        gap: 20px; 
    `;

    const Button = styled.h3`
        color: ${colors.red60};
        font-weight: 600;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    `;

    const ViewButton = styled(Link)`
          color: ${colors.red60};
        font-weight: 600;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    `;

    

export function AnuncioCard(props: IAnuncioCard) {

    const {anuncio} = props;
    const { isEditAnuncioModalOpen, setIsEditAnuncioModalOpen, setEditingAnuncio, setIsDeleteAnuncioModalOpen, setDeletingAnuncio } = useAnuncioContext() as IAnuncioContext;
     const { changeActiveProduct } = useProductContext() as IFullProductContext;

    
    function handleEditPost(anuncio: IAnuncio) {
        setEditingAnuncio(anuncio);
        setIsEditAnuncioModalOpen(true);
    };

    function handleDeletePost(anuncio: IAnuncio) {
        setDeletingAnuncio(anuncio);
        setIsDeleteAnuncioModalOpen(true);
    }

    return (
        <Card>
            <CardTitle>{`${anuncio.name.toUpperCase()} - ${anuncio.brandName.toUpperCase()}`}</CardTitle>
            <CartContent>
                <div>
                    <p>{`R$: ${anuncio.price}, Estoque: ${anuncio.stock}, Condição: ${anuncio.condition}`}</p>
                </div>
                <CartButtons>
                    <ViewButton
                    to={`/products/${String(anuncio.id)}`}
                    onClick={() => {
                        changeActiveProduct(anuncio);
                        window.scrollTo(0, 0);
                      }}
                      tabIndex={0}
                      style={{color: "black"}}
                    >Ver
                    </ViewButton>
                    <Button style={{color: "black"}} onClick={() => handleEditPost(anuncio)}>Editar</Button>
                    <Button onClick={() => handleDeletePost(anuncio)}>Excluir</Button>
                </CartButtons>
            </CartContent>
            <Modal open={isEditAnuncioModalOpen} onOpenChange={setIsEditAnuncioModalOpen} element={EditAnuncioForm()}/>
        </Card>
    )
};

export default AnuncioCard;