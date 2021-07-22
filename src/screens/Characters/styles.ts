import styled from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { mvs } from 'react-native-size-matters';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${mvs(16)}px;
  margin-top: ${mvs(60)}px;
`;

export const GoBack = styled(SimpleLineIcons)``;

export const Header = styled.View`
  flex-direction: row;
  margin-top: ${mvs(10)}px;
`;

export const Title = styled.Text`
  font-size: ${mvs(24)}px;
  font-weight: bold;
  margin-top: ${mvs(18)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const LineContainer = styled.View`
  flex-direction: row;
  margin-left: ${mvs(30)}px;
  align-items: center;
`;

export const Square = styled.View`
  width: ${mvs(10)}px;
  height: ${mvs(10)}px;
  margin-right: ${mvs(6)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Line = styled.View`
  width: 70%;
  border: solid 0.5px ${({ theme }) => theme.colors.white};
`;

export const CardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${mvs(20)}px;
`;
