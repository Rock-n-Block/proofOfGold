import React from 'react';

import './Delivery.scss';

const DeliveryPage: React.FC = () => {
  const shipping = [
    'Orders will be delivered to the buyer’s registered and verified address. For deliveries to a different address, buyers are required to send a request via email: Office@denariusglobal.com. The POG team will then contact the buyer for further verification.',
    'POG will always bear the risk for the delivery until the buyer has signed for the parcel.',
    'Shipping will be initiated as soon as possible after the full payment has been received. Delivery for items in stock listed as available for immediate delivery, will normally be initiated within two (2) weeks upon receiving payment. For items listed with a specific delivery date, delivery will normally be initiated within 7 business days of the listed delivery date. In extraordinary cases with circumstances outside of POG control such as, but not limited to, delays from our suppliers, transportation delays and so forth, POG reserves the right to initiate the delivery within 60 days of the placed order. POG insures all deliveries from its suppliers. In the unlikely event that the items are damaged or missing in transit from its suppliers, POG reserves the right of further delay of the delivery or repayment upon settlement of the claim with its insurer.',
    'In the unlikely event that a parcel has not reached the buyer within 21 days from the time the buyer received the e-mail notification of the order being sent, the buyer must contact POG.',
    'If the parcel is damaged or opened upon delivery, the buyer must notify the courier/post office immediately and make a note of the damages on the delivery receipt before contacting POG.',
    'If the buyer orders several items with different delivery times, the items will be delivered at the time when all items are available for delivery.',
    'In case a shipment for a pre-paid order is returned to POG, POG will keep the parcel for six (6) months during which time the buyer can make claim for the parcel. POG will charge shipping costs to resend the parcel. If the parcel is unclaimed following six (6) months, ownership of the items in the parcel will accrue to POG.',
    'The buyer is responsible for any import costs such as, but not limited to, import taxes, import duties, import tariffs or import declarations where applicable.',
  ];

  const collection = [
    'Buyers can choose to pick up their online purchases in person at designated pick-up points. To arrange for self-collection, please send a request via Office@denariusglobal.com. For verification purposes, the buyer is required to present a valid ID.',
    'Buyers can also appoint an authorized representative to collect their orders, provided that sufficient identification including a copy of the buyer’s identification and a signed letter of authorization is presented. POG requires the buyer or his/her authorized representative to sign an acknowledgement upon receiving the items. POG reserves the right to refuse to hand over the items, in the event that the identity of the buyer or his/her authorized representative or their relationship is not verified, or in the event the payment for the items ordered is not confirmed.',
    'In the unlikely event that the items are damaged or missing in transit from its suppliers, POG reserves the right of further delay of the delivery or repayment upon settlement of the claim with its insurer. All items must be picked up by the buyer no later than seven (7) days after the later of a) the order placement if the payment will be settled at the time of collection, or b) the payment confirmation e- mail in the case where the order has been pre-paid.',
  ];
  return (
    <div className="delivery">
      <div className="row">
        <div className="delivery__content">
          <h1 className="h1-md text-gradient delivery__title">Shipping</h1>
          <ul className="delivery__shipping text-md">
            {shipping.map((item, index) => (
              <li className="delivery__item">
                <span className="delivery__item-number text-gradient">
                  {index + 1}.
                </span>
                {item}
              </li>
            ))}
            <div className="delivery__info">
              POG does not take any responsibility for losses or damages in
              regards to uncollected or returned parcels.
            </div>
          </ul>
          <div className="delivery__collection-title h3 text-gradient">
            Self-Collection
          </div>
          <ul className="delivery__collection">
            {collection.map((item, index) => (
              <li className="delivery__item">
                <span className="delivery__item-number text-gradient">
                  {index + 1}.
                </span>
                {item}
              </li>
            ))}
            <div className="delivery__info">
              If for any reason the buyer or the buyer’s authorized
              representative is unable to pick up the order within this period,
              POG reserves the right to process the ordered items into vault
              storage and charges a vault storage fee. The buyer can however,
              assuming valid reasons, contact POG to request an extension, or to
              arrange another delivery option.
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
