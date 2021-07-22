import React from 'react';
import jettName from '../../assets/names/jetname.png';
import icon from '../../assets/icons/valorantIcon.png';
import jett from '../../assets/images/jett.png';
import backgroundJett from '../../assets/background/background.png';
import { Container, LinearBackground, Character, BackgroundName, BackgroundChampion, ContentText, Icon, Name, Type } from './styles';
import { useTheme } from 'styled-components';


const CardCharacter: React.FC = () => {
  const theme = useTheme();

  return (
    <Container >
      <LinearBackground colors={[theme.colors.blue, theme.colors.blue, theme.colors.darkBlue]} />

      <Character source={jett} />
      <BackgroundName source={jettName} />
      <BackgroundChampion source={backgroundJett} />
      <ContentText>
        <Name>JETT</Name>
        <Type>DUELISTA</Type>
        <Icon source={icon} />
      </ContentText>
    </Container>
  );
}

export default CardCharacter;