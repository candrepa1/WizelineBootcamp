import styled from 'styled-components';

export const NoFavoritesAd = styled.div`
  color: ${(props) => props.theme.title};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningIcon = styled.div`
  color: red;
  margin-bottom: 2rem;
`;
