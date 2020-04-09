/*Heather Sleyster
sleyster_assignment05b
Thoedel
INFO 2134
4/9/2020
*/

//This is my event listener for the load event on the window.
window.addEventListener('load', function() {

    const userInput = document.getElementById('userInput');
    const convertFromHolder = document.getElementById('convertFromHolder');
    
userInput.addEventListener('change', onChange);
    function onChange(){
            if(userInput == ""){
                alert('Error: You must enter something');
                userInput.focus();
            }
            else if(isNaN(userInput)){
                alert('Error: You must enter a number');
                userInput.focus();
            }
            else {
                convertFromHolder.classList.remove('hidden');
                convertFromHolder.classList.add('visible');
            }

    const convertFrom = document.getElementsById('convertFrom');
    const option = getElementsByTagName('option');
option.addEventListener('select', onSelect);
        function onSelect(){
            const convertToHolder = document.getElementById('convertToHolder');
            const convertTo = document.getElementById('convertTo');
                if(!convertFrom.option.id == ''){
            convertToHolder.classList.remove('hidden');
            convertToHolder.classList.add('visible');
                } else if(convertFrom.option.id == 'meters'){
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
        const action = document.getElementById('action');
action.addEventListener('click', afterClick);
                const resultHolder = document.getElementById('resultHolder');
                resultHolder.removeChild;
                function afterClick(){
                    if(convertFrom.option.id == 'meters' && convertTo.option.id == 'feet'){
                        return userInput*3.2808;
                    }
                    else if(convertFrom.option.id == 'meters' && convertTo.option.id == 'miles'){
                        return userInput*0.00062137;
                    }
                    else if(convertFrom.option.id == 'liters' && convertTo.option.id == 'gallons'){
                        return userInput*0.26417;
                    }
                    else if(convertFrom.option.it == 'liters' && convertTo.option.id == 'quarts'){
                        return userInput*1.056688;
                    }
                    else if(convertFrom.option.id == 'kilos' && convertTo.option.id == 'pounds'){
                        return userInput*2.2046;
                    }
                    else if(convertFrom.option.id == 'celsius' && convertTo.option.id == 'fahrenheit'){
                        return (userInput*1.8)+32;
                    }
                }

});