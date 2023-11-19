import { colors } from "../../../styled-components/root.ts";
import { useUserContext } from "../../../providers/UserContext";
import { IContext } from "../../../types/types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
    flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
    @media (min-width: 600px) {
      flex-flow: row;
  }
        
    `

  const Question = styled.h3`
    @media (min-width: 600px) {
      text-align: center;
  }
      
`
function AlternateForm(question: string, buttonText: string) {
  const { isSignUp, setIsSignUp } = useUserContext() as IContext;

  return (
    <Wrapper>
      <Question>{question}</Question>
      <button
        onClick={() => setIsSignUp(!isSignUp)}
        style={{
          textDecoration: "underline",
          backgroundColor: "inherit",
          color: colors.purple,
          fontWeight: 500,
        }}
      >
        {buttonText}
      </button>
    </Wrapper>
  );
}

export default AlternateForm;
