/*Heather Sleyster
sleyster_assignment05
Thoendel
INFO 2134
4/8/2020
*/
//This is the event listener for the load event on the window object.
window.addEventListener('load', function () {
/* This assigns the elements with the ids of actionCreate and actionComplete
to the variables with the same name.
*/
    const actionCreate = document.getElementById('actionCreate');
    const actionComplete = document.getElementById('actionComplete');
/*This is the event listener on the click event on the actionCreate element.
it holds a promise that checks the event and invokes the setTimeout method of
the window object. It uses the then method of the promise object and changes the
class list of the actionCreate and actionComplete elements if resloved.
*/
    actionCreate.addEventListener('click', (event) => {
        const promise = new promise((resolve, reject) => {
        const e = event;
        if(e){
        window.setTimeout(resolve(e), 1000);
        promise.then(resolve (e));
        actionCreate.classList.add('hidden');
        actionComplete.classList.remove('hidden');
        actionComplete.classList.add('visible');
        }
            else {
            window.setTimeout(reject(e), 1000);
            }
            });
    });
/*This is the event listener for the click event on the actionComplete 
element. it changes the class list of the actionComplete and actionCreate
elements when fired.
*/
    actionComplete.addEventListener('click', function(){
        actionComplete.classList.remove('visible');
        actionComplete.classList.add('hidden');
        actionCreate.classList.remove('hidden');
        actionCreate.classList.add('visible');
    });
});