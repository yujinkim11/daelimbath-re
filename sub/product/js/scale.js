(function(){

    const scaleAll = document.querySelectorAll('.scale')


    for(let i = 0; i < scaleAll.length; i++){
        scaleAll[i].addEventListener('click', () => scaleAll[i].classList.toggle('show'))
    }

})()