var repository = [
  {
    PokemonName: 'Bulbasaur',
    PokemonHeight: 2.04,
    PokemonTypes: ['Grass', 'Poison'],
    PokemonAbilities: ['Overgrow'],
  },
  {
    PokemonName: 'Ivysaur',
    PokemonHeight: 3.03,
    PokemonTypes: ['Grass', 'Poison'],
    PokemonAbilities: ['Overgrow'],
  },
  {
    PokemonName: 'Venusaur',
    PokemonHeight: 6.07,
    PokemonTypes: ['Grass', 'Poison'],
    PokemonAbilities: ['Overgrow'],
  },
  {
    PokemonName: 'Charmander',
    PokemonHeight: 2.00,
    PokemonTypes: ['Fire'],
    PokemonAbilities: ['Blaze'],
  },
  {
    PokemonName: 'Charmeleon',
    PokemonHeight: 3.07,
    PokemonTypes: ['Fire'],
    PokemonAbilities: ['Blaze'],
  },
  {
    PokemonName: 'Charizard',
    PokemonHeight: 5.07,
    PokemonTypes: ['Fire', 'Flying'],
    PokemonAbilities: ['Blaze'],
  },
  {
    PokemonName: 'Squirtle',
    PokemonHeight: 1.08,
    PokemonTypes: ['Water'],
    PokemonAbilities: ['Torrent'],
  },
  {
    PokemonName: 'Wartortle',
    PokemonHeight: 3.03,
    PokemonTypes: ['Water'],
    PokemonAbilities: ['Torrent'],
  },
  {
    PokemonName: 'Blastoise',
    PokemonHeight: 5.03,
    PokemonTypes: ['Water'],
    PokemonAbilities: ['Torrent'],
  }
]

for (var i = 0; i < repository.length; i++) {
  document.write('<h2>' + repository[i].PokemonName + '</h2>' + ' Height: ' + repository[i].PokemonHeight)
if (repository[i].PokemonHeight >= 6.03) {
  document.write(' (Wow that\'s big!)' )
  }
}
