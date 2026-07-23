const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.style.transition = 'background-color 0.3s, color 0.3s';
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('themeMode', isLightMode ? 'light' : 'dark');
    modeToggle.textContent = isLightMode ? 'Toggle Dark Mode' : 'Toggle Light Mode';
})


const themeMode = localStorage.getItem('themeMode');
const systemMode = window.matchMedia('(prefers-color-scheme: light)').matches;

if (themeMode === 'light' || (themeMode!=='dark' && systemMode))
{
    document.body.classList.add('light-mode');
    modeToggle.textContent = "Toggle Dark Mode";
}
