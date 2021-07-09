import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: ${mvs(120)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Logo = styled.Image`
  width: ${mvs(136)}px;
  height: ${mvs(82)}px;
`;