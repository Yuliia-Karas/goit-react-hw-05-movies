import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid #000000;
  padding: 20px;
`;

export const MovieDetailsGenres = styled.div`
  display: flex;
  gap: 10px;
  background: #b4afaf;
  border-radius: 10px;
  padding: 0px 5px;
`;

export const MovieInfo = styled.p`
  background: #b4afaf;
  border-radius: 10px;
  padding: 9px;
`;

export const GoBackLink = styled(Link)`
  display: inline-block;
  color: black;
  font-size: 20px;
  font-weight: 600;
   background-color: #b4afaf;
  border: 0.5px solid #b4afaf;
  border-radius: 10px;
  padding: 5px 5px;
  margin: 20px;
  margin-top:50px;
  text-transform: uppercase;
   &:hover {
        color: pink;
`;
