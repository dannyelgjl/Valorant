import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters';

export const Container = styled.View` 
 flex: 1;
 align-items: center;
 margin-top: ${mvs(16)}px;
 padding: ${mvs(8.5)}px;


 background-color: ${({ theme }) => theme.colors.white};
 border-radius: 6px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${mvs(24)}px;
  font-weight: bold;
`;

export const Icon = styled.Image`
  height: ${mvs(25)}px;
  width:  ${mvs(25)}px;
`;

export const Description = styled.Text`
  text-align: left;
  font-size: 14px;
  margin-top: ${mvs(16)}px;
  line-height: 20px;
  letter-spacing: 1px;
`;

export const CardVideo = styled.Image`
  width: 100%;
  height: ${mvs(200)}px;

  resize-mode: contain;
`;