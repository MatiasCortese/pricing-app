const slider = document.getElementById('slider')
let cardPriceNumbers = document.getElementsByClassName('card-price-numbers')

slider.addEventListener('click', () => {
    Array.from(cardPriceNumbers).forEach(price =>
        price.classList.toggle('hidden')
        )
    }
)



