import {linkTo} from '@storybook/addon-links';

export default {
    title: 'Link',
    argTypes: {
      children: { control: 'text' },
    },
  };
  
  class LinkItem extends HTMLElement{
    constructor(){
      super();
    }
  }

  const StyledPath = (height, size, d) => {
    const styledPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    styledPath.style.size = size;
    styledPath.style.transform = size / height !== 1 ? `scale(${size / height})` : null;
    styledPath.setAttributeNS(null, 'd', d);
    styledPath.style.color = "gray";
    return styledPath;
};


  const Template = ({children}) => {
    "name": "Launch Chrome against localhost",
    "url": "http://localhost:8080",
  }

<a href="https://github.com/polyx/web-components-aspire">Design System</a>