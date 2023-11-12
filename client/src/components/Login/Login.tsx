import * as Dialog from "@radix-ui/react-dialog";

import { useUserContext } from "../../providers/UserContext";
import { UserLogin } from "./UserLogin.tsx";
import { UserSignUp } from "./UserSignUp.tsx";
import { IContext } from "../../types/types";
import {
  DContent,
  DOverLay,
} from "../../styled-components/Modal.styles.tsx";
import {X} from "react-feather";

function Login() {
  const { isLogOpen, setIsLogOpen, isSignUp } = useUserContext() as IContext;
  return (
    <Dialog.Root modal={true} open={isLogOpen} onOpenChange={setIsLogOpen}>
      <Dialog.Portal>
        <DOverLay />
        <DContent>
          {isSignUp ? UserSignUp():UserLogin()}
            <Dialog.Close asChild>
                <button
                    style={{
                        position: "absolute",
                        top: "35px",
                        right: "35px",
                        backgroundColor: "inherit",
                    }}
                    aria-label="Close"
                >
                    <X size={20} />
                </button>
            </Dialog.Close>
        </DContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Login;
