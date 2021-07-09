import React from 'react';
import traceIcon from '../../assets/icons/trace.png';
import cardVideo from '../../assets/logo/cardVideo.png';

import { Container, Header, Title, Icon, Description, CardVideo } from './styles';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Container>
      <Header>
        <Title>
          {title}
        </Title>

        <Icon source={traceIcon} />
      </Header>

      <Description>
        {description}
      </Description>


      <CardVideo source={cardVideo} />
    </Container>
  );
}

export default Card;