import React from 'react';

import './Franchise.scss';

import background_img1 from '../../assets/img/franchise/background-image-1.png';
import presentation1_img1 from '../../assets/img/franchise/presentation-1-image-1.png';
import presentation2_img1 from '../../assets/img/franchise/presentation-2-image-1.png';
import presentation2_img2 from '../../assets/img/franchise/presentation-2-image-2.png';
import presentation2_img3 from '../../assets/img/franchise/presentation-2-image-3.png';
import items1_icon1 from '../../assets/img/franchise/items-1-icon-1.svg';
import items1_icon2 from '../../assets/img/franchise/items-1-icon-2.svg';
import items1_icon3 from '../../assets/img/franchise/items-1-icon-3.svg';
import items1_icon4 from '../../assets/img/franchise/items-1-icon-4.svg';
import items1_icon5 from '../../assets/img/franchise/items-1-icon-5.svg';
import items1_icon6 from '../../assets/img/franchise/items-1-icon-6.svg';
import items2_icon1 from '../../assets/img/icons/4.svg';
import items2_icon2 from '../../assets/img/icons/5.svg';
import { Button } from '../../components';
import { InfoCard } from '../../components';

const items: [any[], any[], any[]] = [
  [
    {
      img: items1_icon1,
      text: 'Accepts scrap gold',
    },
    {
      img: items1_icon2,
      text: 'Sale of gold bullion and bars',
    },
    {
      img: items1_icon3,
      text: 'Sale of Ducatus Prime Gold Coins',
    },
    {
      img: items1_icon4,
      text: 'Consignment of jewellery (on a monthly basis)',
    },
    {
      img: items1_icon5,
      text: 'Auction held (last day of every month)',
    },
    {
      img: items1_icon6,
      text: 'New collections every start of the month',
    },
  ],
  [
    {
      img: items2_icon1,
      title: 'Stability and Innovation',
      text:
        'POG is both traditional and innovative. It offers gold, which is a hedge against inflation and a proven store of value for hundreds of years, using blockchain technology delivering transparency and authenticity like never before.  ',
    },
    {
      img: items2_icon2,
      title: 'Community-Supported',
      text:
        'POG goes beyond the conventional franchise business model. Through crowdfunding, franchisees are to invest 21% of the required capital while the remaining 79% is raised through lease tokens issued and marketed under Centurion’s Lease and Earn portal. ',
    },
  ],
  [
    {
      text:
        'An individual or enterprise who want to operate shops in their hometown for an initial tenure of 5 years.',
    },
    {
      text:
        'The franchisee will hold a minimum number of lease tokens equivalent to 21% of the required capital at any given time.',
    },
    {
      text:
        'The number of lease tokens issued per store varies, depending on the capital required to set up the franchise in the given location.',
    },
  ],
];

const FranchisePage: React.FC = () => {
  return (
    <div className="franchise">
      <div className="franchise__presentation franchise__presentation_first">
        <div className="franchise__presentation-container row">
          <div className="franchise__presentation-title text-gradient h1-lg">
            About the POG Franchise
          </div>

          <div className="franchise__presentation-text text">
            A truly golden opportunity, the Proof of Gold franchise elevates the
            business of gold retailing by utilizing both traditional and
            innovative proven business models. Apart from accepting scrap gold
            for purchase and selling limited-edition gold products, POG also
            supports a cashless financial exchange powered by technology.
          </div>

          <div className="franchise__presentation-images">
            <img
              src={presentation1_img1}
              alt=""
              className="franchise__presentation-images_first"
            />
          </div>
        </div>
      </div>

      <img
        className="franchise__background-image"
        src={background_img1}
        alt=""
      />

      <div className="franchise__presentation franchise__presentation_second">
        <div className="franchise__presentation-container row">
          <div className="franchise__presentation-title text-gradient h1-lg">
            POG Stores
          </div>

          <div className="franchise__presentation-text text">
            POG Stores are fully cashless and welcome new forms of payments,
            such as cryptocurrency. Upholding pride in authenticity and
            security, all POG products are registered on the DucatusX
            blockchain. POG is the exclusive retailer of Ducatus Prime Limited
            Edition Gold products, which are either bundled with crypto value or
            offer rewards to buyers in “crypto back” bonus. An important part of
            the Ducatus Cashless Economy, Proof of Gold brings the time-honoured
            trade of gold to a revolutionary digital frontier.
            <br />
            <br />
            The ideal location for a Proof of Gold store is in an area of high
            visibility, such as a shopping district or a shopping mall.
          </div>

          <div className="franchise__presentation-images">
            <img
              src={presentation2_img1}
              alt=""
              className="franchise__presentation-images_first"
            />
            <img src={presentation2_img2} alt="" />
            <img src={presentation2_img3} alt="" />
          </div>

          <div className="franchise__presentation-text-bottom text-lg text-gradient text-bold">
            Minimum Space: 30 square metres
            <br />
            Ideal Location: Shopping District / Shopping Mall
          </div>

          <div className="franchise__presentation-title franchise__presentation-title_h2 h2-md">
            Products and Services
          </div>

          <div className="franchise__presentation-items">
            {items[0].map((item, index) => (
              <div
                className="franchise__presentation-items-item box-border-gradient"
                key={index}>
                <div className="franchise__presentation-items-item-icon-container">
                  <img
                    className="franchise__presentation-items-item-icon"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="franchise__presentation-items-item-text text text-bold">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="franchise__gold-presentation">
        <div className="franchise__gold-presentation-container row">
          <div className="franchise__gold-presentation-title text-bold h1-lg">
            The Franchise Opportunity
          </div>

          <div className="franchise__gold-presentation-text text">
            POG is a future-proof opportunity that elevates the age-old business
            of gold retailing to the digital and cashless age.
          </div>

          <div className="franchise__gold-presentation-items">
            {items[1].map((item, index) => (
              <InfoCard key={index} {...item} centered={true} />
            ))}
          </div>

          <Button
            className="franchise__gold-presentation-button"
            colorScheme="black"
            size="lg">
            Find out more about Lease & Earn
          </Button>
        </div>
      </div>

      <div className="franchise__presentation franchise__presentation_third">
        <div className="franchise__presentation-container row">
          <div className="franchise__presentation-title text-gradient h1-lg">
            The Franchisee
          </div>

          <div className="franchise__presentation-items">
            {items[2].map((item, index) => (
              <div
                className="franchise__presentation-items-item box-border-gradient"
                key={index}>
                <div className="franchise__presentation-items-item-text text text-bold">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <Button className="franchise__presentation-button" size="lg">
            Find out more about being a Franchisee
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FranchisePage;
