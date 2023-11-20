import IllustrationCard from "./IllustrationCard";
import { HomeIllustrations } from "../../services/database.ts";
import { H2 } from "../../styled-components/Typography.styles.ts";
import styled from "styled-components";
import {Cards} from "../../styled-components/Cards.styles.ts";
import {genericValues} from "../../styled-components/root.ts";

const Wrapper = styled.section`
  margin-block: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 64px;
  padding-inline: ${genericValues.pagePadding};
`;

function HomeCards() {
  return (
    <>
      <Wrapper>
        <H2>O melhor e-commerce musical do sul do mundo!</H2>
        <Cards>
          {HomeIllustrations.map(({ id, image, title, description }) => (
            <IllustrationCard
              key={id}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </Cards>
      </Wrapper>
    </>
  );
}

export default HomeCards;
