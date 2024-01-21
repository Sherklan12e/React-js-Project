// src/components/CardList.js   
import React from 'react';
import Card from 'react-bootstrap/Card';

const CardList = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <Card key={item.id}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
