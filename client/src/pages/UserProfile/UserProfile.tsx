import { buyingItems, personalItems } from "../../services/database.ts";
import React, { ReactNode } from "react";
import { QuitButton } from "../../styled-components/Button.styles.ts";
import {
  H2,
  InternalWrapper,
  MainInfo,
  Wrapper,
} from "../../styled-components/UserProfile.styles.ts";
import ResumeItems from "../../components/Resume/ResumeItems";
import Modal from "../../components/Modal";
import ModalQuit from "../../components/ModalQuit";
import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";

function UserProfile({ children }: { children: ReactNode }) {
  const [openQuit, setOpenQuit] = React.useState(false);
  const { quitAccount } = useUserContext() as IUserContext;

  return (
    <>
      <Wrapper>
        <InternalWrapper>
          <div>
            <H2>Informações Pessoais</H2>
            <ResumeItems array={personalItems} />
          </div>
          <hr />
          <div>
            <H2>Financeiro</H2>
            <ResumeItems array={buyingItems} />
            <QuitButton onClick={() => setOpenQuit(!openQuit)}>
              SAIR DA CONTA
            </QuitButton>
          </div>
        </InternalWrapper>
        <MainInfo>{children}</MainInfo>
      </Wrapper>
      <Modal
        open={openQuit}
        onOpenChange={setOpenQuit}
        element={
          <ModalQuit
            question="Desejas de fato deslogar?"
            handleCloseModalClick={() => setOpenQuit(!openQuit)}
            handleQuitButtonClick={() => quitAccount()}
            quit="sim, deslogar"
          />
        }
      />
    </>
  );
}

export default UserProfile;
