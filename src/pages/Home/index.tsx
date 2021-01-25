import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFade } from 'swiper';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './Home.scss';

import slideImg1 from '../../assets/img/home/slide-1.jpg';
import slideImg2 from '../../assets/img/home/slide-2.jpg';
import slideImg3 from '../../assets/img/home/slide-3.jpg';
import coinImg from '../../assets/img/coins/5gram.svg';

SwiperCore.use([Pagination, EffectFade]);

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Swiper
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="home__slider">
        <SwiperSlide className="home__slider-slide">
          <img src={slideImg1} alt="" className="home__slider-slide-bg" />
          <div className="row home__slider-slide-row">
            <div className="h1-lg home__slider-slide-title text-gradient">
              Future-Proof
            </div>
            <div className="home__slider-slide-text text">
              POG is powered by blockchain technology.
            </div>
            <Link to="/">
              <Button>BUY GOLD</Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home__slider-slide">
          <img src={slideImg2} alt="" className="home__slider-slide-bg" />
          <div className="row home__slider-slide-row">
            <div className="h1-lg home__slider-slide-title text-gradient">
              Unrivalled Quality
            </div>
            <div className="home__slider-slide-text text">
              POG features limited edition gold products of the finest
              craftsmanship.
            </div>
            <Link to="/">
              <Button>BUY GOLD</Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home__slider-slide">
          <img src={slideImg3} alt="" className="home__slider-slide-bg" />
          <div className="row home__slider-slide-row">
            <div className="h1-lg home__slider-slide-title text-gradient">
              Innovative Investment
            </div>
            <div className="home__slider-slide-text text">
              POG delivers innovative alternative gold investments for all.
            </div>
            <Link to="/">
              <Button>BUY GOLD</Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="home__info home__content">
        <div className="row home__info-row">
          <div className="home__info-box">
            <h2 className="h2 text-gradient home__info-title">
              We’re Setting a New Gold Standard
            </h2>
            <div className="home__info-text text">
              Throughout history, gold has always been a&nbsp;measure
              of&nbsp;wealth and a&nbsp;symbol of&nbsp;great achievement.
              It&nbsp;has been used, much like money, as&nbsp;a&nbsp;means
              of&nbsp;exchange. Today, gold is&nbsp;acknowledged as&nbsp;one
              of&nbsp;the most valuable assets in&nbsp;the market. The POG
              franchise was created to&nbsp;bring gold products into
              a&nbsp;whole new frontier&nbsp;&mdash; the world
              of&nbsp;next-generation investors.
            </div>
            <img src={coinImg} alt="" className="home__info-coin" />
          </div>
          <div className="home__info-box">
            <h2 className="h2 text-gradient home__info-title">
              The Union of Tradition and Innovation
            </h2>
            <div className="home__info-text text">
              Through POG, customers can buy exquisite and finely crafted gold
              coins and bars with the added security and transparency that comes
              with blockchain technology. Each gold product you purchase
              is&nbsp;linked to&nbsp;a&nbsp;unique DRC 721 token to&nbsp;mark
              its quality and authenticity, as&nbsp;well as&nbsp;ownership.
            </div>
            <div className="home__info-text text">
              Buyers have the option to&nbsp;choose standard payment modes like
              credit card, bank transfer and PayPal. Beyond traditional payment
              modes, POG is&nbsp;also open to&nbsp;buyers who want
              to&nbsp;transact using cryptocurrency.
            </div>

            <div className="home__info-text text">
              With this new forward-thinking model, POG is&nbsp;set to&nbsp;open
              even more avenues of&nbsp;possibilities for gold and for everyone
              who would like to&nbsp;explore the wealth and prosperity that
              comes with a&nbsp;time-honoured asset like gold.
            </div>
            <Button className="home__info-btn" type="lg">
              View Products
            </Button>
          </div>
        </div>
      </div>
      <div className="home__content home__proof">
        <div className="row">
          <div className="h1-lg home__proof-title">Truly A Proof of Gold</div>
          <div className="h1-lg home__proof-subtitle">
            POG proudly brings you the world’s first Gold + Cryptocurrency
            product
          </div>
          <div className="home__proof-info">
            <div className="home__proof-info-title text">
              The Ducatus Prime Limited Edition Series.
            </div>
            <div className="home__proof-info-text text">
              A&nbsp;time-honoured asset and next-generation cryptocurrency
              in&nbsp;one, each Ducatus Prime Gold product comes with
              a&nbsp;specific added value in&nbsp;Ducatus (DUC) cryptocurrency.
            </div>
          </div>
          <div className="home__proof-features">
            <div className="h3 home__proof-features-title">Key Features</div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default HomePage;
