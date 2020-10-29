import { Icon } from '../Icon';
import PropTypes from 'prop-types'

const search = {
    name: 'search',
    prefix: 'eds',
    height: '24',
    width: '24',
    svgPathData:
        'M14.966 14.255h.79l4.99 5-1.49 1.49-5-4.99v-.79l-.27-.28a6.471 6.471 0 01-4.23 1.57 6.5 6.5 0 116.5-6.5c0 1.61-.59 3.09-1.57 4.23l.28.27zm-9.71-4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5z',
}

const close = {
    name: 'close',
    prefix: 'eds',
    height: '24',
    width: '24',
    svgPathData:
        'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
}

const Container = (disabled) => {
    const container = document.createElement('span');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '35px';
    container.style.display = 'grid';
    container.style.gridGap = '8px';
    container.style.gridAutoFlow = 'column';
    container.style.gridAutoColumns = 'max-content auto max-content';
    container.style.alignItems = 'center';
    container.style.boxSizing = 'border-box';
    container.style.zIndex = '0';
    container.style.backgroundColor = 'rgb(247,247,247)';

    if (disabled) {
        container.style.cursor = 'not-allowed';
    }

    container.addEventListener('mouseover', function () {
        if (!disabled) {
            container.style.border = '1px solid black';
            container.style.margin = '0 -1px 0 -1px';
        }
    });

    container.addEventListener('mouseleave', function () {
        container.style.border = 'none';
        container.style.margin = '0';
    });

    return container;
};

const Input = ({ placeholder, disabled, defaultValue, onFocus, onBlur }) => {
    const input = document.createElement('input');
    input.style.minHeight = '0';
    input.style.minWidth = '0';
    input.style.width = '100%';
    input.style.height = '100%';
    input.style.margin = '0';
    input.style.padding = '0';
    input.style.border = 'none';
    input.style.outline = 'none';
    input.style.appearance = 'none';
    input.style.boxSizing = 'border-box';
    input.style.background = 'transparent';
    input.value = defaultValue;
    input.placeholder = placeholder;

    if (disabled) {
        input.disabled = disabled;
        input.style.cursor = 'not-allowed';
    }

    input.addEventListener('focus', function () {
        if (onFocus != undefined) {
            onFocus(this);
        }
    })

    input.addEventListener('blur', function () {
        if (onBlur != undefined) {
            onBlur(this);
        }
    })

    input.addEventListener('input', function () {
        if (this.value.length != 0) {
            this.parentElement.querySelector('div').style.visibility = 'visible';
        } else {
            this.parentElement.querySelector('div').style.visibility = 'hidden';
        }
    });

    return input;
};

const InsideButton = (defaultValue) => {
    const insideButton = document.createElement('div');
    insideButton.style.display = 'flex';
    insideButton.style.alignItems = 'center';
    insideButton.style.zIndex = '1';
    insideButton.style.padding = '4px';
    insideButton.style.height = '24px';
    insideButton.style.width = '24px';
    insideButton.style.position = 'relative';
    insideButton.id = 'search-clear-button';

    if (defaultValue !== '') {
        insideButton.style.visibility = 'visible';
    } else {
        insideButton.style.visibility = 'hidden';
    }

    insideButton.addEventListener('click', function () {
        this.style.visibility = 'hidden';
        this.parentElement.querySelector('input').value = '';
        this.parentElement.querySelector('input').focus();
    });

    return insideButton;
};

export const Search = ({ placeholder = '', disabled = false, defaultValue = '', onFocus = undefined, onBlur = undefined }) => {

    const container = Container(disabled);

    const icons = { search, close };
    Icon.add(icons);
    const searchIcon = Icon(24, 'currentColor', 'search', '', null, null, null);

    const input = Input({ placeholder, disabled, defaultValue, onFocus, onBlur });

    const insideButton = InsideButton(defaultValue);
    const closeIcon = Icon(24, 'currentColor', 'close', '', null, null, null);
    insideButton.appendChild(closeIcon);

    container.appendChild(searchIcon);
    container.appendChild(input);
    container.appendChild(insideButton);

    return container;
};