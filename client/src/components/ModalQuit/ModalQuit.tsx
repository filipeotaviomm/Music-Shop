import styled from "styled-components";
import Trash from "../../assets/Remove-Confirmation.svg";
import { colors } from "../../styled-components/root.ts";
import { H2 } from "../../styled-components/Typography.styles.ts";

const Card = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CartButtons = styled.div`
  display: flex;
  align-self: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 16px;
  border-radius: 20px;
  transition: 0.05s;
  outline: 2px solid ${colors.grey90};

  background-color: ${colors.white000};

  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  &:hover {
    background-color: ${colors.offWhite};
  }
`;

const RemoveButton = styled(Button)`
  color: ${colors.white000};
  background-color: ${colors.red60};

  &:hover {
    background-color: ${colors.red80};
  }
`;

function ModalQuit({
  question,
  handleCloseModalClick,
  handleQuitButtonClick,
  quit = "Remover",
}: {
  question: string;
  handleCloseModalClick: () => void;
  handleQuitButtonClick: () => Promise<void>;
  quit?: string;
}) {
  return (
    <>
      <Card>
        <H2>{question}</H2>

        <img src={Trash} />
        <CartButtons>
          <Button onClick={handleCloseModalClick}>Cancelar</Button>
          <RemoveButton onClick={handleQuitButtonClick}>{quit}</RemoveButton>
        </CartButtons>
      </Card>
    </>
  );
}

export default ModalQuit;
