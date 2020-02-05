import React from 'react';
import I from 'immutable';
import { withConsumer } from '../consumer';
import './coupon.scss';

import * as dataJson from '../../static/bulten_data.json';

const data = I.fromJS(dataJson);
const events = data.getIn(['default', 'Events']);

export function Coupon({ context }) {
  const { state = I.Map() } = context;
  const selectedTabs = state.get('selectedTab', I.Map()).keySeq().toJS();
  let rate = 1;

  React.useEffect(() => {
    selectedTabs.map((each) => {
      const rateObj = events.getIn([each, ...state.getIn(['selectedTab', each, 'id'], [])], I.Map());

      rate *= rateObj.get('O', 1);

      return '';
    });
  }, [selectedTabs])

  return (
    <div className="coupon-wrapper">
      <div className="total-rate-line">{`Total Rate: ${rate.toFixed(2)}`}</div>
      <div className="selected-matches">
        {
          selectedTabs.map((each) => {
            const rateObj = events.getIn([each, ...state.getIn(['selectedTab', each, 'id'], [])], I.Map());

            return (
              <div key={each} className="one-coupon">

                <div className="one-coupon__elem">
                  <div>{rateObj.get('MBS', '')}</div>
                  <div>{`Kod: ${each}`}</div>
                  <div>{`Maç: ${events.getIn([each, 'N'], I.Map())}`}</div>
                </div>

                <div className="one-coupon__elem">
                  <div>{`Oran:${rateObj.get('O', '')}` }</div>
                  <div>{`MBS:${rateObj.get('MBS', '')}`}</div>
                </div>

              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default React.memo(withConsumer(Coupon));
