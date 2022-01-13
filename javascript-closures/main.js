const graduate = credential => {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
const softwareEngineer = graduate('J.S.');

const whatMyParentsHopedIdBe = medicalSchool('Dan Abramov');
const readingDryDocumentsAllDay = lawSchool('Ryan Florence');
const me = softwareEngineer('Matt Powers');

console.log(whatMyParentsHopedIdBe, '\n', readingDryDocumentsAllDay, '\n', me);

var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    }
  };
};

const counterOne = makeCounter();
const counterTwo = makeCounter();

counterOne.increment();
counterTwo.decrement();

console.log('counterOne value', counterOne.value(), 'counterTwo value', counterTwo.value());
