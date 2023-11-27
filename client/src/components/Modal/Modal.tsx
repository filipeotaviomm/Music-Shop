import * as Dialog from "@radix-ui/react-dialog";
import { DContent, DOverLay } from "../../styled-components/Modal.styles.tsx";
import CloseModalButton from "../Button/CloseModalButton";
import { IModal } from "../../types/types";

function Modal({
  open,
  onOpenChange,
  element,
  maxWidth = "600px",
  overflow = "unset",
}: IModal) {
  return (
    <Dialog.Root modal={true} open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DOverLay />
        <DContent style={{ maxWidth: maxWidth, overflow:  overflow }}>
          {element}
          <Dialog.Close asChild>
            <CloseModalButton />
          </Dialog.Close>
        </DContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
