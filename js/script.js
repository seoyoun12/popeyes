
const menu_container = document.querySelector('.menu_container');


const best=()=>{
    let menu_wrap = document.querySelectorAll('.menu_wrap');
    let first = menu_wrap[0]
    let last = menu_wrap[menu_wrap.length-1]

    menu_container.prepend(last)
    console.log(menu_wrap)
}

let move = setInterval(best,2000);

menu_container.addEventListener('mouseenter',()=>{
    clearInterval(move);
})

menu_container.addEventListener('mouseleave',()=>{
    move = setInterval(best,2000);
})



console.log(first)
console.log(last)