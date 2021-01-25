import React from 'react';

import './InfoCard.scss';

interface infoCard {}

const infoCard: React.FC<
  React.HTMLAttributes<HTMLDivElement> & infoCard
> = () => {
  return <div className="i-card"></div>;
};

export default infoCard;
