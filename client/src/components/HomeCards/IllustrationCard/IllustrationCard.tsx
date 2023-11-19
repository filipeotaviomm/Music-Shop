import { H3 } from "../../../styled-components/Typography.styles.ts";
import { IllustrationCardProps } from "../../../types/types";
import styled from "styled-components";
import {
  Figure,
  ImageNotFound,
  TextWrapper,
  Wrapper,
} from "../../../styled-components/NotFound.styles.ts";

const Card = styled.li`
  display: grid;
  place-items: center;
  gap: 32px;
`;

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
        <Figure>
          <CardImage src={image} alt={title} />
          <figcaption>Url not found</figcaption>
        </Figure>
        <Wrapper>
          <CardWrapper>
            <H3>{title}</H3>
            <p>{description}</p>
          </CardWrapper>
        </Wrapper>
      </Card>
    </>
  );
}

export default IllustrationCard;
