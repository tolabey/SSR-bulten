import React from 'react';
import { shallow } from 'enzyme'
import { Cell } from '../components/table/cell/cell';
import I from 'immutable';
import * as accessors from "../constants/accessors";

const setup = (props = { context: {}}) => {
  return shallow(<Cell {...props}/>)

};

test('Cell renders without error', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const wrapper = setup()
  const wrapperDiv = wrapper.find('.one-cell');

  expect(wrapperDiv.length).toBe(1);
});

test('Cell renders cell provided.', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const cell = {
      key: 1,
      cellValueRenderer: (data) => (
        <div className={"cellrendeer"}></div>
      ),
      width: '400px',
    };
  const data = {
    "CC": "0",
    "BD": "0",
    "LN": "UEFA AVRUPA LİGİ",
    "IMF": false,
    "C": "2005",
    "LO": "1",
    "D": "19.02.2019",
    "HEC": false,
    "BWPC": "0",
    "NID": "2146483652",
    "BCCN": "",
    "BCWC": "0",
    "SEID": "0",
    "N": "Real Madrid - Bayern5",
    "P": "0,00",
    "BS": 0,
    "S": "Open",
    "OCG": {
      "1": {
        "D": "19.02.2019",
        "N": "Maç Sonucu",
        "T": "13:27",
        "OC": {
          "0": {
            "IMF": false,
            "E": [],
            "G": "1",
            "BWPC": "0",
            "N": "1",
            "O": "2.30",
            "P": "",
            "OD": 0,
            "ID": "0",
            "MBS": "4"
          },
          "1": {
            "IMF": false,
            "E": [],
            "G": "1",
            "BWPC": "0",
            "N": "X",
            "O": "3.00",
            "P": "",
            "OD": 0,
            "ID": "1",
            "MBS": "4"
          }
        },
        "ESD": "1550572074000",
        "ID": "1",
        "SO": 1,
        "MBS": "4",
        "ED": "1550572074000"
      },
      "2": {
        "D": "19.02.2019",
        "N": "Çifte Şans",
        "T": "13:27",
        "OC": {
          "3": {
            "IMF": false,
            "E": [],
            "G": "2",
            "BWPC": "0",
            "N": "1-X",
            "O": "1.30",
            "P": "",
            "OD": 0,
            "ID": "3",
            "MBS": "4"
          },
          "4": {
            "IMF": false,
            "E": [],
            "G": "2",
            "BWPC": "0",
            "N": "1-2",
            "O": "1.22",
            "P": "",
            "OD": 0,
            "ID": "4",
            "MBS": "4"
          },
          "5": {
            "IMF": false,
            "E": [],
            "G": "2",
            "BWPC": "0",
            "N": "X-2",
            "O": "1.39",
            "P": "",
            "OD": 0,
            "ID": "5",
            "MBS": "4"
          }
        },
        "ESD": "1550572074000",
        "ID": "2",
        "SO": 4,
        "MBS": "4",
        "ED": "1550572074000"
      },
      "5": {
        "D": "19.02.2019",
        "N": "Alt/Üst 2,5 Gol",
        "T": "13:27",
        "OC": {
          "25": {
            "IMF": false,
            "E": [],
            "G": "5",
            "BWPC": "0",
            "N": "Alt",
            "O": "1.60",
            "P": "",
            "OD": 0,
            "ID": "25",
            "MBS": "4"
          },
          "26": {
            "IMF": false,
            "E": [],
            "G": "5",
            "BWPC": "0",
            "N": "Üst",
            "O": "1.90",
            "P": "",
            "OD": 0,
            "ID": "26",
            "MBS": "4"
          }
        },
        "ESD": "1550572074000",
        "ID": "5",
        "SO": 2,
        "MBS": "4",
        "ED": "1550572074000"
      }
    },
    "RE": null,
    "T": "13:27",
    "ESD": "1550572074000",
    "HCSO": false,
    "LC": "EUL",
    "BCMC": "0",
    "IET": "1",
    "TYPE": "1",
    "DAY": "Salı",
    "FC": "europa",
    "NET": "1",
    "EC": {},
    "ED": "1550572074000"
  }
  const rendererType = 'cellValueRenderer';
  const itemIndex = 0;
  const eventKey = '2001';
  const className = '--values';
  const idx = 0;
  const context = { state: I.Map() };

  const wrapper = setup({cell, data: I.fromJS(data), rendererType, itemIndex, eventKey, className, idx, context});
  const cellRendererDiv = wrapper.find('.cellrendeer');

  expect(cellRendererDiv.length).toBe(1);
  expect(wrapper.find('.one-cell').hasClass('disabled'));
});


test('Cell renders .', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const cell = {
    key: 1,
    cellValueRenderer: (data) => (
      <div className={"cellrendeer"}></div>
    ),
    width: '400px',
  };
  const data = {
    "CC": "0",
    "BD": "0",
    "LN": "UEFA AVRUPA LİGİ",
    "IMF": false,
    "C": "2005",
    "LO": "1",
    "D": "19.02.2019",
    "HEC": false,
    "BWPC": "0",
    "NID": "2146483652",
    "BCCN": "",
    "BCWC": "0",
    "SEID": "0",
    "N": "Real Madrid - Bayern5",
    "P": "0,00",
    "BS": 0,
    "S": "Open",
    "OCG": {
      "1": {
        "D": "19.02.2019",
        "N": "Maç Sonucu",
        "T": "13:27",
        "OC": {
          "0": {
            "IMF": false,
            "E": [],
            "G": "1",
            "BWPC": "0",
            "N": "1",
            "O": "2.30",
            "P": "",
            "OD": 0,
            "ID": "0",
            "MBS": "4"
          },
          "1": {
            "IMF": false,
            "E": [],
            "G": "1",
            "BWPC": "0",
            "N": "X",
            "O": "3.00",
            "P": "",
            "OD": 0,
            "ID": "1",
            "MBS": "4"
          }
        },
        "ESD": "1550572074000",
        "ID": "1",
        "SO": 1,
        "MBS": "4",
        "ED": "1550572074000"
      },
      "2": {
        "D": "19.02.2019",
        "N": "Çifte Şans",
        "T": "13:27",
        "OC": {
          "3": {
            "IMF": false,
            "E": [],
            "G": "2",
            "BWPC": "0",
            "N": "1-X",
            "O": "1.30",
            "P": "",
            "OD": 0,
            "ID": "3",
            "MBS": "4"
          },
          "4": {
            "IMF": false,
            "E": [],
            "G": "2",
            "BWPC": "0",
            "N": "1-2",
            "O": "1.22",
            "P": "",
            "OD": 0,
            "ID": "4",
            "MBS": "4"
          },
          "5": {
            "IMF": false,
            "E": [],
            "G": "2",
            "BWPC": "0",
            "N": "X-2",
            "O": "1.39",
            "P": "",
            "OD": 0,
            "ID": "5",
            "MBS": "4"
          }
        },
        "ESD": "1550572074000",
        "ID": "2",
        "SO": 4,
        "MBS": "4",
        "ED": "1550572074000"
      },
      "5": {
        "D": "19.02.2019",
        "N": "Alt/Üst 2,5 Gol",
        "T": "13:27",
        "OC": {
          "25": {
            "IMF": false,
            "E": [],
            "G": "5",
            "BWPC": "0",
            "N": "Alt",
            "O": "1.60",
            "P": "",
            "OD": 0,
            "ID": "25",
            "MBS": "4"
          },
          "26": {
            "IMF": false,
            "E": [],
            "G": "5",
            "BWPC": "0",
            "N": "Üst",
            "O": "1.90",
            "P": "",
            "OD": 0,
            "ID": "26",
            "MBS": "4"
          }
        },
        "ESD": "1550572074000",
        "ID": "5",
        "SO": 2,
        "MBS": "4",
        "ED": "1550572074000"
      }
    },
    "RE": null,
    "T": "13:27",
    "ESD": "1550572074000",
    "HCSO": false,
    "LC": "EUL",
    "BCMC": "0",
    "IET": "1",
    "TYPE": "1",
    "DAY": "Salı",
    "FC": "europa",
    "NET": "1",
    "EC": {},
    "ED": "1550572074000"
  }
  const rendererType = 'cellValueRenderer';
  const itemIndex = 0;
  const eventKey = '2001';
  const className = '--values';
  const idx = 0;
  const context = { state: I.Map() };

  const wrapper = setup({cell, data: I.fromJS(data), rendererType, itemIndex, eventKey, className, idx, context});
  const cellRendererDiv = wrapper.find('.cellrendeer');

  expect(cellRendererDiv.length).toBe(1);
  expect(wrapper.find('.one-cell').hasClass('disabled'));
});
