import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Lists',
  argTypes: {
    children: { control: 'text' },
  },
};


class ListItem extends HTMLLIElement {
  constructor() {
    super();
  }
}

class UnOrderedList extends HTMLUListElement {
  constructor(listType) {
    super();
    this.listType = listType;
  }

  connectedCallback(){
    this.style['list-style-type'] = this.listType;
  }
}


const Template = ({ onClick, children }) => {
  let listConst = customElements.get('unordered-list');
  let itemConst = customElements.get('my-item');
  
  if (!listConst || !itemConst) {
    listConst = customElements.define('unordered-list', UnOrderedList, {extends: 'ul'});
    itemConst = customElements.define('my-item', ListItem, {extends: 'li'});
  }

  //top level list
  const list = new listConst('disc');
  const item = new itemConst();
  const item2 = new itemConst();
  item.innerText = "Item 1";
  item2.innerText = 'Item 2';
  list.appendChild(item);
  list.appendChild(item2);

  //setup elements for sublist
  const subList = new listConst('circle');
  const subItem = new itemConst();
  const subItem2 = new itemConst();
  subItem.innerText = 'Sub item';
  subItem2.innerText = 'Sub item2';
  subList.appendChild(subItem);
  subList.appendChild(subItem2)

  item.appendChild(subList);
  return list;
};

const Template2 = ({ onClick, children }) => {
  let listConst = customElements.get('unordered-list');;
  let itemConst = customElements.get('my-item');
  
  if (!listConst || !itemConst) {
    listConst = customElements.define('unordered-list', UnOrderedList, {extends: 'ul'});
    itemConst = customElements.define('my-item', ListItem, {extends: 'li'});
  }

  const list = new listConst('decimal');
  const item = new itemConst();
  const item2 = new itemConst();
  
  item.innerText = "Item 1";
  item2.innerText = 'Item 2';
  list.appendChild(item);
  list.appendChild(item2);

  return list;
};

const Template3 = ({ onClick, children }) => {
  let listConst = customElements.get('unordered-list');
  let itemConst = customElements.get('my-item');
  
  if (!listConst || !itemConst) {
    listConst = customElements.define('unordered-list', UnOrderedList, {extends: 'ul'});
    itemConst = customElements.define('my-item', ListItem, {extends: 'li'});
  }

  //top level list
  const list = new listConst('disc');
  const item = new itemConst();
  const item2 = new itemConst();
  item.innerText = "Item 1";
  item2.innerText = 'Item 2';
  list.appendChild(item);
  list.appendChild(item2);

  //setup elements for sublist
  const subList = new listConst('decimal');
  const subItem = new itemConst();
  const subItem2 = new itemConst();
  subItem.innerText = 'Sub item';
  subItem2.innerText = 'Sub item2';
  subList.appendChild(subItem);
  subList.appendChild(subItem2)

  item.appendChild(subList);
  return list;
};


export const Unordered_List = Template.bind({});
export const Ordered_List = Template2.bind({});
export const Mixed_nested_Lists = Template3.bind({});
