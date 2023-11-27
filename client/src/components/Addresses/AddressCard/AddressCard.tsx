import {
  IAddress,
  IAddressCard,
  IAddressContext,
} from "../../../types/address";

import { useAddressContext } from "../../../providers/UserContext/AddressProvider";
import Modal from "../../Modal";
import EditAddressForm from "../Form/EditAddressForm";
import ModalQuit from "../../ModalQuit";
import {Button, Card, CardTitle, CartButtons, CartContent} from "../../../styled-components/resumeCard.styles.ts";

export function AddressCard(props: IAddressCard) {
  const { address } = props;
  const {
    isEditAddressModalOpen,
    setIsEditAddressModalOpen,
    setEditingAddress,
    setIsDeleteAddressModalOpen,
    isDeleteAddressModalOpen,
    deleteAddress,
  } = useAddressContext() as IAddressContext;

  function handleEditPost(address: IAddress) {
    setEditingAddress(address);
    setIsEditAddressModalOpen(true);
  }

  return (
    <Card>
      <CardTitle>{address.name.toUpperCase()}</CardTitle>
      <CartContent>
        <div>
          <p>{`${address.street}, nº ${address.number}, ${address.neihborhood} - ${address.city}/${address.state}`}</p>
          <p>
            {`CEP: ${address.zip}`}
            {address.complement ? `| (${address.complement})` : null}
          </p>
        </div>
        <CartButtons>
          <Button
            style={{ color: "black" }}
            onClick={() => handleEditPost(address)}
          >
            Editar
          </Button>
          <Button onClick={() => setIsDeleteAddressModalOpen(true)}>
            Excluir
          </Button>
        </CartButtons>
        <Modal
          open={isEditAddressModalOpen}
          onOpenChange={setIsEditAddressModalOpen}
          element={EditAddressForm()}
        />

        <Modal
          open={isDeleteAddressModalOpen}
          onOpenChange={setIsDeleteAddressModalOpen}
          element={
            <ModalQuit
              question={`Tens certeza de remover o endereço de ${address.name}?`}
              handleCloseModalClick={() => setIsDeleteAddressModalOpen(false)}
              handleQuitButtonClick={() => deleteAddress(address)}
            />
          }
        />
      </CartContent>
    </Card>
  );
}

export default AddressCard;
