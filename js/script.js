let closeBtn = document.getElementsByTagName("LI");
let i;
for (i = 0; i < closeBtn.length; i++) {
    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    closeBtn[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("textInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Напиши щось!!!');
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("textInput").value;

    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
