
//window.alert('O site ainda está passando \n por alterações ');

document.addEventListener('DOMContentLoaded', function() {
    const floatElement = document.querySelector('.float-element');

    floatElement.addEventListener('click', function() {
        if(floatElement.computedStyleMap.animationPlayState === 'paused'){
            floatElement.computedStyleMap.animationPlayState= 'running';
        } else {
            floatElement.computedStyleMap.animationPlayState = 'paused';
        }
    });
});