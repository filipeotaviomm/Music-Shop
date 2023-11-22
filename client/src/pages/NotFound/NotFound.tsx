import NotFoundIllustration from "../../assets/404-Not-Found.svg";

import { InlineButton } from "../../styled-components/Button.styles.ts";
import { useNavigate } from "react-router-dom";
import { CardSubTitle, H1 } from "../../styled-components/Typography.styles.ts";
import {Figure, ImageNotFound, Line, TextWrapper, Wrapper} from "../../styled-components/NotFound.styles.ts";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Figure>
        <ImageNotFound src={NotFoundIllustration} alt="url not found" />
        <figcaption>Url not found</figcaption>
      </Figure>
      <Wrapper >
        <TextWrapper>
          <H1>Opa, algo deu errado :(</H1>
          <CardSubTitle>
            Desculpe, não foi possível encontrar a página que tu procurou.
          </CardSubTitle>
          <Line>
            Voltar para
            <InlineButton onClick={() => navigate("/")}>
              página inicial
            </InlineButton>
          </Line>
        </TextWrapper>
      </Wrapper>
    </>
  );
}

export default NotFound;
