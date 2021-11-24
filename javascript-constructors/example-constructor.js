function ExampleConstructor() {

}

console.log('value of example ', ExampleConstructor, 'typeof example ', typeof ExampleConstructor);

var newExample = new ExampleConstructor();

console.log('value of newExample: ', newExample, 'instance of newExample: ', newExample instanceof ExampleConstructor);
