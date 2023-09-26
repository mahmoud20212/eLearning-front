$(document).ready(() => {
    // Toggle menu in mobile
    const navLinks = document.querySelector('.nav-links');
    function onToggleMenu(e) {
        e.name = e.name === 'menu' ? 'close' : 'menu';
        navLinks.classList.toggle('top-[60px]');
    }

    // Toggle filter list
    $('.btn-toggle-filter-list').click((e) => {
        const listId = e.target.getAttribute('aria-controls');
        const filterSection = $(`#${listId}`);

        // Toggle the filter section
        filterSection.slideToggle();

        // Toggle the plus and minus icons based on aria-expanded attribute
        const plusIcon = filterSection.prev().find('.plus-icon');
        const minusIcon = filterSection.prev().find('.minus-icon');

        const isExpanded = e.target.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            plusIcon.hide();
            minusIcon.show();
            e.target.setAttribute('aria-expanded', 'false');
        } else {
            plusIcon.show();
            minusIcon.hide();
            e.target.setAttribute('aria-expanded', 'true');
        }
    });

    // Toggle sort menu
    $('#menu-sort-button').click(() =>{
        $('#menu-sort').slideToggle();
    });

    // Toggle sidebar filter
    $('#btn-filter-mobile').click(() =>{
        $('#sidebar-filter-mobile').removeClass('hidden');
    });
    $('#menu-sort-close-button').click(() =>{
        $('#sidebar-filter-mobile').addClass('hidden');
    });

    // function createTriangle() {
    //     const container = document.querySelector('main');
    //     const triangle = document.createElement('div');
    //     triangle.classList.add('triangle', 'green');
    //     triangle.style.left = `${Math.random() * 100}vw`;
    //     container.appendChild(triangle);
    
    //     // Remove the triangle after the animation is complete
    //     triangle.addEventListener('animationiteration', () => {
    //         container.removeChild(triangle);
    //     });
    // }
    
    // function startAnimation() {
    //     setInterval(createTriangle, 200);
    // }
    
    // startAnimation();
});
