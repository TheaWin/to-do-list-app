/* //COMMENTS ARE IN JAVASCRIPT */

function newItem () {
    // let li = document.createElement("li");
    let li = $('<li></li>');
    //let inputValue = document.getElementById("input").value;
    //let text = document.createTextNode(inputValue);
    let inputValue = $('#input').val();
    //li.appendChild(text); 
    li.append(inputValue);

    if (inputValue === '') {
        alert ('You must write something!');
    } else {
        //let list = document.querySelector('#list');
        //list.appendChild(li);
        $('#list').append(li);
    }

    function crossOut() {
        //li.classList.toggle("strike");
        li.toggleClass('strike');
    }

    //li.addEventListener('dblclick',crossOut);
    li.on('dblclick', crossOut);
}