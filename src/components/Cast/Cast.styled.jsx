import styled from '@emotion/styled';

export const CastContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 10px;
flex-direction: column;
  font-size: 24px;
  border-radius: 9px;
`;

export const CastItem = styled.li`
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;
text-align: center;
  display: block;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CastName = styled.h3`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;

export const CastCharacter = styled.p`
  font-size: 14px;
    margin-bottom: 10px;
`;

