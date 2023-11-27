import Money from "../../assets/Refund.svg"
import styled from "styled-components";
import {fontSize} from "../../styled-components/root.ts";

const H1 = styled.h1`
  width: 100%;
  font-weight: 500;
  text-align: center;
  line-height: 130%;
  font-size: ${fontSize.h3};
  @media (min-width: 700px){
    
  font-size: ${fontSize.h1};
  }
`
const Section = styled.section`
  display: grid;
  justify-items: center;
`
function Resume() {
  return (
    <Section>
      <H1>Seja bem-vinda(o)!</H1>
        <img src={Money} alt=""/>
    </Section>
  );
}

export default Resume;
