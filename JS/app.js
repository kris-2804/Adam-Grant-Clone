const menubtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar-mobile')
const outerMenu = document.querySelector('.menu-btn2')
const socialIcons = document.querySelector('.main_header div');
const listArr = document.querySelectorAll.apply(document , ['li.relative'])
const Absolutelist = document.querySelectorAll('li.flex')
const dialougebox = document.querySelector('.dialougebox-container')
const cancelBtn = document.querySelector('button.btn')
window.onload = dialougebox.classList.remove('hide');
cancelBtn.addEventListener('click' ,()=>{
dialougebox.classList.toggle('hide')
})

menubtn.addEventListener('click', ()=>{
    menubtn.childNodes[1].style.opacity = 0
    menubtn.childNodes[1].style.transform = 'translateY(10px)'
    menubtn.childNodes[5].style.opacity = 0
    menubtn.childNodes[5].style.transform = 'translateY(-10px)'
    nav.classList.toggle('hidden')

})
window.innerWidth<450?outerMenu.classList.toggle('hidden'):null;
window.innerWidth<450?socialIcons.classList.add('hidden'):null;



outerMenu.addEventListener('click',()=>{
    menubtn.click()
})

Array.from(listArr).forEach((elem , index , array)=>{
    elem.addEventListener('mouseover', ()=>{
        elem.childNodes[1].classList.remove('hide')
        elem.childNodes[1].style.transition = "all 200ms"
    })
    elem.addEventListener('mouseleave', ()=>{
        elem.childNodes[1].classList.add('hide')
        elem.childNodes[1].style.transition = "all 200ms"
    })
})
Array.from(Absolutelist).forEach((elem , index , array)=>{
    elem.addEventListener('mouseover', ()=>{
        elem.childNodes[3].classList.remove('hidden')
    })
    elem.addEventListener('mouseleave', ()=>{
        elem.childNodes[3].classList.add('hidden')
    })
})

