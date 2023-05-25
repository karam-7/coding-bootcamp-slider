const back = document.querySelectorAll('#back');
const next = document.querySelectorAll('#next');
const sliders = document.querySelectorAll('.slider');

let currentItem = 0;

function display(currentItem){
    sliders.forEach(function(slider){
        slider.style.display = 'none';
    })
    sliders[currentItem].style.display = "flex";
}

display(currentItem);

back.forEach(function(btn){
    btn.addEventListener('click',function(){
        currentItem--;
        if(currentItem<0){
            currentItem = 1;
        }
        display(currentItem);
    })
})

next.forEach(function(btn){
    btn.addEventListener('click',function(){
        currentItem++;
        if(currentItem>1){
            currentItem = 0;
        }
        display(currentItem);
    })
});