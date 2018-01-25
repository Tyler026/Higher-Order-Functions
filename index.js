function triple(x) { // Basic Function
    return x * 3
}

var triple = function(x) { // Higher Order Function
    return x * 3
}

// You can pass around the function
var waffle = triple

waffle(30)

// Function Are Values 

// Basic Array 
var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat'},
    { name: 'Jimmy',      species: 'fish'}
]

// Basic for(loop)
var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog')
        dogs.push(animals[i])
}

// FILTER Higher Order Functions
var dogs = animals.filter(function(animal) {
    return animals.species === 'dog'
})

// Another Example
var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)