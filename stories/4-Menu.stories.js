let show = false;
export default {
  title: "Menu",
  argTypes: {
    children: { control: "text" },
    children2: { control: "text" },
  },
};
const Template = ({ onClick, children, children2 }) => {
  const Menu = document.createElement("div");
  Menu.style.cssText = `
  position: absolute;
  z-index: 1;
  width: 100px;
  text-align:center;
  border-radius:4px;
  background: lightgray;
  cursor: pointer;
  `;

  const menuTemplate = document.createElement("a");
  menuTemplate.style.display = "inline-table";
  menuTemplate.innerHTML = "Menu";
  menuTemplate.style.cssText = `
 
`;
  menuTemplate.addEventListener("click", () => toggle({ btn1, btn2 }));

  const btn1 = document.createElement("a");
  btn1.type = "button";
  btn1.innerText = children;
  btn1.addEventListener("click", () => clickHandler());
  btn1.style.cssText = `
  cursor: pointer;
  display:none;
`;
  const btn2 = document.createElement("a");
  btn2.type = "button";
  btn2.innerText = children2;
  btn2.addEventListener("click", () => clickHandler2());
  btn2.style.cssText = `
  cursor: pointer;
  display:none;
`;

  Menu.appendChild(menuTemplate);
  Menu.appendChild(btn1);
  Menu.appendChild(btn2);

  return Menu;
};

var clickHandler = () => {
  alert("First option was called");
};

var clickHandler2 = () => {
  alert("Seccond option was called");
};

var toggle = ({ btn1, btn2 }) => {
  show = !show;
  btn1.style.display = show ? "block" : "none";
  btn2.style.display = show ? "block" : "none";
  dispatchEvent(new CustomEvent("showChange", { detail: show }));
};

export const Menu = Template.bind({});
