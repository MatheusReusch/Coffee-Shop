const eat = document.getElementById('eat');

const drink = document.getElementById('drink');

const section = document.getElementById('products');

eat.addEventListener('click', () => {
    eat.style.backgroundColor = 'gray';
    eat.style.color = 'white'
    drink.style.backgroundColor = '';
    drink.style.color = '';
    section.innerHTML = '';
    let breadbasket = document.createElement('h2');
    breadbasket.innerText = 'Bread Basket'
    breadbasket.id = 'breadbasket'
    breadbasket.className = 'product'
    section.appendChild(breadbasket);
    let breadbasketes = document.createElement('h2');
    breadbasketes.innerText = 'Assortment of fresh baked fruit breads and muffins 5.50'
    breadbasketes.id = 'regularcoffee'
    breadbasketes.className = 'product'
    section.appendChild(breadbasketes);
    let honey = document.createElement('h2');
    honey.innerText = 'Honey Almond Granola with Fruits'
    honey.id = 'honey'
    honey.className = 'product'
    section.appendChild(honey);
    let honeyes = document.createElement('h2');
    honeyes.innerText = 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00'
    honeyes.id = 'regularcoffee'
    honeyes.className = 'product'
    section.appendChild(honeyes);
    let belgianwaffle = document.createElement('h2');
    belgianwaffle.innerText = 'Belgian Waffle'
    belgianwaffle.id = 'belgianwaffle'
    belgianwaffle.className = 'product'
    section.appendChild(belgianwaffle);
    let belgianwafflees = document.createElement('h2');
    belgianwafflees.innerText = 'Vanilla flavored batter with malted flour 7.50'
    belgianwafflees.id = 'regularcoffee'
    belgianwafflees.className = 'product'
    section.appendChild(belgianwafflees);
    let scrambledeggs = document.createElement('h2');
    scrambledeggs.innerText = 'Scrambled eggs'
    scrambledeggs.id = 'scrambledeggs'
    scrambledeggs.className = 'product'
    section.appendChild(scrambledeggs);
    let scrambledeggses = document.createElement('h2');
    scrambledeggses.innerText = 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50'
    scrambledeggses.id = 'regularcoffee'
    scrambledeggses.className = 'product'
    section.appendChild(scrambledeggses);
    let pancakes = document.createElement('h2');
    pancakes.innerText = 'Blueberry Pancakes'
    pancakes.id = 'pancakes'
    pancakes.className = 'product'
    section.appendChild(pancakes);
    let pancakeses = document.createElement('h2');
    pancakeses.innerText = 'With syrup, nutter and lots of berries 8.50'
    pancakeses.id = 'regularcoffee'
    pancakeses.className = 'product'
    section.appendChild(pancakeses);
})

drink.addEventListener('click', () => {
    eat.style.backgroundColor = '';
    drink.style.backgroundColor = 'gray';
    drink.style.color = 'white';
    eat.style.color = '';
    section.innerHTML = '';
    let coffee = document.createElement('h2');
    coffee.innerText = 'Coffee'
    coffee.id = 'coffee'
    coffee.className = 'product'
    section.appendChild(coffee);
    let regularCoffee = document.createElement('h3');
    regularCoffee.innerText = 'Regular Coffee 2.50'
    regularCoffee.id = 'regularcoffee'
    regularCoffee.className = 'product'
    section.appendChild(regularCoffee);
    let Chocolato = document.createElement('h2');
    Chocolato.innerText = 'Chocolato'
    Chocolato.id = 'chocolato'
    Chocolato.className = 'product'
    section.appendChild(Chocolato);
    let chocolato = document.createElement('h2');
    chocolato.innerText = 'Chocolate espresso with milk 4.50'
    chocolato.id = 'regularcoffee'
    chocolato.className = 'product'
    section.appendChild(chocolato);
    let coretto = document.createElement('h2');
    coretto.innerText = 'Coretto'
    coretto.id = 'coretto'
    coretto.className = 'product'
    section.appendChild(coretto);
    let corettoes = document.createElement('h2');
    corettoes.innerText = 'Whiskey and Coffee 5.00'
    corettoes.id = 'regularcoffee'
    corettoes.className = 'product'
    section.appendChild(corettoes);
    let icedtea = document.createElement('h2');
    icedtea.innerText = 'Iced tea'
    icedtea.id = 'icedtea'
    icedtea.className = 'product'
    section.appendChild(icedtea);
    let icedteaes = document.createElement('h2');
    icedteaes.innerText = 'Hot tea, except not hot 3.00'
    icedteaes.id = 'regularcoffee'
    icedteaes.className = 'product'
    section.appendChild(icedteaes);
    let soda = document.createElement('h2');
    soda.innerText = 'Soda'
    soda.id = 'soda'
    soda.className = 'product'
    section.appendChild(soda);
    let sodaes = document.createElement('h2');
    sodaes.innerText = 'Coke, Sprite, Fanta, etc. 2.50'
    sodaes.id = 'regularcoffee'
    sodaes.className = 'product'
    section.appendChild(sodaes);
})
