import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
      <TextBelowHeader>{children}</TextBelowHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 10rem;
`;

const Header = styled.h2`
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 400;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 40%;
    height: 10px;
    width: 100%;
    background: rgba(3, 127, 255, 0.3);
    transition:0.6s ease-in-out;
  }

  &:hover:before {
    content: "";
    position: absolute;
    left: 0vh;
    top: 40%;
    height: 10px;
    width: 27vh;
    background: #037fff;
    transition:0.6s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    left: 75%;
    top: 40%;
    height: 10px;
    width: 25%;
    background: #037fff;
    transition:0.6s ease-in-out;
  }

  &:hover:after {
    content: "";
    position: absolute;
    left: 0vh;
    top: 40%;
    height: 10px;
    width: 27vh;
    background: #037fff;
    transition:0.6s ease-in-out;
  }

  @media screen and (max-width: 451px) {
    font-size: 2.5rem;
    &::before {
      top: 40%;
    }
    &::after {
      top: 40%;
    }
  }

  @media screen and (max-width: 321px) {
    font-size: 2rem;
    &::before {
      top: 40%;
      width: 15vh;
    }
    &::after {
      top: 40%;
      left: 15vh;
      width: 2.5vh;
    }
  }
`;

const TextBelowHeader = styled.span`
  position: absolute;
  left: 0;
  top: 33%;
  font-size: 9rem;
  line-height: 1;
  font-weight: 900;
  color: rgba(25, 29, 43, 0.44);
  display: inline-block;
  text-transform: uppercase;
  z-index: -1;
  @media screen and (max-width: 891px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 5.3rem;
  }
  @media screen and (max-width: 451px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.3rem;
  }
`;

export default Title;