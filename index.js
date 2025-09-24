
//scales up first project

const project = document.querySelector('#project1');

project.addEventListener('mouseenter', () => {
    if (project) { // Check if the element was found
        project.style.transform = 'scale(1.5)';
        project.style.zIndex = '2';
    }
});
project.addEventListener('mouseleave', () => {
    if (project) { // Check if the element was found
        project.style.transform = 'scale(1)';
        project.style.zIndex = '0';
    }
});

//scales up second project

const project2 = document.querySelector('#project2');

project2.addEventListener('mouseenter', () => {
    if (project2) { // Check if the element was found
        project2.style.transform = 'scale(1.5)';
        project2.style.zIndex = '2';
    }
});
project2.addEventListener('mouseleave', () => {
    if (project2) { // Check if the element was found
        project2.style.transform = 'scale(1)';
        project2.style.zIndex = '0';
    }
});

//scales up thrid project

const project3 = document.querySelector('#project3');

project3.addEventListener('mouseenter', () => {
    if (project3) { // Check if the element was found
        project3.style.transform = 'scale(1.5)';
        project3.style.zIndex = '2';
    }
});
project3.addEventListener('mouseleave', () => {
    if (project3) { // Check if the element was found
        project3.style.transform = 'scale(1)';
        project3.style.zIndex = '0';
    }
});

//scales up fourth project

const project4 = document.querySelector('#project4');

project4.addEventListener('mouseenter', () => {
    if (project4) { // Check if the element was found
        project4.style.transform = 'scale(1.5)';
        project4.style.zIndex = '2';
    }
});
project4.addEventListener('mouseleave', () => {
    if (project4) { // Check if the element was found
        project4.style.transform = 'scale(1)';
        project4.style.zIndex = '0';
    }
});

//click project


project.addEventListener('click', () => {
    window.location.href = 'projects.html#rawlings';
});


project2.addEventListener('click', () => {
    window.location.href = 'projects.html#fantasy';
});


project3.addEventListener('click', () => {
    window.location.href = 'projects.html#mythrootGames';
});