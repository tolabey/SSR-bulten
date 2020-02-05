import React from 'react';
import './index.scss';
import App from '../components/app';

export default function Index() {
  return (
    <div className="app">
      <App />
      <style
        jsx="true"
      >
        {
          `
          @font-face {
            font-family: Lato-Regular;
            src: url('../static/fonts/Lato-Regular.ttf');
          }
         `
        }
      </style>
    </div>
  );
}
