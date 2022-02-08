//Create three variables that hold references to the input, button, and list elements using const.

const input = document.querySelector("input");
const addBton = document.querySelector("button");
const list = document.querySelector("ul");

//Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  
//Example:  button.addEventListener('click', function() { ...

addBton.addEventListener('click', function() {

//In the function block for adding a chapter, make sure the input is not blank and if not, do the following:

    let inputChapter = input.value;
            input.value = "";
            
//create an li element
    const listItem = document.createElement("li");
//create a delete button
    const deleteBtn = document.createElement("button");

//populate the li elements textContent or innerHTML with the input
    listItem.innerHTML = inputChapter;
//populate the button textContent with an ❌
    deleteBtn.textContent = "❌";
//append the li element with the delete button
    listItem.appendChild(deleteBtn);
//append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listItem);
//add an event listener to the delete button that removes the li element when clicked

    deleteBtn.addEventListener("click", function() {
    list.removeChild(listItem);
    })
//send the focus to the input element
//clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
    input.focus();

})
