import { mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.View`
  width: ${mvs(150)}px;
  height: ${mvs(194)}px;
  border-radius: ${mvs(16)}px;
`;

export const LinearBackground = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${mvs(194)}px;
  border-radius: ${mvs(16)}px;
`;


export const Character = styled.Image`
  position: absolute;
  top: 8px;
  bottom: 0;
  right: 58px;
  width: ${mvs(124)}px;
  height: ${mvs(224)}px;
  z-index: 10;
`;

export const BackgroundChampion = styled.Image`
  position: absolute;
  top: 4px;
  bottom: 0;
  right: 56px;
  width: ${mvs(124)}px;
  height: ${mvs(224)}px;
`;

export const BackgroundName = styled.Image`
  width: ${mvs(90)}px;
  height: ${mvs(150)}px;
  position: absolute;
  top: ${mvs(10)}px;
  right: ${mvs(10)}px;
  bottom: 0;
`;

export const ContentText = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: ${mvs(10)}px;
  padding: 12px;
`;

export const Icon = styled.Image`
  margin-top: ${mvs(15)}px;
  width: ${mvs(15)}px;
  height: ${mvs(15)}px;
`;

export const Name = styled.Text`
  text-align: right;
  font-size: ${mvs(22)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const Type = styled.Text`
  text-align: right;
  font-size: ${mvs(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
