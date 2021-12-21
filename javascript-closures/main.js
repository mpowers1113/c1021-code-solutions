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
