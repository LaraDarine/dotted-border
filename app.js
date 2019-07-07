const container = document.querySelector('#container');
const logo = document.querySelector('#logo');
const menu = document.querySelector('#menu');
const checkLayouts = document.querySelectorAll('.border');
const borderType = document.getElementsByClassName('left-border');
const testContainer = document.getElementById('test');


checkLayouts.forEach(layout=> {
    layout.addEventListener('click', () => {
        const checkBox = layout.children[0];
        const name = checkBox.getAttribute('name');

        if (name == 'div1') {
            logo.classList.toggle('outline');
        } else if (name == 'div2') {
            menu.classList.toggle('outline');
        } else {
            container.classList.toggle('outline');
        }
        checkBox.toggleAttribute('checked');
    });
});

const changeBorderType = (id) => {
    testContainer.style.borderLeft = `#659f41 8px ${id}`;
    for (let index = 0; index < borderType.length; index++) {
        const element = borderType[index];
        element.style.borderLeft = `red 2px ${id}`;
    }
}