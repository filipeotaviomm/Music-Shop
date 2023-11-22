import { buyingItems, personalItems } from "../../services/database.ts";
import { nanoid } from "nanoid";
import { Category } from "../../styled-components/Header.styles.tsx";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  DefaultButton,
  QuitButton,
} from "../../styled-components/Button.styles.ts";
import {
  H2,
  InternalWrapper,
  ItemsWrapper,
  MainInfo,
  Wrapper,
} from "../../styled-components/UserProfile.styles.ts";
import { useUserContext } from "../../providers/UserContext";
import {IUserContext} from "../../types/types";

function UserProfile({ children }: { children: ReactNode }) {
  const { quitAccount } = useUserContext() as IUserContext;

  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <InternalWrapper>
          <div>
            <H2>Informações Pessoais</H2>
            <ItemsWrapper>
              {personalItems.map((item) => (
                <Category key={nanoid()}>
                  <DefaultButton
                    onClick={() => navigate(`/resumo/${item.url}`)}
                  >
                    {item.text}
                  </DefaultButton>
                </Category>
              ))}
            </ItemsWrapper>
          </div>
          <hr />
          <div>
            <H2>Financeiro</H2>
            <ItemsWrapper>
              {buyingItems.map((item) => (
                <Category key={nanoid()}>
                  <DefaultButton
                    onClick={() => navigate(`/resumo/${item.url}`)}
                  >
                    {item.text}
                  </DefaultButton>
                </Category>
              ))}
            </ItemsWrapper>
          </div>
        </InternalWrapper>
        <MainInfo>{children}</MainInfo>
        <QuitButton onClick={quitAccount}>SAIR DA CONTA</QuitButton>
      </Wrapper>
    </>
  );
}

export default UserProfile;
