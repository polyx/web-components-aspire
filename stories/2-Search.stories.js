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

export const DisabledSearch = Search.bind({});
DisabledSearch.args = {
  placeholder: 'Disabled Search',
  disabled: true
}

const onFocusFunction = function(e) {
  e.placeholder = 'Focused';
};
const onBlurFunction = function(e) {
  e.placeholder = 'Blurred'
};
export const SearchWithBlurAndFocusFunctions = Search.bind({});
SearchWithBlurAndFocusFunctions.args = {
  placeholder: 'Blurred',
  onFocus: onFocusFunction,
  onBlur: onBlurFunction
}
