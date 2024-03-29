const inputBox = document.querySelector(".textbox");
const btn = document.querySelector("#btn");
const commentContainer = document.querySelector(".chat-box");
let arrayOfTexts = []

// get data from local storage
const getLocalData = JSON.parse(localStorage.getItem('chat'))
// a function to render stored data

if (getLocalData) {
    arrayOfTexts = getLocalData
}
/* 
** on click of button:
** 1. if user input contains only white spaces, no div is created
** 2. if user input begins with :, a div and a <p> with a class 'received-chat'
**    is created and displays on the left of 'commentContainer'
** 3. if user input does not start with :, a div and a <p> with a class 'sent-chat'
**    is created and displays on the right of 'commentContainer'
*/
btn.addEventListener("click", function () {
    const newDiv = document.createElement('div')
    if (inputBox.value.charAt(0) === ':') {
        let typedString = inputBox.value.replace(':', '')
        newDiv.innerHTML = `<p class='text-area'>${typedString}</p>`
        newDiv.setAttribute('class', 'received-chat')
        commentContainer.appendChild(newDiv)
        arrayOfTexts.push(newDiv)
    } else if (inputBox.value.trim() == "") {
        inputBox.value = "";
    } else {
        newDiv.innerHTML = `<p class='text-area'>${inputBox.value}</p>`
        newDiv.setAttribute('class', 'sent-chat')
        commentContainer.appendChild(newDiv)
        arrayOfTexts.push(newDiv)
    }
    // clear input box after button click
    inputBox.value = "";
    localStorage.setItem('chat', JSON.stringify(arrayOfTexts))
    // scroll the chat to the bottom
    commentContainer.scrollTop = commentContainer.scrollHeight;
})

// on click of 'Enter' on keyboard
inputBox.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (window.screen.width > 768 && event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn").click();
    }
});