import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFade } from 'swiper';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Button, InfoCard, ProductCard } from '../../components';
import { ContactUsForm } from '../../modules';
import { useMst } from '../../store/root';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './Home.scss';

import slideImg1 from '../../assets/img/home/slide-1.jpg';
import slideImg2 from '../../assets/img/home/slide-2.jpg';
import slideImg3 from '../../assets/img/home/slide-3.jpg';
import slideMImg1 from '../../assets/img/home/slideM-1.jpg';
import slideMImg2 from '../../assets/img/home/slideM-2.jpg';
import slideMImg3 from '../../assets/img/home/slideM-3.jpg';
import coinImg from '../../assets/img/products/5gram.svg';
import icon1 from '../../assets/img/icons/1.svg';
import icon2 from '../../assets/img/icons/2.svg';
import icon3 from '../../assets/img/icons/3.svg';
import icon4 from '../../assets/img/icons/4.svg';
import icon5 from '../../assets/img/icons/5.svg';
import icon6 from '../../assets/img/icons/6.svg';
import icon7 from '../../assets/img/icons/7.svg';

SwiperCore.use([Pagination, EffectFade]);

const features = [
  {
    img: icon1,
    text:
      'Limited edition and in quantities based on the Fibonacci order on the DucatusX blockchain',
  },
  {
    img: icon2,
    text:
      'Ongoing Lucky Gram Promotion for all buyers of any sold-out series, Ducatus will give away gold as prize',
  },
  {
    img: icon3,
    text: 'Exclusive to POG Gold Trading',
  },
  {
    img: icon7,
    text:
      'Stand a chance to win a complete set of Ducatus Prime Limited Edition Gold Coins and Gold Bars from POG.',
    link: 'https://joinandwin.centuriongm.com/',
    btnText: 'Join and Win',
  },
];

const about = [
  {
    img: icon4,
    text:
      'POG offers gold investors all around the world with the highest quality precious metal assets facilitated by a multinational team that is based in Singapore and Dubai, two of the world’s most formidable financial centres.',
    title: 'Global Reach',
  },
  {
    img: icon5,
    text:
      'POG makes it easy for buyers to purchase a known traditional asset. Simply sign up to create an account, browse through our growing line-up of products, and choose your preferred payment method (Credit card, Bank transfer, PayPal or Cryptocurrency) upon checkout.',
    title: (
      <Fragment>
        Seamless<br></br> Transactions
      </Fragment>
    ),
  },
  {
    img: icon6,
    text:
      'POG offers investors an exclusive selection of limited and carefully crafted 999.99 gold products that are priced at competitive market rates.',
    title: (
      <Fragment>
        Best<br></br> Available Pricing
      </Fragment>
    ),
  },
];

const HomePage: React.FC = observer(() => {
  const { productsStore, user } = useMst();

  return (
    <div className="home">
      <Swiper
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="home__slider">
        <SwiperSlide className="home__slider-slide">
          {window.innerWidth < 776 ? (
            <img src={slideMImg1} alt="" className="home__slider-slide-bg" />
          ) : (
            <img src={slideImg1} alt="" className="home__slider-slide-bg" />
          )}
          <div className="row home__slider-slide-row">
            <div className="h1-lg home__slider-slide-title text-gradient">
              Future-Proof
            </div>
            <div className="home__slider-slide-text text">
              POG is powered by blockchain technology.
            </div>
            <Link to="/shop">
              <Button>BUY GOLD</Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home__slider-slide">
          {window.innerWidth < 776 ? (
            <img src={slideMImg2} alt="" className="home__slider-slide-bg" />
          ) : (
            <img src={slideImg2} alt="" className="home__slider-slide-bg" />
          )}
          <div className="row home__slider-slide-row">
            <div className="h1-lg home__slider-slide-title text-gradient">
              Unrivalled Quality
            </div>
            <div className="home__slider-slide-text text">
              POG features limited edition gold products of the finest
              craftsmanship.
            </div>
            <Link to="/shop">
              <Button>BUY GOLD</Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home__slider-slide">
          {window.innerWidth < 776 ? (
            <img src={slideMImg3} alt="" className="home__slider-slide-bg" />
          ) : (
            <img src={slideImg3} alt="" className="home__slider-slide-bg" />
          )}
          <div className="row home__slider-slide-row">
            <div className="h1-lg home__slider-slide-title text-gradient">
              Innovative Investment
            </div>
            <div className="home__slider-slide-text text">
              POG delivers innovative alternative gold investments for all.
            </div>
            <Link to="/shop">
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
            <Link to="/shop">
              <Button className="home__info-btn" size="lg">
                View Products
              </Button>
            </Link>
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
            <div className="h3 home__proof-features-title text-uppercase text-bold">
              Key Features
            </div>
            <div className="home__proof-features-cards">
              {features.map((card, index) => (
                <InfoCard key={index} {...card} centered={true} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="home__products">
        <div className="row home__products-row">
          <div className="home__products-title text-gradient h2">
            DUCATUS PRIME GOLD COINS
          </div>
          <div className="home__products-box box-products box-products-mobile-scroll">
            {productsStore.getCoins.map((coin) => (
              <ProductCard key={coin.id} {...coin} />
            ))}
          </div>
          <div className="home__products-disclaimer">
            <p>Disclaimer*</p>
            <p>
              Prices are subject to change depending on prevailing gold market
              value. Card designs are for illustration purposes only.
            </p>
          </div>
        </div>
      </div>

      <div className="home__bg">
        <div className="row">
          <h1 className="home__bg-title h1-xl">PROOF OF GOLD</h1>
        </div>
      </div>

      <div className="home__products">
        <div className="row home__products-row">
          <div className="home__products-title text-gradient h2">
            DUCATUS PRIME GOLD BARS
          </div>
          <div className="home__products-box box-products box-products-mobile-scroll">
            {productsStore.getBars.map((bar) => (
              <ProductCard key={bar.id} {...bar} />
            ))}
          </div>
          <div className="home__products-disclaimer">
            <p>Disclaimer*</p>
            <p>
              Prices are subject to change depending on prevailing gold market
              value. Card designs are for illustration purposes only.
            </p>
          </div>
        </div>
      </div>

      <div className="home__content home__about">
        <div className="row">
          <div className="h1-lg">A Truly Golden Opportunity</div>
          <div className="home__about-text text-lg">
            <p>
              Proof that even traditional forms of trading and commerce can
              further be enhanced by technology, Proof of Gold (POG) integrates
              blockchain to the business of gold retailing.
            </p>
            <p>
              POG is designed to benefit the modern-day investor, both big and
              small, and opens the door to global opportunities that can only
              possible through innovation. Find out how you can benefit from the
              POG Franchise today!
            </p>
          </div>
          <Link to="/franchise" className="home__about-btn">
            <Button colorScheme="black">Learn more</Button>
          </Link>
          <div className="home__about-title h2">About POG (Proof of Gold)</div>

          <div className="home__about-cards">
            {about.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      <div className="home__contact">
        <div className="row home__contact-row">
          <div className="home__contact-box">
            <div className="home__contact-title h2 text-gradient">
              Contact Us
            </div>
            <div className="home__contact-text text">
              <p>DENARIUS FINANCIAL SERVICES AG.</p>
              <p>Bahnhofstrasse 216300 Zug,</p>
              <p>Switzerland</p>
              <p>
                email:
                <a href="mailto:Office@denariusglobal.com">
                  Office@denariusglobal.com
                </a>
              </p>
            </div>
          </div>
          <div className="home__contact-box">
            <div className="home__contact-title home__contact-form-title h2 text-gradient">
              Drop us a note and we’ll get back to you shortly.
            </div>
            <ContactUsForm {...user} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomePage;
