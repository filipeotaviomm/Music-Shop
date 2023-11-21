import { useUserContext } from "../../../../../providers/UserContext";

import { SendBtn } from "../../../../../styled-components/Modal.styles.tsx";
import { Eye, EyeOff } from "react-feather";
import styled from "styled-components";
import {IUserContext} from "../../../../../types/user";

const Title = styled.span`
  font-weight: 500;
  margin-inline-end: 8px;
`;

function Confirmation() {
  const {
    setIsPasswordVisible,
    isPasswordVisible,
    signUpRequest,
    signUpInfo,
    setSignUpInfo,
    setStep,
  } = useUserContext() as IUserContext;

  async function submit() {
    console.log(signUpInfo);
    await signUpRequest(signUpInfo);
    setStep(0);
    setSignUpInfo({});
  }

  return (
    <>
      <h2>Confirme seus dados:</h2>
      <h3>
        <Title>nome:</Title>
        {signUpInfo.firstName} {signUpInfo.lastName}
      </h3>
      <h3>
        <Title>email:</Title>
        <span>{signUpInfo.email}</span>
      </h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <Title>senha:</Title>
        <input
          disabled={true}
          type={isPasswordVisible ? "text" : "password"}
          value={signUpInfo.password}
        />
        <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>

      <SendBtn onClick={submit}>ENVIAR</SendBtn>
      <button
        onClick={() => {
          setStep(0);
          setSignUpInfo({});
        }}
      >
        VOLTAR AO INÍCIO
      </button>
    </>
  );
}

export default Confirmation;
