import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  height: 200px;
  color: #d4d4d4;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const WrapperStatusCount = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    text-align: center;
  }

  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    font-size: 1.15rem;
    font-weight: bold;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    font-size: 1rem;
    color: #8535db;
    transition: all 0.3s;
  }

  a:hover {
    color: #7c3cc2;
  }

  span {
    color: #909090;
    font-size: 1rem;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 0.5rem;
  box-shadow: 3px 3px 10px #65319e;
`;
