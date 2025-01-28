
const accordions = document.querySelectorAll('.accordion');
const checkboxInput =  document.querySelector('.checkbox input[type=checkbox]');
let multpleOpenAllowed = false;


const openAccordion = (accordionPanel, accordionArrow) => {
    accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';
    accordionPanel.classList.add('open');
    accordionArrow.classList.add('open')
}
const closeAccordion = (accordionPanel, accordionArrow) => {
    accordionPanel.classList.remove('open');
    accordionArrow.classList.remove('open');
    accordionPanel.style.maxHeight = null;
}
const closeAllAccordion = () => {
    accordions.forEach((accordion) => {
        const arrow = accordion.querySelector('.toggle');
        const panel = accordion.nextElementSibling;
        closeAccordion(panel, arrow);
    });
}

checkboxInput.addEventListener('change', (e) => {
    if(checkboxInput.checked) {
        multpleOpenAllowed = true;
    }else {
        multpleOpenAllowed=false;
        closeAllAccordion();
    }
})
accordions.forEach((accordion) => {
    const accordionArrow = accordion.querySelector('.toggle');
    const accordionPanel = accordion.nextElementSibling;

    accordion.addEventListener('click',  (e) => {
        const isOpen = accordionArrow.classList.contains('open');
        if(!multpleOpenAllowed) {
            closeAllAccordion();
        }
        if(!isOpen) {
            openAccordion(accordionPanel, accordionArrow);
        }else {
            closeAccordion(accordionPanel, accordionArrow);
        }
    });
});