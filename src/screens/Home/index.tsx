import React from 'react';
import { Header, Transition, Card } from '../../components';
import lineIcon from '../../assets/icons/line.png';
import valorantLogo from '../../assets/logo/valorantBackground.png';
import { STRINGS } from './strings';
import {
  Container,
  ValorantImage,
  Content,
  Title,
  HeaderContent,
  LineIcon,
  TransitionContainer
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <ValorantImage source={valorantLogo} />

      <Content>
        <HeaderContent>
          <Title>NÓS SOMOS VALORANT</Title>
          <LineIcon source={lineIcon} />
        </HeaderContent>


        <TransitionContainer>
          <Transition isActive />
          <Transition />
          <Transition />
        </TransitionContainer>

        <Card
          title="Desafia seus limites"
          description={STRINGS.DESCRIPTION}
        />

      </Content>
    </Container>
  );
}

export default Home;