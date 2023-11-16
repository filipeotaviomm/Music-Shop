import { useUserContext } from "../../../../../providers/UserContext";
import { IContext } from "../../../../../types/types";

import { SendBtn } from "../../../../../styled-components/Modal.styles.tsx";

function Confirmation() {
  const { signUpRequest, signUpInfo, setSignUpInfo, setStep } =
    useUserContext() as IContext;

  async function submit() {
      console.log(signUpInfo)
    await signUpRequest(signUpInfo);
    setStep(0);
  }

  return (
    <>
      <SendBtn
        onClick={() => {
          setStep(0);
          setSignUpInfo({});
        }}
      >
        VOLTAR AO INÍCIO
      </SendBtn>
      <SendBtn onClick={submit}>ENVIAR</SendBtn>
    </>
  );
}

export default Confirmation;
