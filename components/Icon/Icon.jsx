import { get } from './library';

export const Icon = (size = 24, color = 'currentColor', name = '', className = '', rotation = null, title = null, data = null) => {
    
    const { icon, count } = data !== null ? customIcon(data) : get(name);
    
    if (typeof icon === 'undefined') {
        throw Error(
            `Icon "${name}" not found. Have you added it using Icon.add() or using data props?`,
        )
    }

    let svgProps = {
        height: size,
        width: size,
        fill: color,
        viewBox: `0 0 ${size} ${size}`,
        className,
        rotation,
        name,
        'aria-hidden': true,
    }

    const pathProps = {
        d: icon.svgPathData ? icon.svgPathData : icon.d,
        height: icon.height ? icon.height : size,
        size,
    }

    const styledSvg = StyledSvg(svgProps.height, svgProps.width, svgProps.fill);
    const styledPath = StyledPath(pathProps.height, pathProps.size, pathProps.d);
    styledSvg.appendChild(styledPath);

    return styledSvg;
};

const customIcon = (icon) => ({ icon, count: Math.floor(Math.random() * 1000) });

const StyledSvg = (height, width, fill) => {
    const styledSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    styledSvg.name = null;
    styledSvg.style.height = height;
    styledSvg.style.width = width;
    styledSvg.style.fill = fill;

    return styledSvg;
};

const StyledPath = (height, size, d) => {
    const styledPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    styledPath.style.size = size;
    styledPath.style.transform = size / height !== 1 ? `scale(${size / height})` : null;
    styledPath.setAttributeNS(null, 'd', d);
    styledPath.style.color = "gray";
    return styledPath;
};