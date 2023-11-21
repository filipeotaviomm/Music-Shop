import { X } from "react-feather";
import { ModalButton } from "../../../styled-components/Button.styles.ts";

function CloseModalButton() {
  return (
      <>
    <ModalButton aria-label="Close">
      <X size={20} />
    </ModalButton>
      </>
  );
}

export default CloseModalButton;
