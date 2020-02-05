import React from 'react';
import './row/row.scss';
import { AutoSizer, List } from 'react-virtualized';
import * as I from 'immutable';
import { Row } from './row/row';
import * as dataJson from '../../static/bulten_data.json';

const data = I.fromJS(dataJson);
const events = data.getIn(['default', 'Events']);
const eventKeys = Object.keys(events.toJS());

function rowRenderer({ index, key, style }) {
  return (
    <div className="double-row-wrapper" style={style} key={key}>
      <Row
        event={events.get(eventKeys[index])}
        idx={index}
        rendererType="cellKeyRenderer"
        className="--keys"
        eventKey={eventKeys[index]}
      />
      <Row
        event={events.get(eventKeys[index])}
        eventKey={eventKeys[index]}
        idx={index}
        rendererType="cellValueRenderer"
        className="--values"
      />
    </div>
  );
}


export function Table() {
  return (
    <AutoSizer>
      {
        ({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={eventKeys.length}
            rowHeight={120}
            rowRenderer={rowRenderer}
          />
        )
      }
    </AutoSizer>
  );
}


export default Table;
