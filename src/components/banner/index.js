import React from 'react';
import { APP_NAME } from '../../constants';
import './index.css';

export const Banner = () => (
  <div className="banner">
    <div className="container">
      <h1 className="logo banner-title">{APP_NAME.toLowerCase()}</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
);