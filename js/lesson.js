// TAB SLIDER

const tabsContentCards = document.querySelectorAll( '.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParent = document.querySelectorAll('.tab_content_items')
let currentTab = 0


const hideTabsContentCards = () => {
    tabsContentCards.forEach(( tabContentCard) => {
        tabContentCard.style.display = 'none'
    })
    tabsItems.forEach(( tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

hideTabsContentCards()
showTabsContentCards()

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hideTabsContentCards()
                showTabsContentCards(tabItemIndex)
            }
        })
    }
}

const slideCards = () => {
    hideTabsContentCards()
    currentTab = (currentTab + 1) % tabsItems.length
    showTabsContentCards(currentTab)

}

hideTabsContentCards ()
showTabsContentCards ()
setInterval (slideCards, 3000)

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hideTabsContentCards()
                currentTab = tabItem
                showTabsContentCards(currentTab)
            }
        })
    }
}




const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
//
// somInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd) .toFixed(2)
//     }
// })

const converter = (element, target, target2 , type) => {
    element.oninput = () => {
        const request = new  XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (type === 'som') {
                target.value = (element.value / data.usd).toFixed(2)
                target2.value = (element.value / data.eur).toFixed(2)
            }else if (type === 'usd') {
                target.value = (element.value * data.usd) .toFixed(2)
                target2.value = (element.value * data.usd / data.eur) .toFixed(2)
            }
            else if (type === 'eur') {
                target.value =  (element.value * data.eur) .toFixed(2)
                target2.value =  (element.value * (data.eur / data.usd)) .toFixed(2)
            }
        }
    }
}

converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd, 'eur')




const cards = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')


let count = 1;

function loadCardData(cardNumber) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        .then(response => response.json())
        .then(data => {
            cards.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}

loadCardData(count);



btnNext.addEventListener('click', () => {
    count++
    if (count > 200 ){
        count = 1
    }
    loadCardData(count)
})

btnPrev.addEventListener('click', () => {
    count--
    if (count < 1 ){
        count = 200
    }
    loadCardData(count)
})




fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data) )
    .catch(err => console.error(err, 'ошибка'))
