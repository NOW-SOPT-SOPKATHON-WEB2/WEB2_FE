import React from 'react';
import styled, { css } from 'styled-components';
import img1 from '../assets/Rectangle 20.png';

const CharatorList = ({ color, handleClick }) => {
  return (
    <CellCharactor $isColor={color} onClick={handleClick}>
      <CharactorImg src={img1} alt="박영재이미지" />

      <CharactorInfo>
        <InfoTitle>
          <InfoName>박영재</InfoName>
          <AgeFrame>
            <InfoAge>26세</InfoAge>
          </AgeFrame>
        </InfoTitle>
        <InfoDetail>성격을 설명해주세요.</InfoDetail>
      </CharactorInfo>
    </CellCharactor>
  );
};

export default CharatorList;

const CellCharactor = styled.div`
  ${(props) =>
    props.$isColor
      ? css`
          border: 0.5px solid ${({ theme }) => theme.colors.primary_pink};
          background: ${({ theme }) => theme.colors.primary_pale};
        `
      : css`
          border: 0.5px ${({ theme }) => theme.colors.gray400};
          background: ${({ theme }) => theme.colors.white};
        `}
  display: flex;
  gap: 16px;
  width: 343px;
  height: 148px;
  flex-shrink: 0;
  border-radius: 10px;
`;

const CharactorImg = styled.img`
  padding: 16px;
  width: 98px;
  height: 116px;
  flex-shrink: 0;
  border-radius: 10px;
  /* background: ${({ theme }) => theme.colors.white}; */
`;

const CharactorInfo = styled.div`
  gap: 8px;
`;

const InfoTitle = styled.div`
  display: -webkit-inline-box;
  margin-top: 20px;
  gap: 10px;
`;

const InfoName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.heading.Head2};
  font-family: Pretendard;
  font-style: normal;
`;

const AgeFrame = styled.div`
  margin-top: 5px;
  width: 25px;
  height: 18px;
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary_pink};
`;

const InfoAge = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.text.Caption1};
  font-family: Pretendard;
  font-style: normal;
`;

const InfoDetail = styled.p`
  width: 197px;
  height: 66px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.text.Body5};
  /* Body/Body5 */
  font-family: Pretendard;
  font-style: normal;
`;
