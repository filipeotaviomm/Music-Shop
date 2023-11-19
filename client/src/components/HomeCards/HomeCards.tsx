import IllustrationCard from "./IllustrationCard";
import { HomeIllustrations } from "../../services/database.ts";
import { H2 } from "../../styled-components/Typography.styles.ts";
import styled from "styled-components";

const Cards = styled.ul`
  display: grid;
  place-items: center;
  gap: 64px;
  text-align: start;
`;
const Wrapper = styled.div`
  display: grid;
  gap: 64px;
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
