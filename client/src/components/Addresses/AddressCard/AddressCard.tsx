import styled from "styled-components";
import { IAddress, IAddressCard, IAddressContext } from "../../../types/address";
import { colors } from "../../../styled-components/root";
import { useAddressContext } from "../../../providers/UserContext/AddressProvider";
import Modal from "../../Modal";
import EditAddressForm from "../Form/EditAddressForm";

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
        align-items: center;
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

    

export function AddressCard(props: IAddressCard) {

    const {address} = props;
    const { isEditAddressModalOpen, setIsEditAddressModalOpen, setEditingAddress, setIsDeleteAddressModalOpen, setDeletingAddress } = useAddressContext() as IAddressContext;
    
    function handleEditPost(address: IAddress) {
        setEditingAddress(address);
        setIsEditAddressModalOpen(true);
    };

    function handleDeletePost(address: IAddress) {
        setDeletingAddress(address);
        setIsDeleteAddressModalOpen(true);
    }

    return (
        <Card>
            <CardTitle>{address.name.toUpperCase()}</CardTitle>
            <CartContent>
                <div>
                    <p>{`${address.street}, nº ${address.number}, ${address.neihborhood} - ${address.city}/${address.state}`}</p>
                    <p>{`CEP: ${address.zip}`} {address.complement ? `| (${address.complement})` : null}</p>
                </div>
                <CartButtons>
                    <Button style={{color: "black"}} onClick={() => handleEditPost(address)}>Editar</Button>
                    <Button onClick={() => handleDeletePost(address)}>Excluir</Button>
                </CartButtons>
            </CartContent>
            <Modal open={isEditAddressModalOpen} onOpenChange={setIsEditAddressModalOpen} element={EditAddressForm()}/>
        </Card>
    )
};

export default AddressCard;