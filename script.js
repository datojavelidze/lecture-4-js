let butt = document.querySelector('.but-changer');
let changer = document.querySelector('.changer');




butt.addEventListener('click', ()=>{
    let randomcolor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomcolor}`
    changer.innerHTML = `Background color : #${randomcolor}`
    changer.style.color = `#${randomcolor}`
    
})

