import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: white;
  position: relative;
  z-index: 1001;
`;

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const WrapHeaderBox = styled.div`
  width: 100%;
  position: relative;
  border-bottom: solid 0.1px #ebebeb;
  background-color: inherit;
`;

export const HeaderBox = styled.div`
  max-width: 1024px;
  height: 9rem;
  margin: 0 auto;
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #searchBox {
    flex: 1;
  }

  .searchBox {
    flex: 1;
  }
`;

export const LogoLink = styled(Link)`
  height: fit-content;
  margin-right: 2rem;
`;

export const SearchInputBox = styled.div`
  flex: 1;
`;

// search options
export const SearchOptionContainer = styled.div<{ $isOn: boolean }>`
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 1000;
  display: ${({ $isOn }) => ($isOn ? "block" : "none")};
  transition: height 0.15s ease-in;
`;

export const SearchOptionBox = styled.div`
  max-width: 1024px;
  padding: 0 2rem;
  margin: 0.5rem auto 3rem;
  transition: inherit;
`;

export const HeaderSearchOptionList = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 0 1.2rem;
    border-bottom: solid 1px #ebebeb;

    .btn-group {
      display: inline;
    }

    strong {
      width: 10rem;
      margin-right: 1.4rem;
    }

    label,
    select {
      font-size: inherit;
    }

    select {
      flex: 1;
      margin: 0.8rem 0;
      margin-right: 1rem;
    }

    label {
      border-radius: 0.5rem !important;
      margin: 0.8rem 0;
      margin-right: 1rem;
      box-sizing: content-box;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 3rem;

  span {
    font-size: 1.4rem;
  }

  button[type="submit"] {
    font-size: 1.8rem;
    padding: 0.6rem 5rem;
  }
`;
