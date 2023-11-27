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

function UserProfile({ children }: { children: ReactNode }) {
  const [openQuit, setOpenQuit] = React.useState(false);

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
          </div>
        </InternalWrapper>
        <MainInfo>{children}</MainInfo>
        <QuitButton onClick={() => setOpenQuit(!openQuit)}>
          SAIR DA CONTA
        </QuitButton>
        <Modal open={openQuit} onOpenChange={setOpenQuit} element={ModalQuit} />
      </Wrapper>
    </>
  );
}

export default UserProfile;
