function addTask() {
    const div = document.getElementById("all_tasks");

    const taskEntry = document.createElement("label");
    taskEntry.classList.add("container")

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    const textinput = document.createElement("input");
    textinput.type = "text";
    textinput.placeholder = "To-do";

    const trashButton = document.createElement("button");
    trashButton.type = "button";
    trashButton.classList.add("trash");

    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-trash-o");
    icon.style.fontSize = "20px";
    trashButton.appendChild(icon);

    taskEntry.appendChild(checkBox);
    taskEntry.appendChild(textinput);
    taskEntry.appendChild(trashButton);

    div.appendChild(taskEntry);

    // Focus on the text input once created.
    textinput.focus()
}

let parentContainer = document.getElementById("all_tasks");

// Attach event listener to the parent container
parentContainer.addEventListener("click", function(event) {
    // Check if the clicked element has the 'trash' class
    if (event.target) {
        if (event.target.classList.contains("trash") || event.target.classList.contains("fa")) {
            // get element clicked, then the closest parent with "label"
            const label = event.target.closest("label");
            // remove the label
            label.remove();
        }

        if (event.target.type === "checkbox") {
            // Get the next element sibling, which is text input
            const textinput = event.target.nextElementSibling;
            if (event.target.checked) {
                textinput.style.color = "#4b4b4b";
                textinput.style.textDecoration = "line-through";
            }
            else {
                textinput.style.color = "#d4d4d4";
                textinput.style.textDecoration = "none";
            }
        }
    }
});

