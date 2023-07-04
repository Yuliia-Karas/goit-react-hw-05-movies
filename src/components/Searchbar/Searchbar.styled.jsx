import styled from '@emotion/styled';

export const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #b4afaf;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: pink;
  }
`;