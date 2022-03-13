import React from "react";
import * as S from "./styled";
import { FaLink } from "react-icons/fa";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>
        <FaLink /> Link :
      </S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} rel="noreferrer" target="_blank">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
