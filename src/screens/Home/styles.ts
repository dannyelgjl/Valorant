import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ValorantImage = styled.Image`
  width: 100%;
  height: ${mvs(250)}px;
  resize-mode: stretch;
`;  

export const Content = styled.View`
  flex: 1;
  padding: ${mvs(24)}px;
`;

export const Title = styled.Text`
  font-size: ${mvs(16)}px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LineIcon = styled.Image`
  width: 120px;
  height: 10px;
`;

export const TransitionContainer = styled.View`
  flex-direction: row;
`;

