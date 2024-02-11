const listBtns = document.querySelectorAll('.navigation__lists')

listBtns.forEach(listBtn => {
    listBtn.addEventListener('click', function () {
        listBtns.forEach(function(item) {
            if (item !==  listBtn) {
                item.classList.remove('active')
            }
        })
        listBtn.classList.toggle('active');
    });
    })