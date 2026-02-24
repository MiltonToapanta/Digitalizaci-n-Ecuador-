// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Get the content element
        const content = this.nextElementSibling;
        
        // Close all other accordions in the same parent
        const parentAccordion = this.closest('.accordion');
        const otherHeaders = parentAccordion.querySelectorAll('.accordion-header');
        const otherContents = parentAccordion.querySelectorAll('.accordion-content');
        
        otherHeaders.forEach(h => {
            if (h !== this) {
                h.classList.remove('active');
            }
        });
        
        otherContents.forEach(c => {
            if (c !== content) {
                c.classList.remove('active');
            }
        });
        
        // Toggle current accordion
        this.classList.toggle('active');
        content.classList.toggle('active');
    });
});

// Formula General accordion
const formulaHeader = document.querySelector('.formula-header');
if (formulaHeader) {
    formulaHeader.addEventListener('click', function() {
        const wrapper = this.nextElementSibling;
        this.classList.toggle('active');
        wrapper.classList.toggle('active');
    });
}

// Formula Close Button
const formulaCloseBtn = document.querySelector('.formula-close-btn');
if (formulaCloseBtn) {
    formulaCloseBtn.addEventListener('click', function() {
        const header = document.querySelector('.formula-header');
        const wrapper = document.querySelector('.formula-content-wrapper');
        
        if (header && wrapper) {
            header.classList.remove('active');
            wrapper.classList.remove('active');
        }
    });
}

// Year 2020 Close Button
function closeYear2020() {
    // Buscar el primer accordion-item en la sección years-section que corresponde a 2020
    const yearsSection = document.querySelector('.years-section');
    if (!yearsSection) return;
    
    const year2020Item = yearsSection.querySelector('.accordion-item:first-child');
    if (!year2020Item) return;
    
    const year2020Button = year2020Item.querySelector('.accordion-header');
    const year2020Content = year2020Item.querySelector('.accordion-content');
    
    if (year2020Button && year2020Content) {
        year2020Button.classList.remove('active');
        year2020Content.classList.remove('active');
        
        // Scroll suave hacia arriba
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Add keyboard accessibility
accordionHeaders.forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    
    header.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

if (formulaHeader) {
    formulaHeader.setAttribute('role', 'button');
    formulaHeader.setAttribute('tabindex', '0');
    
    formulaHeader.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
}

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        if (backToTopBtn) {
            backToTopBtn.classList.add('show');
        }
    } else {
        if (backToTopBtn) {
            backToTopBtn.classList.remove('show');
        }
    }
});

// Scroll to top when button is clicked
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('.nav-bar')?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

console.log('Accordion interactive functionality loaded successfully.');
