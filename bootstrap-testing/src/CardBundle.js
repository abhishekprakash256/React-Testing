import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardTemp from './Card';

function CardBundle() {
  const cardData = [
    {
      card_title: "Card Title 1",
      card_para: "System design is a multidisciplinary field that encompasses various aspects of designing the distributed systems.",
      img_src: "cards.jpg",
      card_url: "https://example.com/card1",
    },
    {
      card_title: "Card Title 2",
      card_para: "System design is a multidisciplinary field that encompasses various aspects of designing the distributed systems.",
      img_src: "federated-learning-flow.png",
      card_url: "https://example.com/card2",
    },
    // The third card is intentionally left without data to demonstrate the placeholder effect
    {
      card_title: "Card Title 2",
      card_para: "System design is a multidisciplinary field that encompasses various aspects of designing the distributed systems.",
      img_src: "image_1.png",
      card_url: "https://example.com/card2",
    },
    {
      card_title: "Card Title 2",
      card_para: "System design is a multidisciplinary field that encompasses various aspects of designing the distributed systems.",
      img_src: "image_1.png",
      card_url: "https://example.com/card2",
    }
  ];

  return (
    
      <Row className="">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm ={12} md={4} className="mt-3">
            {card.card_title ? (
              <CardTemp 
                card_title={card.card_title} 
                card_para={card.card_para} 
                img_src={card.img_src} 
                card_url={card.card_url} 
              />
            ) : (
              // Placeholder for missing data
              <div style={{ height: '100%',  padding: '20px', textAlign: 'center' }}>
                
              </div>
            )}
          </Col>
        ))}
      </Row>
    
  );
}

export default CardBundle;
