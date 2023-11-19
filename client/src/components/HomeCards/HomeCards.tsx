import IllustrationCard from "./IllustrationCard";
import { HomeIllustrations } from "../../services/database.ts";
import { H2 } from "../../styled-components/Typography.styles.ts";
import styled from "styled-components";
import {colors, genericValues} from "../../styled-components/root.ts";

const Cards = styled.ul`
  align-items: center;
  display: flex;
  gap: 15px;
  align-items: center;

  max-width: ${genericValues.pageWidth};
  padding-inline: ${genericValues.pagePadding};
  padding-block: 24px;

  border: 2px solid ${colors.grey30};
  border-radius: 8px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;


  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;

    border: 2px solid transparent;
  }


`;
const Wrapper = styled.div`
  margin-block: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
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
