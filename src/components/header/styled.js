import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem;

  input {
    border: 1px solid #808080;
    border-radius: 0.5rem;
    width: 100%;
    height: 44px;
    margin-right: 4px;
    padding: 0.5rem;
    background-color: #2e2e2e;
    color: #d4d4d4;
  }

  input::placeholder {
    color: #808080;
  }

  input:focus {
    outline: 1px solid #65319e;
  }

  button {
    background-color: #65319e;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: #ededed;
    box-shadow: 1px 1px 5px #2e2e2e;
    transition: all 0.3s;

    &:hover {
      background-color: #7c3cc2;
    }
  }
`;
