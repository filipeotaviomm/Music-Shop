import { useUserContext } from "../../../../../providers/UserContext";

import { Eye, EyeOff } from "react-feather";
import styled from "styled-components";
import { IUserContext } from "../../../../../types/user";
import { SendBtn } from "../../../../../styled-components/Button.styles.ts";
import React from "react";
import { H3 } from "../../../../../styled-components/Typography.styles.ts";

const Title = styled.span`
  font-weight: 500;
  text-align: start;
  margin-inline-end: 8px;
  width: fit-content;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  max-width: 100% ;
`;

const Line = styled.h3`
  display: grid;
  grid-template-columns: 6ch auto auto;
  align-items: start;
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
    await signUpRequest(signUpInfo);
    setStep(0);
    setSignUpInfo({});
  }

  React.useEffect(() => {
    setIsPasswordVisible(false);
  }, []);
  return (
    <>
      <Wrapper>
        <H3>Confirme seus dados:</H3>
        <div style={{display:"grid", gap:"12px"}}>
          <Line>
            <Title>nome:</Title>
            <span style={{ textAlign: "left" }}>
              {signUpInfo.firstName} {signUpInfo.lastName}
            </span>
          </Line>
          <Line>
            <Title>email:</Title>
            <span>{signUpInfo.email}</span>
          </Line>
          <div style={{ display: "grid", gridTemplateColumns: "10ch 1fr auto" }}>
            <Title>senha:</Title>
            <div>
              <input
                  style={{width:"fit-content"}}
                disabled={true}
                type={isPasswordVisible ? "text" : "password"}
                value={signUpInfo.password}
              />
              <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <SendBtn onClick={submit}>ENVIAR</SendBtn>
          <button
            style={{
              width: "fit-content",
              textDecoration: "underline",
              textAlign: "center",
            }}
            onClick={() => {
              setStep(0);
              setSignUpInfo({});
            }}
          >
            VOLTAR AO INÍCIO
          </button>
        </div>
      </Wrapper>
    </>
  );
}

export default Confirmation;
