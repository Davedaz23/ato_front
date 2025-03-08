import ReactGA from 'react-ga4';

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const trackPageView = (pagePath) => {
  ReactGA.send({ hitType: 'pageview', pagePath });
};
