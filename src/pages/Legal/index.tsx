import React from 'react';
import classNames from 'classnames';

import './Legal.scss';

const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = ['Impressum', 'Terms and Condition', 'Privacy Policy'];
  return (
    <div className="legal">
      <div className="row">
        <h1 className="legal__title text-gradient h1-md">Legal Page</h1>
        <div className="legal__tabs tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={classNames('legal__tabs-item tabs__item text-lg', {
                active: index === activeTab,
              })}
              onClick={() => setActiveTab(index)}>
              {tab}
            </div>
          ))}
        </div>
        {activeTab === 0 && (
          <>
            <div className="legal__info text-md">
              <p>The POG website is owned by:</p>
              <p>
                DENARIUS FINANCIAL SERVICES AG.<br></br>
                Bahnhofstrasse 216300 Zug, <br></br>
                Switzerland
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
      </div>
    </div>
  );
};

export default LegalPage;
