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

    //let crossOutButton = document.createElement('crossOutButton');
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    //crossOutButton.appendChild(document.createTextNode('X'));
    crossOutButton.append(document.createTextNode('X'));
    //li.appendChild(crossOutButton);
    li.append(crossOutButton);

    //crossOutButton.addEventListener('click', deleteListItem);
    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        //li.classList.add('delete')
        li.addClass('delete');
    }

    
}