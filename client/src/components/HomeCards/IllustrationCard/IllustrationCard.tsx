import { H3 } from "../../../styled-components/Typography.styles.ts";
import { IllustrationCardProps } from "../../../types/types";
import styled from "styled-components";
import {
  Figure,
  ImageNotFound,
  TextWrapper,
  Wrapper,
} from "../../../styled-components/NotFound.styles.ts";
import {colors} from "../../../styled-components/root.ts";

const Card = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 0 0 50%;

  gap: 24px;
`
const CardGrid = styled.div`
    align-items: normal;
    display: grid;
    grid-template-rows: auto  100px auto;
    justify-items: center;
    gap: 24px

`

const CardImage = styled(ImageNotFound)`
  max-width: 240px;
`;
const CardWrapper = styled(TextWrapper)`
  gap: 16px;
  max-width: 30ch;
`;

function IllustrationCard({
  image,
  title,
  description,
}: IllustrationCardProps) {
  return (
    <>
      <Card>
        <CardGrid>

        <Figure>
          <CardImage src={image} alt={title} />
          <figcaption>Url not found</figcaption>
        </Figure>
        <Wrapper>
          <CardWrapper>
            <H3>{title}</H3>
            <p style={{color: colors.grey60}}>{description}</p>
          </CardWrapper>
        </Wrapper>
        </CardGrid>
      </Card>
    </>
  );
}

export default IllustrationCard;
