const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
const row = document.getElementById('row');

function addTask()
{
    // if empty then stop
    if (inputBox.value === '') alert('Please enter something');
    else
    {
        // create a list value using the input text
        let li = document.createElement('li');
        // text in input field
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

// don't need to press the button, you can use the enter key
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') addTask();
});

list.addEventListener('click',function(e)
{
    // if you press on the list element then it gets crossed through and checked
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle('checked');
        saveData();
    }
    // if you press on the x then we delete the list element
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save the data every time you leave
function saveData()
{
    localStorage.setItem("data", list.innerHTML);
}

// display the saved data
function showTask()
{
    list.innerHTML = localStorage.getItem("data");
}

showTask();