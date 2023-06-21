/* eslint linebreak-style: ["error", "unix"] */

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../components/my-navbar';
// import main from './main';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.header__menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
