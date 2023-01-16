import React from 'react';
import ReactDOM from 'react-dom';
import { Linktree, CHANNEL_TYPES } from 'linkees';

import './css/normalize.css';

const items = [
  {
    title: 'Website',
    subtitle: 'Luis Cosio\'s personal website',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://www.luiscos.io', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: '@luiscosio',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/luiscosio', //Github Profile link
  },
  {
    title: 'Instagram',
    subtitle: '@luiscosio',
    type: CHANNEL_TYPES.INSTAGRAM,
    link: 'https://instagram.com/luiscosio', //instagram profile link
  },
  {
    title: 'Twitter',
    subtitle: '@luiscosio',
    type: CHANNEL_TYPES.TWITTER,
    link: 'https://twitter.com/luiscosio', // twitter profile link
  },
  {
    title: 'LinkedIn',
    subtitle: 'luiscosio',
    type: CHANNEL_TYPES.LINKEDIN,
    link: 'https://www.linkedin.com/in/luiscosio/', // linkedin
  },
  {
    title: 'YouTube',
    subtitle: 'Luis Cosio\'s channel',
    type: CHANNEL_TYPES.YOUTUBE,
    link: 'https://www.youtube.com/@luis-cosio', //youtube channel link
  },
  {
    title: 'luiscosio.cb.id',
    subtitle: 'Crypto wallets',
    type: CHANNEL_TYPES.TELEGRAM,
    link: 'https://luiscosio.cb.id', // ENS
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Linktree cardItems={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
