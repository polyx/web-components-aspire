import { Search } from '../components/Search/index';

export default {
  title: 'Search',
  component: Search,
}

export const BasicSearch = Search.bind({});
BasicSearch.args = {
  placeholder: 'Search'
}

export const PrefilledSearch = Search.bind({});
PrefilledSearch.args = {
  placeholder: 'Search',
  defaultValue: 'Prefilled Value'
};