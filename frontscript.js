const budgetElements = document.querySelectorAll('.listop3__item');
const finalData = [];
budgetElements.forEach(el => {
    finalData.push({
        date: el.querySelector('.listop3__date1 span[aria-hidden="true"]').innerText,
        label: el.querySelector('.listop3__wording span.libelle-long').innerText,
        amount: el.querySelector('.listop3__amount span[aria-hidden="true"]').innerText
    });
});

