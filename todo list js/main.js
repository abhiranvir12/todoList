let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let removeToDoButton = document.getElementById('removeToDo');
// add a todo item
addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    // remove a todo item
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
    
    removeToDoButton.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})

// here 1ST WE HAVE ACCESS ALL THE ITEMS AND STORES THEM IN A VARIABLE
// 1ST addToDoButtoN WHERE ON CLICK FUNCTION WILL BE FIRED 
// 2ND toDoContainer WHERE ALL THE TODO ITEMS WILL BE STOREDDD 
// 3D IS THE INPUT FIELD THE ADD TO ITEM WILLL BE WRITTEN BY THE UserActivation
// 4TH REMOVE THE ITEM STOREDDD


// AD A FUNCTION TO THE BUTTON OON CLICK EVENTLISTENER CLICK funcTION 



