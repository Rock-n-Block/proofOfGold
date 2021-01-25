import React from 'react';

import './Franchise.scss';

import background_img1 from "../../assets/img/franchise/background-image-1.png";
import presentation1_img1 from "../../assets/img/franchise/presentation-1-image-1.png";
import presentation2_img1 from "../../assets/img/franchise/presentation-2-image-1.png";
import presentation2_img2 from "../../assets/img/franchise/presentation-2-image-2.png";
import presentation2_img3 from "../../assets/img/franchise/presentation-2-image-3.png";

const itemsTexts = [
  [
    'Accepts scrap gold',
    'Sale of gold bullion and bars',
    'Sale of Ducatus Prime Gold Coins',
    'Consignment of jewellery (on a monthly basis)',
    'Auction held (last day of every month)',
    'New collections every start of the month'
  ]
]


const FranchisePage: React.FC = () => {
  const items: [any[], any[]] = [[], []];
  itemsTexts[0].map((text) =>
    items[0].push(
      <div className="franchise__presentation-items-item">
        <div className="franchise__presentation-items-item-icon-container">
          <div className="franchise__presentation-items-item-icon" />
        </div>
        <div className="franchise__presentation-items-item-text text text-bold">
          { text }
        </div>
      </div>
    )
  );

  return (
    <div className="franchise">
      <div className="franchise__presentation franchise__presentation_first">
        <div className="franchise__presentation-container">
          <div className="franchise__presentation-title text-gradient text-bold h1-lg">
            About the POG Franchise
          </div>

          <div className="franchise__presentation-text text">
            A truly golden opportunity, the Proof of Gold franchise elevates the business of gold retailing by
            utilizing both traditional and innovative proven business models. Apart from accepting scrap gold for
            purchase and selling limited-edition gold products, POG also supports a cashless financial exchange powered
            by technology.
          </div>

          <div className="franchise__presentation-images">
            <img src={presentation1_img1} alt="" className="franchise__presentation-images_first"/>
          </div>
        </div>
      </div>

      <img className="franchise__background-image" src={background_img1} alt="" />

      <div className="franchise__presentation franchise__presentation_second">
        <div className="franchise__presentation-container">
          <div className="franchise__presentation-title text-gradient text-bold h1-lg">
            POG Stores
          </div>

          <div className="franchise__presentation-text text">
            POG Stores are fully cashless and welcome new forms of payments, such as cryptocurrency. Upholding pride
            in authenticity and security, all POG products are registered on the DucatusX blockchain. POG is the
            exclusive retailer of Ducatus Prime Limited Edition Gold products, which are either bundled with crypto
            value or offer rewards to buyers in “crypto back” bonus. An important part of the Ducatus Cashless
            Economy, Proof of Gold brings the time-honoured trade of gold to a revolutionary digital frontier.<br />
            <br />
            The ideal location for a Proof of Gold store is in an area of high visibility, such as a shopping district
            or a shopping mall.

            <div className="franchise__presentation-text-bottom text-lg text-gradient text-bold">
              Minimum Space: 30 square metres<br />
              Ideal Location: Shopping District / Shopping Mall
            </div>
          </div>

          <div className="franchise__presentation-images">
            <img src={presentation2_img1} alt="" className="franchise__presentation-images_first"/>
            <img src={presentation2_img2} alt=""/>
            <img src={presentation2_img3} alt=""/>
          </div>

          <div className="franchise__presentation-title_h2 text-bold h2-md">
            Products and Services
          </div>

          <div className="franchise__presentation-items">
            { items }
          </div>
        </div>
      </div>
    </div>
  )
};

export default FranchisePage;
