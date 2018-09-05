var slide_left = document.getElementById('previous'),
    slide_right = document.getElementById('next'),
    total_img = document.getElementsByClassName('slide'),
    idx = 0; // Индекс текущего слайда.
    total_img[1].style.display = 'none';
    total_img[2].style.display = 'none';
    slide_left.style.display = 'none';




slide_right.addEventListener('click', moveLeft);
function moveLeft(){
    slide_left.style.display = 'block';
    total_img[idx].style.display = 'none';
    total_img[++idx].style.display = 'block';
    // element.style.display = 'none';
    if (idx === total_img.length - 1) {
        slide_right.style.display = 'none';
    }
}


slide_left.addEventListener('click', moveRight);
function moveRight(){
    slide_right.style.display = 'block';
    total_img[idx].style.display = 'none';
    total_img[--idx].style.display = 'block';
    // element.style.display = 'none';
    if (idx === 0) {
        slide_left.style.display = 'none';
    }
}