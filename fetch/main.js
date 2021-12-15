const getIt = new Request('https://jsonplaceholder.typicode.com/users');

fetch(getIt)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }).catch(console.error);

const getSnorlax = new Request('https://pokeapi.co/api/v2/pokemon/snorlax/');

fetch(getSnorlax)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.error);
