let display = document.getElementById('displaybox');
let buttons = document.querySelectorAll('.bt1');
let result = '';

buttons.forEach((button) => {
    button.addEventListener('click', (i) => {

        if (i.target.textContent == 'C') {
            result = '';
            display.placeholder = result;
        }
        else if (i.target.textContent == 'Del') {
            result = result.substring(0, result.length - 1);
            display.placeholder = result;
        }
        else {
            result += i.target.textContent;
            display.placeholder = result;
        }
    });
});

function setPlaceholder() {
    display.placeholder = eval(displaybox.placeholder);
}
