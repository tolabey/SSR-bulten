import React from 'react';
import { withConsumer } from '../../consumer';
import I from 'immutable';

function selectHelper(data, context, cell, eventKey) {
  const { state = I.Map() } = context;
  const idBase = state.getIn(['selectedTab', eventKey, 'id'], false);

  return cell && cell.id && idBase && data.getIn(idBase) === data.getIn(cell.id);
}

export function Cell(props) {
  const {
    data, cell = {width: '', id: '-1'}, itemIndex, rendererType, className, idx, context, eventKey,
  } = props;

  return (
    <div
      key={idx}
      className={`one-cell ${className} ${selectHelper(data, context, cell, eventKey) ? '--selected' : ''}`}
      style={{ minWidth: `${cell.width}` }}
      onClick={() => {
        selectHelper(data, context, cell, eventKey)
          ? cell.id && context.setState(context.state.deleteIn(['selectedTab', eventKey]))
          : cell.id && context.setState(context.state.setIn(['selectedTab', eventKey, 'id'], cell.id));
      }}
    >
      {cell[rendererType] && cell[rendererType](data, itemIndex)}
    </div>
  );
}

export default React.memo(withConsumer(Cell));
