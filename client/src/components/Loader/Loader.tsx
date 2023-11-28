import styled, { keyframes } from "styled-components";
import { colors } from "../../styled-components/root";

const spin = keyframes`
  20% {
    background-size: 9px 60%, 9px 100%, 9px 100%;
  }
  40% {
    background-size: 9px 80%, 9px 60%, 9px 100%;
  }
  60% {
    background-size: 9px 100%, 9px 80%, 9px 60%;
  }
  80% {
    background-size: 9px 100%, 9px 100%, 9px 80%;
  }
`;

const CustomLoader = styled.div`
  --c: linear-gradient(${colors.purple} 0 0);
  width: 45px;
  height: 30px;
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 9px 100%;
  background-repeat: no-repeat;
  animation: ${spin} 1s infinite linear;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

function Loader() {
  return (
    <Wrapper>
      <CustomLoader />
    </Wrapper>
  );
}

export default Loader;
