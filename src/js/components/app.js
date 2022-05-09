import header from './header';
import footer from './footer';
import main from './main';

const app = () => {
  const html = `
    ${header()}
    ${main()}
    ${footer()}
  `;
  document.body.innerHTML = html;
};

export default app;