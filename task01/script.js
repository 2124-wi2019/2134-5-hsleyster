/*Heather Sleyster
sleyster_assignment05b
Thoendel
INFO 2134
4/9/2020
*/

//This is my event listener for the load event.
window.addEventListener('load', function(){

/*These are my variables for myForm id, firstName id, lastName id, telephoneNumber id
and pattern to check values entered.
*/
    const myForm = document.getElementById('myForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const pattern = /^(?:\([2-9]\d{2}\)\?|[2-9]\d{2}(?:\-?|\?))[2-9]\d{2}[- ]?\d{4}$/;
    const telephoneNumber = document.getElementById('telephoneNumber');
    const errors = [];
    /*This is my event listener on the myForm for the submit event. It checks the values 
    entered for firstName, lastName and telephoneNumber for valid values. If blank fields
    for firstName or lastName an error alert is displayd and the form cannot submit. If
    invalid values entered for telephoneNumber are entered an error alert is displayd and
    the form cannot submit.
    */
    myForm.addEventListener('submit',function(event){
        if (firstName.value == ""){
            errors.push(alert('Error: First Name cannot be blank'));
        }
        if (lastName.value == ""){
            errors.push(alert('Error: Last Name cannot be blank'));
        }
        if (telephoneNumber != pattern){
            errors.push(alert('Error: Please enter a valid Phone Number'));
        }
        for(error of errors){
            if(error.length > 0){
                alert(errors);
                event.preventDefault();
            }
        }
    });
});