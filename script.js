const dropdownArrow = document.querySelectorAll('.navigation__lists')
const tooltTip = document.querySelectorAll('.tooltip')
let activeAccordion = null;

dropdownArrow.forEach(arrow => {
    arrow.addEventListener('click', function () {
        dropdownArrow.forEach(function(item) {
            if (item !==  arrow) {
                item.classList.remove('active')
            }
        })
        arrow.classList.toggle('active');
    });
        console.log('helooo')
    })
