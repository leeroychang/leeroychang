const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

modeToggle.addEventListener('click', () => {
    document.body.style.transition = 'background-color 0.3s, color 0.3s';
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('themeMode', isLightMode ? 'light' : 'dark');
    modeIcon.classList.toggle('fa-sun-o');
    modeIcon.classList.toggle('fa-moon-o');
})

modeToggle.addEventListener('mouseenter', () => {
    modeIcon.classList.toggle('fa-sun-o');
    modeIcon.classList.toggle('fa-moon-o');
})

modeToggle.addEventListener('mouseleave', () => {
    modeIcon.classList.toggle('fa-sun-o');
    modeIcon.classList.toggle('fa-moon-o');
})


const themeMode = localStorage.getItem('themeMode');
const systemMode = window.matchMedia('(prefers-color-scheme: light)').matches;

if (themeMode === 'light' || (themeMode!=='dark' && systemMode))
{
    document.body.classList.add('light-mode');
    modeIcon.classList.toggle('fa-sun-o');
    modeIcon.classList.toggle('fa-moon-o');
}
