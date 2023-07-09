const btn = document.querySelector(".show");

const hide = document.querySelector(".hide");

const closeBtn = document.querySelector(".close")

function content() {
    

    if(hide.classList.contains('show')) {

        hide.classList.remove('show')
    }
    else {
        hide.classList.add('show')
    }
}

btn.addEventListener('click', content);

function show() {
    
    btn.style.display = "none"
    closeBtn.style.display = "block"
}

function hidden() {
    
    btn.style.display = "block"
    closeBtn.style.display = "none"
}

btn.addEventListener('click', show)

closeBtn.addEventListener('click', content);

closeBtn.addEventListener('click', hidden);


const listItems = document.querySelector(".list-2");

function listFunc() {
    

    hide.classList.remove("show");
    btn.style.display = "block"
    closeBtn.style.display = "none"
}

listItems.addEventListener('click', listFunc)