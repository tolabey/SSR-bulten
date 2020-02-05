import React from 'react';
import Cell from '../cell/cell';
import * as accessors from '../../../constants/accessors';

const table = [
  {
    key: 1,
    cellKeyRenderer: (data, idx) => (
      <>
        <div className="row-idx">{idx}</div>
        <div className="--red-color">{data.getIn(accessors.DATE, '')}</div>
        <div className="--red-color">{data.getIn(accessors.DAY, '')}</div>
        <div className="--red-color">{data.getIn(accessors.LIG, '')}</div>
      </>
    ),
    cellValueRenderer: (data) => (
      <>
        <div>{data.getIn(accessors.MATCH_CODE, '')}</div>
        <div>{data.getIn(accessors.TIME, '')}</div>
        <div>{data.getIn(accessors.MATCH, '')}</div>
      </>
    ),
    width: '400px',
  },
  {
    key: 2,
    cellKeyRenderer: () => (<div>Yorumlar</div>),
    cellValueRenderer: () => (<div>Yorumlar</div>),
    width: '100px',
  },
  {
    key: 3,
    cellKeyRenderer: () => <div />,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.MIN_MATCH_REQUIRE_COUNT, '')}</div>,
    width: '50px',
  },
  {
    key: 4,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_1_NAME, '1')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_1_RATE, '')}</div>,
    id: accessors.MATCH_RESULT_1,
    isClickable: true,
    width: '50px',
  },
  {
    key: 5,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_X_NAME, 'X')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_X_RATE, '')}</div>,
    id: accessors.MATCH_RESULT_X,
    isClickable: true,
    width: '50px',
  },
  {
    key: 6,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_2_NAME, '2')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_2_RATE, '')}</div>,
    id: accessors.MATCH_RESULT_2,
    isClickable: true,
    width: '50px',
  },
  {
    key: 7,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.THRESHOLD25_LOWER_NAME, 'Alt')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.THRESHOLD25_LOWER_RATE, '')}</div>,
    id: accessors.THRESHOLD25_LOWER,
    isClickable: true,
    width: '50px',
  },
  {
    key: 8,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.THRESHOLD25_UPPER_NAME, 'Üst')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.THRESHOLD25_UPPER_RATE, '')}</div>,
    id: accessors.THRESHOLD25_UPPER,
    isClickable: true,
    width: '50px',
  },
  {
    key: 9,
    cellKeyRenderer: () => <div>H1</div>,
    cellValueRenderer: () => <div />,
    width: '50px',

  },
  {
    key: 10,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_1_NAME, '1')}</div>,
    cellValueRenderer: () => <div />,
    isClickable: true,
    width: '50px',

  },
  {
    key: 11,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_X_NAME, 'X')}</div>,
    cellValueRenderer: () => <div />,
    isClickable: true,
    width: '50px',

  },
  {
    key: 12,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.MATCH_RESULT_2_NAME, '2')}</div>,
    cellValueRenderer: () => <div />,
    isClickable: true,
    width: '50px',

  },
  {
    key: 13,
    cellKeyRenderer: () => <div>H2</div>,
    cellValueRenderer: () => <div />,
    width: '50px',

  },
  {
    key: 14,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.DOUBLE_CHANCE_1_X_NAME, '1-X')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.DOUBLE_CHANCE_1_X_RATE, '')}</div>,
    id: accessors.DOUBLE_CHANCE_1_X,
    isClickable: true,

    width: '50px',

  },
  {
    key: 15,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.DOUBLE_CHANCE_1_2_NAME, '1-2')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.DOUBLE_CHANCE_1_2_RATE, '')}</div>,
    id: accessors.DOUBLE_CHANCE_1_2,

    isClickable: true,

    width: '50px',

  },
  {
    key: 16,
    cellKeyRenderer: (data) => <div>{data.getIn(accessors.DOUBLE_CHANCE_X_2_NAME, 'X-2')}</div>,
    cellValueRenderer: (data) => <div>{data.getIn(accessors.DOUBLE_CHANCE_X_2_RATE, '')}</div>,
    id: accessors.DOUBLE_CHANCE_X_2,
    isClickable: true,
    width: '50px',

  },
  {
    key: 17,
    cellKeyRenderer: () => <div>Var</div>,
    cellValueRenderer: () => <div>Var</div>,
    width: '50px',

  },
  {
    key: 18,
    cellKeyRenderer: () => <div>Yok</div>,
    cellValueRenderer: () => <div>Yok</div>,
    width: '50px',

  },
  {
    key: 19,
    cellKeyRenderer: () => <div>+99</div>,
    cellValueRenderer: () => <div>3</div>,
    width: '50px',

  },
];


export function Row(props) {
  const {
    event, idx = 0, rendererType, className, eventKey,
  } = props;

  return (
    <div
      className="one-row"
    >
      {
        table.map((each, index) => (
          <Cell
            key={each.key}
            cell={each}
            data={event}
            itemIndex={idx}
            rendererType={rendererType}
            className={className}
            idx={index}
            eventKey={eventKey}
          />
        ))
      }
    </div>
  );
}

export default React.memo(Row);
