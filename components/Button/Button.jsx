import styled from 'styled-components'
import { document, console } from 'global';

export const Button = () => {

    const container = Container();
    const button1 = Button1();
    const button2 = Button2();
    const button3 = Button3();
    const button4 = Button4();
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    container.appendChild(button4);
    return container;

};

const Container = () => {
    const buttons = document.createElement('span');
    
    return buttons;
};

const Button1 = () => {
    const button1 = document.createElement('button');
    button1.onmouseover = function(){button1.style.backgroundColor='#005860', button1.style.color='white'};
    button1.onmouseleave = function(){button1.style.backgroundColor='#007079'};

    button1.innerHTML = "Primary"
    button1.style.cssText = `
    background-color: #007079;
    height: 3em;
    width: 7em;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    `;
    
    return button1;
};

const Button2 = () => {
    const button2 = document.createElement('button');
    button2.onmouseover = function(){button2.style.backgroundColor='#1b2a35', button2.style.color='white'};
    button2.onmouseleave = function(){button2.style.backgroundColor='#243746'};
    button2.innerHTML = "Secondary";
    button2.style.cssText = `
    background-color: #243746;
    height: 3em;
    width: 7em;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    `;
    
    return button2;
};

const Button3 = () => {
    const button3 = document.createElement('button');
    button3.onmouseover = function(){button3.style.backgroundColor='#D20000', button3.style.color='white'};
    button3.onmouseleave = function(){button3.style.backgroundColor='#EB0000'};
    button3.innerHTML = "Danger"
    button3.style.cssText = `
    background-color: #EB0000;
    height: 3em;
    width: 7em;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    `;
    
    return button3;
};

const Button4 = () => {
    const button4 = document.createElement('button');
    button4.onmouseover = function(){button4.style.cursor='not-allowed'};
    button4.onmouseleave = function(){button4.style.cursor='pointer'};
    button4.innerHTML = "Disabled"
    button4.style.cssText = `
    background-color: #EAEAEA;
    height: 3em;
    width: 7em;
    color: #BEBEBE;
    font-weight: bold;
    border-radius: 8px;
    `;
    
    return button4;
};



