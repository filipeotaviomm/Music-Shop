import styled from "styled-components";
import { IAddressCard } from "../../../types/address";
import { colors } from "../../../styled-components/root";

    const Card = styled.div`
        width: 100%;
        border-top: 2px solid black;
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

    return (
        <Card>
            <CardTitle>{address.name.toUpperCase()}</CardTitle>
            <CartContent>
                <div>
                    <p>{`${address.street}, nº ${address.number}, ${address.neihborhood} - ${address.city}/${address.state}`}</p>
                    <p>{`CEP: ${address.zip}`} {address.complement ? `| (${address.complement})` : null}</p>
                </div>
                <CartButtons>
                    <Button style={{color: "black"}}>Editar</Button>
                    <Button>Excluir</Button>
                </CartButtons>
            </CartContent>
        </Card>
    )
};

export default AddressCard;