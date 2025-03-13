import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["background-muted"]};
`;

export const TotalSearchContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
`;

export const TitleLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const WrapTitleBox = styled.div`
  width: 18rem;
  height: 11rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  margin-right: 4rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const WrapSearchBox = styled.div`
  position: relative;
  transform: translate(0, -50%);

  @media ${({ theme }) => theme.device.tablet} {
    transform: none;
  }
`;

export const SearchFormBox = styled.div`
  padding-left: 4rem;
  position: relative;

  button {
    font-size: 1.8rem;
    padding: 0.6rem 3rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 0;
  }
`;

export const SearchOptionBox = styled.div`
  width: 100%;
  position: relative;
  transform: translate(0, -15%);
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    transform: none;
  }
`;

// search options
export const SearchOptionList = styled.div`
  width: 100%;
  display: flex;
  span {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 0 1.2rem;

    strong {
      margin-right: 2rem;
    }

    label,
    select {
      font-size: inherit;
      width: 12rem;
    }

    label {
      border-radius: 0.5rem !important;
      margin: 0.8rem 0;
      margin-right: 1rem;
      box-sizing: content-box;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;

    span {
      margin-top: 2rem;
    }

    select {
      flex: 1;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 3rem;

  span {
    font-size: 1.4rem;
  }

  button[type="submit"] {
    min-width: 14rem;
    font-size: 1.8rem;
    padding: 0.6rem 0;
    margin-left: 2rem;
  }
`;
