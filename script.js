// let input = document.getElementById('inputBox');
// let button = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(button);

// arr.forEach(button => {
//     button.addEventListener('click',(e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0,string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })


const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        switch (buttonText) {
            case '=':
                try {
                    expression = eval(expression);
                    input.value = expression;
                } catch (error) {
                    input.value = 'Error';
                    expression = '';
                }
                break;
            case 'AC':
                expression = '';
                input.value = expression;
                break;
            case 'DEL':
                expression = expression.slice(0, -1);
                input.value = expression;
                break;
            default:
                expression += buttonText;
                input.value = expression;
                break;
        }
    });
});
