import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #808080;
  box-shadow: 1px 1px 5px #2e2e2e;
  margin: 1rem;
  padding: 1em;
  width: 360px;
  height: 150px;
  border-radius: 8px;
  background-color: #2e2e2e;
`;

export const WrapperTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #d4d4d4;
  margin: 0.5rem 0;
`;

export const WrapperFullName = styled.h4`
  font-size: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d4d4d4;
`;

export const WrapperLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
  color: #8535db;
`;
