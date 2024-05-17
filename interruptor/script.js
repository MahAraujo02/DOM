const space_lamp = document.getElementById('space_lamp');
space_lamp.addEventListener("click", () => {
    if(space_lamp.classList.contains('div_bulb-off')){
        space_lamp.classList.add('div_bulb-on');
        space_lamp.classList.remove('div_bulb-off');
    }
    else{
        space_lamp.classList.add('div_bulb-off');
        space_lamp.classList.remove('div_bulb-on');
    }
});