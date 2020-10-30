import { linkTo } from "@storybook/addon-links";

export default {
  title: "Menu",
  argTypes: {
    children: { control: "text" },
  },
};

class MenuItem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = this.children;
    return menuItem;
  }
}

class Menu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const menu = document.createElement("ul");
    menu.innerHTML = this.children;
    return menu;
  }
}

const Template = ({ children }) => {
  window.customElements.define("custom-menu", Menu);
  window.customElements.define("custom-menuitem", MenuItem);
  const menu = document.createElement("custom-menu");
  menu.style.cssText = `
    background: #1E88E5;
    color: hotpink;
    padding: 2rem 4rem;
    border: 2px solid blue;
    font-size: 1.5rem;
`;
  const menuItem = document.createElement("custom-menuitem");
  const menuItem2 = document.createElement("custom-menuitem");
  menuItem.innerHTML = "link 1";
  menuItem2.innerHTML = "link 2";
  menu.append(menuItem);
  menu.append(menuItem2);
  return menu;
};
export const Main_Menu = Template.bind({});
