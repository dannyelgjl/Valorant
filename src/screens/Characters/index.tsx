import React from 'react';
import { CardCharacter, Card } from '../../components';
import { useTheme } from 'styled-components';
import {
  Container,
  Content,
  GoBack,
  Header,
  Title,
  LineContainer,
  Square,
  Line,
  CardContainer
} from './styles';

const Characters: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <GoBack name="arrow-left" size={24} color={theme.colors.header} />

        <Header>
          <Title>AGENTES</Title>

          <LineContainer>
            <Square />
            <Line />
          </LineContainer>
        </Header>


        <CardContainer>
          <CardCharacter />
          <CardCharacter />
        </CardContainer>

      </Content>
    </Container>
  );
}

export default Characters;