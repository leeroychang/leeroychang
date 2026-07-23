const headerRibbon = document.getElementById('header-ribbon');


document.querySelectorAll(".header-tab").forEach(tab => {
    tab.addEventListener('click', () => {
        const section = document.getElementById(tab.id+"-section");
        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop-headerRibbon.offsetHeight
        })
    })
})

