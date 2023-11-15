import { buyingItems, personalItems } from "../../services/database.ts";
import { nanoid } from "nanoid";
import {
  Category,
  StyledLink,
} from "../../styled-components/Header.styles.tsx";
import styled from "styled-components";
import {ReactNode} from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 40px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;
const MainInfo = styled.div`
  width: 100%;
`

function UserProfile({ children }: { children: ReactNode }) {
  return (
    <>
      <Wrapper>
        <ItemsWrapper>
          <h2>Informações Pessoais</h2>
          <ol>
            {personalItems.map((item) => (
              <Category key={nanoid()}>
                <StyledLink to={`./${item.url}`}>{item.text}</StyledLink>
              </Category>
            ))}
          </ol>
          <hr />
          <h2>Financeiro</h2>
          <ol>
            {buyingItems.map((item) => (
              <Category key={nanoid()}>
                <StyledLink to={`./${item.url}`}>{item.text}</StyledLink>
              </Category>
            ))}
          </ol>
        </ItemsWrapper>
        <MainInfo>{children}</MainInfo>
      </Wrapper>
    </>
  );
}

export default UserProfile;
