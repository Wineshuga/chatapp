const inputBox = document.querySelector(".textbox");
const btn = document.querySelector("#btn");

/* 
** on click of button:
** 1. if user input contains only white spaces, no div is created
** 2. if user input begins with :, a div and a <p> with a class 'received-chat'
**    is created and displays on the left of 'commentContainer'
** 3. if user input does not start with :, a div and a <p> with a class 'sent-chat'
**    is created and displays on the right of 'commentContainer'
*/
btn.addEventListener("click", function () {
    let newDiv = document.createElement('div')
    let commentContainer = document.querySelector(".chat-box");
    if (inputBox.value.charAt(0) === ':') {
        let string = inputBox.value.replace(':', '')
        newDiv.innerHTML = `<p class='text-area'>${string}</p>`
        newDiv.setAttribute('class', 'received-chat')
        commentContainer.appendChild(newDiv)
        // clear input box after button click
        inputBox.value = "";
    } else if (inputBox.value.trim() == "") {
        inputBox.value = "";
    } else {
        newDiv.innerHTML = `<p class='text-area'>${inputBox.value}</p>`
        newDiv.setAttribute('class', 'sent-chat')
        commentContainer.appendChild(newDiv)
        // clear input box after button click
        inputBox.value = "";
    }
})

// on click of 'Enter' on keyboard
inputBox.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn").click();
    }
});