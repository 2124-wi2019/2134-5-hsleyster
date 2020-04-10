/*Heather Sleyster
sleyster_assignment05b
Thoedel
INFO 2134
4/9/2020
*/

//This is my event listener for the load event on the window.
window.addEventListener('load', function() {
    /*These statements assign the element with the id values of userInput and
    convertFromHolder to the variables with the same name.
    */
    const userInput = document.getElementById('userInput');
    const convertFromHolder = document.getElementById('convertFromHolder');
    /*This is the event listener for the change in the userInput field it has
     a callback function onChange.
    */
    userInput.addEventListener('change', onChange);
    /*This is the onChange callback function. It checks the userInput and populates
    the errors array if the change is empty or not a number with an error message.
    It then itterates through the errors array and if an error is thrown creates a li
    element in the errorHolder ul and adds the error message from the errors array to 
    the li as a text node. If there are errors in the errors array the hidden class is 
    removed from the errorHolder element and the class list of visible is added. If there
    are no errors in the errors array the class of hidden is removed from the convertFromHolder
    element and the class if visible is added.
    */
        function onChange(){
            const errors = [];
            const errorHolder = document.getElementById('errorHolder');
            const errorList = document.getElementById('errorList');
            userInput = parseInt(userInput);
            if (userInput.id == ""){
            errors.push(alert('Error: You must enter something'));
            }
                else if (isNaN(userInput)){
                errors.push(alert('Error: You must enter a number'));
            }

            for (error of errors){
                const errorText = document.createTextNode(error);
                errorList.createElement('li');
                errorList.innerHTML = errorText;
                errorHolder.appendChild(errorList);
            }

            if (error.length > 0){
                errorHolder.classList.remove('hidden');
                errorHolder.classList.add('visible');
            }
                else {
                convertFromHolder.classList.remove('hidden');
                convertFromHolder.classList.add('visible');
                }
                
        }
/*These statements assign the elements with the ids of convertFrom and
option to the variables with the same name.
*/
    const convertFrom = document.getElementsById('convertFrom');
    const option = getElementsByTagName('option');
    /*This is the event listenter for the select event on the option
    element it has a callback function onSelect.
    */
    option.addEventListener('select', onSelect);
    /*This is the callback function onSelect it checks the value of the option
    element selected and creates option elements based on what has been selected
    in the option elements in the convertFrom field assigns them a value and appends
    them to the convertTo element.
    */
        function onSelect(){
            const convertToHolder = document.getElementById('convertToHolder');
            const convertTo = document.getElementById('convertTo');
                if(!convertFrom.option.id == ''){
            convertToHolder.classList.remove('hidden');
            convertToHolder.classList.add('visible');
                } 
                else if(convertFrom.option.id == 'meters'){
                    let option1 = document.createElement('option');
                    let attribute1 = document.createAttribute('id');
                    attribute1.value = 'feet'; 
                    option1.setAttribute(attribute1);              
                    let attribute2 = document.createAttribute('id');
                    attribute2.value = 'miles';
                    option1.setAttribute(attribute2);
                    document.appendChild(convertTo);
                }
                else if (convertFrom.option.id == 'liters'){
                    let option3 = document.createElement('option');
                    let attribute3 = document.createAttribute('id');
                    attribute3.value = 'gallons';
                    option3.setAttribute(attribute3);
                    let attribute4 = document.createAttribute('id');
                    attribute4.value = 'quarts';
                    option3.setAttribute(attribute4);
                    document.appendChild(convertTo);
                }
                else if (convertFrom.option.id == 'kilos'){
                    let option4 = document.createElement('option');
                    let attribute5 = document.createAttribute('id');
                    attribute5.value = 'pounds';
                    option4.setAttribute(attribute5);
                    document.appendChild(convertTo);
                }
                else if  (convertFrom.option.id == 'celsius'){
                    let option5 = document.createElement('option');
                    let attribute6 = document.createAttribute('id');
                    attribute6.value = 'fahrenheit';
                    option5.setAttribute(attribute6);
                    document.appendChild(convertTo);
                }
                else {
                    convertTo.removeChild;
                    convertFromHolder.classList.remove('visible');
                    convertFromHolder.classList.add('hidden');
                }
            }
    //This statement assigns the element with the id of action to a variable action.
        const action = document.getElementById('action');
    /*This is the event listener for the click event it has a callback function of
    afterClick. First the resultHolder element is assigned to a variable resultHolder.
    Then any children of the result hoder are removed.
    */
        action.addEventListener('click', afterClick);
                const resultHolder = document.getElementById('resultHolder');
                    resultHolder.removeChild;
    /*This is the afterClick callback function. It checks the id selected and calculates
    the conversion required using the userInput and selected options. Then the results
    are put in a variable and an element is created and appended to the resultHolder and 
    the results are put in a text node that is then appended to the created element and 
    displayed to the user. 
    */
                function afterClick(){
                    let result = 0;
                    if(convertFrom.option.id == 'meters' && convertTo.option.id == 'feet'){
                        result = userInput*3.2808;
                        const h = document.createElement('h2');
                        resultHolder.appendChild(h);
                        resultText = document.createTextNode(`${userInput} meters is ${resultText} feet`);
                        h.appendChild(resultText);
                        resultHolder.classList.add('visible');
                    }
                    else if(convertFrom.option.id == 'meters' && convertTo.option.id == 'miles'){
                        result = userInput*0.00062137;
                        h = document.createElement('h2');
                        resultHolder.appendChild(h);
                        resultText = document.createTextNode(`${userInput} meters is ${resultText} miles`);
                        h.appendChild(resultText); 
                        resultHolder.classList.add('visible');
                    }
                    else if(convertFrom.option.id == 'liters' && convertTo.option.id == 'gallons'){
                        result = userInput*0.26417;
                        h = document.createElement('h2');
                        resultHolder.appendChild(h);
                        resultText = document.createTextNode(`${userInput} liters is ${resultText} gallons`);
                        h.appendChild(resultText);
                        resultHolder.classList.add('visible');
                    }
                    else if(convertFrom.option.it == 'liters' && convertTo.option.id == 'quarts'){
                        result = userInput*1.056688;
                        h = document.createElement('h2');
                        resultHolder.appendChild(h);
                        resultText = document.createTextNode(`${userInput} liters is ${resultText} quarts`);
                        h.appendChild(resultText);
                        resultHolder.classList.add('visible');
                    }
                    else if(convertFrom.option.id == 'kilos' && convertTo.option.id == 'pounds'){
                        result = userInput*2.2046;
                        h = document.createElement('h2');
                        resultHolder.appendChild(h);
                        resultText = document.createTextNode(`${userInput} kilos is ${result} pounds`);
                        h.appendChild(resultText);
                        resultHolder.classList.add('visible');
                    }
                    else if(convertFrom.option.id == 'celsius' && convertTo.option.id == 'fahrenheit'){
                        result = (userInput*1.8)+32;
                        h = document.createElement('h2');
                        resultHolder.appendChild(h);
                        resultText = document.createTextNode(`${userInput} cesius is ${result} fahrenheit`);
                        h.appendChild(resultText);
                        resultHolder.classList.add('visible');
                    }

                }
        });