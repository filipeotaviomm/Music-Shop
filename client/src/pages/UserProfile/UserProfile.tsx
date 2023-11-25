import { buyingItems, personalItems } from "../../services/database.ts";
import { ReactNode } from "react";
import { QuitButton } from "../../styled-components/Button.styles.ts";
import {
  H2,
  InternalWrapper,
  MainInfo,
  Wrapper,
} from "../../styled-components/UserProfile.styles.ts";
import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";
import ResumeItems from "../../components/Resume/ResumeItems";

function UserProfile({ children }: { children: ReactNode }) {
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
          </div>
        </InternalWrapper>
        <MainInfo>{children}</MainInfo>
        <QuitButton onClick={quitAccount}>SAIR DA CONTA</QuitButton>
      </Wrapper>
    </>
  );
}

export default UserProfile;
