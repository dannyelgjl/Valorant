import { mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

interface Props {
  isActive?: boolean;
}

export const Container = styled.View<Props>`
  width: ${mvs(31)}px;
  height: ${mvs(4)}px;
 
  margin-top: 10px;
  margin-right: 6px;

  border: solid 0.5px ${({ theme, isActive }) => 
    isActive  ? theme.colors.header : theme.colors.white
  };

  background-color: ${({ theme, isActive }) => 
    isActive ? theme.colors.header : theme.colors.transparent
 };
`;
