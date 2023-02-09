let closeBtn = document.getElementsByTagName("li");
let i;
for (i = 0; i<closeBtn.length; i++){
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    closeBtn[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
let j;
for (j = 0; j< close.length; j++){
    close[j].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

