import { X } from "react-feather";
import { ModalButton } from "../../../styled-components/Button.styles.ts";
import * as Dialog from "@radix-ui/react-dialog";

function CloseModalButton() {
  return (
    <>
      <ModalButton aria-label="Close">
        <Dialog.Close asChild>
          <X size={20} />
        </Dialog.Close>
      </ModalButton>
    </>
  );
}

export default CloseModalButton;
