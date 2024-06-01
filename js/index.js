let toggle = document.querySelector('.toggle');

// Mouseover
toggle.addEventListener('mouseover', function() {
    toggle.classList.add('toggle-ampliado'); 
});

// Mouseout
toggle.addEventListener('mouseout', function() {
    toggle.classList.remove('toggle-ampliado'); 
});

toggle.onclick = function() {    
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
};
