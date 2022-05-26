import React from 'react';

const Card = ({ card }) => (
      <div className="card">
        <img className="card__image" src={ card.show.image.medium} />
        <div className="card__name">{ card.show.name  }</div>
      </div>

  )

export default Card