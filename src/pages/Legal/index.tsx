import React from 'react';
import classNames from 'classnames';

import './Legal.scss';

const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = ['Impressum', 'Terms and Conditions', 'Privacy Policy'];
  return (
    <div className="legal">
      <div className="row">
        <h1 className="legal__title text-gradient h1-md">Legal Page</h1>
      </div>
      <div className="row legal__row-tabs">
        <div className="legal__tabs tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={classNames('legal__tabs-item tabs__item text-lg', {
                active: index === activeTab,
              })}
              onClick={() => setActiveTab(index)}>
              <span>{tab}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        {activeTab === 0 && (
          <>
            <div className="legal__info text-md">
              <p>The POG website is owned by:</p>
              <p>
                SwissFinanz AG.<br></br>
                SwissFinanz AG<br></br>
                Rigistrasse 2<br></br>
                CH-6300 Zug
              </p>
              <p>For any questions you may have regarding our Company,</p>
              <p>
                send us an email:{' '}
                <a href="mailto: Office@denariusglobal.com">
                  Office@denariusglobal.com
                </a>
              </p>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Proprietary Rights
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  The materials on this website, including the information
                  available on or through this website (the “Contents”) are
                  protected by copyright, trademark and other forms of
                  proprietary rights. All rights, title and interest in the
                  Contents are owned by, licensed to or controlled by the
                  Company.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">Contents</h3>
              <div className="legal__rights-text text-md">
                <p>
                  Except as otherwise provided, no part of the Contents of this
                  website shall be reproduced, republished, uploaded, posted,
                  transmitted or otherwise distributed in any way, without the
                  prior written permission of the Company.
                </p>
                <p>
                  Modification of any of the Contents or use of the Contents for
                  any other purpose will be a violation of the Company’s
                  copyright and other intellectual property rights. Graphics and
                  images on this website are protected by copyright and may not
                  be reproduced or appropriated in any manner without the
                  written permission of the respective copyright owners.
                </p>
                <p>
                  The design and layout of this website is protected by
                  intellectual property and other laws and may not be copied or
                  reproduced in whole or in part. No logo, graphic, sound,
                  image, text or any other content from this website may be
                  copied, reproduced or transmitted unless expressly permitted
                  in writing by the Company.
                </p>
              </div>
            </div>
          </>
        )}
        {activeTab === 1 && (
          <>
            <div className="legal__info text-md">
              <p>
                The Terms and Conditions Agreement, Disclaimer and Privacy
                Policy apply to all users of{' '}
                <a href="https://d-pog.com" className="text-gradient">
                  https://d-pog.com
                </a>
              </p>
              <p>
                By accessing, viewing and/or ordering from{' '}
                <a href="https://d-pog.com" className="text-gradient">
                  https://d-pog.com
                </a>
                , you acknowledge that you have read and understood these Terms
                and Conditions and you agree to be bound by them.
              </p>
              <p>
                All contents in this website, whether original or submitted to
                Proof of Gold, is subject to change without prior notice.
              </p>
              <p>
                SwissFinanz AG. reserves the right to refuse response to any
                source of scam that may be destructive to this website and our
                business.
              </p>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Copyright and Trademark
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  SwissFinanz AG., the owner of this website (
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>
                  ), own the trademarks, logos and service mark contained in
                  this website. All other trademarks not owned by{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>
                  , or its affiliates that appear on this site are the property
                  of their respective owners, who may or may not be affiliated
                  with, connected to, or sponsored by{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>
                  , or its affiliates. These may not be used without written
                  permission of{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>{' '}
                  or the party owning them.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Modification of Web Site and Terms and Conditions
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  The information, materials, data and arrangement (“Material”)
                  herein contained in this Web Site and the Terms and Conditions
                  and descriptions that appear are subject to change at the sole
                  discretion of{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Liability Disclaimers
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  The Material contained in this website, (including text,
                  images, graphics, links, sound files, animation files, video
                  files or other items and their arrangement) are provided “as
                  is”, “as available”.
                </p>
                <p>
                  No warranty of any kind, implied, expressed or statutory,
                  including but not limited to the warranties of
                  non-infringement of the third party’s rights, title,
                  satisfactory quality, merchantability, fitness for any
                  particular purpose and freedom from any computer virus or
                  other malicious, destructive or corrupting code, programme or
                  macro, is given in conjunction with the information and
                  materials contained in or linked to this website.
                </p>
                <p>
                  This website may include publications with technical
                  inaccuracies or typographical errors that will be corrected as
                  they are discovered at{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>{' '}
                  discretion. Also, changes are periodically added to the
                  material contained herein. These corrections and changes may
                  be incorporated into the website at a later date.{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>{' '}
                  may at any time make modifications, improvements and/or
                  changes to these Terms and Conditions and the material (names,
                  images, pictures, logo and icons) displayed on the website or
                  products and services referred to within, with or without
                  notice. Advice received via this website should not be relied
                  upon for personal, legal or financial decisions and you should
                  consult an appropriate professional for specific advice
                  tailored to your situation.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h4 className="text-md text-gradient text-uppercase">
                None of SWISSFINANZ AG. or its affiliates shall be liable for
                any damages, loss or expense including without limitation,
                special damage, or consequential damage, or economic loss
                arising from or in connection with:
              </h4>
              <ul className="legal__rights-list text-md">
                <li>
                  <span className="text-gradient">1.</span>
                  any access, use or the delay or inability to access or use
                  this website, or reliance on the Materials and/or any other
                  information contained in this website;
                </li>
                <li>
                  <span className="text-gradient">2.</span>
                  any system, server or connection failure, error, omission,
                  interruption, delay in transmission, or computer failure;
                </li>
                <li>
                  <span className="text-gradient">3.</span>
                  any use of or access to any other website linked to this
                  website;
                </li>
                <li>
                  <span className="text-gradient">4.</span>
                  any services, products, information, date, software or other
                  material obtained from this website or from any other website
                  linked to this website,
                </li>
              </ul>
              <p>
                even if SwissFinanz AG. or its agents or employees are advised
                of the possibility of such damages, losses and expenses. This
                exclusion clause shall effect to the fullest extent permitted by
                law. If you are dissatisfied with any portion of this website,
                or with any of these Terms and Conditions of use, your sole and
                exclusive remedy is to discontinue using this website.
              </p>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Return Policy
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  We guarantee your satisfaction at{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>
                  . We provide all our customers with a refund, return and/or
                  exchange policy if the product does not match the description
                  on our offering sheet / website. This right is limited to
                  three (3) days from the date on which the customer receives
                  their items and notifies us, provided they are kept in their
                  original packaging. On returning related items, the customer
                  may (at{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>{' '}
                  discretion) be required to pay for any market loss on their
                  returns. Any market gain on refunds shall remain the property
                  of{' '}
                  <a href="https://d-pog.com" className="text-gradient">
                    https://d-pog.com
                  </a>
                  .
                </p>
                <p>
                  Once the coin has been registered, a condition required to
                  receive your DUC coin allocation (please see below
                  definition), the above return policy is null avoid.
                </p>
                <p>
                  If for any reason you have a problem, please feel free to
                  contact us. We do charge a 5% restocking fee on all credit
                  card orders returned. If an exchange is requested, we reserve
                  the right to find an acceptable replacement or refund your
                  money.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Confirmation
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  An email confirmation will be sent to you upon receipt of your
                  order.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Fraud Warning
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  We take fraudulent transactions very seriously and acquire the
                  services of various credit reporting agencies as well as local
                  law enforcement agencies in the event a fraudulent transaction
                  occurs.
                </p>
              </div>
            </div>
          </>
        )}
        {activeTab === 2 && (
          <>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                1.Introduction
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  This Privacy policy is designed to inform you of our policies
                  regarding the collection, use and disclosure of Personal Data
                  we receive from you, as well as to assist you in making an
                  informed decision before providing us with any of your
                  Personal information .
                </p>
                <p>
                  In the Privacy Policy, “we”,”us”,”our” shall mean SwissFinanz
                  AG having its registered office in Rigistrasse 2, CH-6300 Zug,
                  Switzerland (as Controller according to the European General
                  Data Protection Regulation (“GDPR”) and its affiliated and
                  related companires.
                </p>
                <p>
                  If you, at any time, have any queries on this Privacy Policy
                  or any other queries in relation to how we may manage, process
                  and protect your personal data,please do not hesitate to
                  contact our Data Protection Officer (whose contact details are
                  set out below).
                </p>
                <p>
                  <a
                    href="mailto:Office@denariusglobal.com"
                    className="text-gradient">
                    Office@denariusglobal.com
                  </a>
                </p>
                <p>Attention: Data Protection Officer</p>
                <p>
                  By using the site and/or our other services and/or products,
                  you express your agreement with this policy and the condition
                  of process your Personal Data contained herein; if you do not
                  agree with these conditions, you should not use the site
                  and/or our other services and/or products.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                2.Data we collect
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  Personal Data: While using the site, and/or our services
                  and/or our products we may ask you to provide us Personal Data
                  that can be used to contact or identify you.”Personal Data” is
                  defined to mean data, whether true or not, about an individual
                  who can be identified from that data, or from that data and
                  other information to which an organisation has or is likely to
                  have access provided that to the extent you reside in, or are
                  otherwise subject to the personal data laws of , a
                  jurisdiction the relevant as or other applicable rules of
                  which provide for a different definition of personal data, the
                  definition of “Personal Data” here under shall be construed to
                  also encompass any other types of data that are included in
                  such different definition. The Personal Data that we may
                  collect from you includes, but is not limited to, your
                  salutation, name, company, designation, industry, gender,
                  country of residence, contact number and one more email
                  addresses.
                </p>
              </div>
            </div>
            <div className="legal__rights">
              <h3 className="legal__rights-title text-gradient h3">
                Disclaimers
              </h3>
              <div className="legal__rights-text text-md">
                <p>
                  Precious metals markets are volatile and the value of precious
                  metals may go down as well as up. Accordingly, investments in
                  precious metals involve a degree of risk which may make them
                  unsuitable for certain individuals. You should carefully
                  consider the suitability of an investment in precious metals
                  as a personal investment and if needs be should consider
                  seeking independent professional advice before proceeding.
                </p>
                <p>
                  The precious metal bullion markets, worldwide, are
                  unregulated. There is no guarantee, explicit or implied, of
                  the future value of any of the precious metal products that we
                  sell.
                </p>
                <p>
                  FOR INFORMATION ABOUT DUC AND THE RISKS ASSOCIATED WITH THE
                  PURCHASE OF DUC, SEE{' '}
                  <a
                    href="HTTPS://WWW.DUCATUSCOINS.COM/LEGAL.HTML"
                    className="text-gradient">
                    HTTPS://WWW.DUCATUSCOINS.COM/LEGAL.HTML
                  </a>
                  .
                </p>
                <p>
                  By visiting this site, you agree to be bound by SwissFinanz
                  AG. Terms and Conditions and Privacy Policy. The DUC issued by
                  Centurion Global is intended for qualified buyers who
                  understand and accept the risks associated with the ownership
                  of digital assets such as DUC. Each buyer is advised to
                  conduct his/her own due diligence as none of Centurion or its
                  affiliates provides any investment advice, business advice or
                  tax or legal advice.
                </p>
                <p>
                  THE INFORMATION PROVIDED ON THIS DOCUMENT OR WEBSITE IS NOT
                  FOR CIRCULATION, DISPLAY, RECEPTION OR DISTRIBUTION IN
                  SINGAPORE (INCLUDING TO THE PUBLIC OR ANY SECTOR OF THE PUBLIC
                  IN SINGAPORE) OR ANY OTHER JURISDICTION WHERE THE PRODUCTS OR
                  SERVICES OF CENTURION OR ITS AFFILIATES WOULD BE PROHIBITED
                  WITHOUT A REQUISITE LICENSE OR EXEMPTION. NEITHER CENTURION
                  NOR ANY OF ITS AFFILIATES HEREBY OFFERS ANY SERVICES THAT
                  WOULD CONSTITUTE A PAYMENT SERVICE FOR PURPOSE OF THE
                  SINGAPORE PAYMENT SERVICES ACT 2019, OR ANY OTHER ACTIVITY
                  SUBJECT TO REGULATION BY THE MONETARY AUTHORITY OF SINGAPORE,
                  IN SINGAPORE OR TO ANY PERSON IN SINGAPORE. DUC IS NOT
                  AVAILABLE FOR SALE BY CENTURION IN SINGAPORE.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LegalPage;
