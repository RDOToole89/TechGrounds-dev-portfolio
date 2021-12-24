const contactInfo = {
  naam: '',
  telefoon: '',
  adres: '',
  email: '',
  userID: '',
};
const button = document.querySelector('button');

const inputs = document.querySelectorAll('input');
console.log(inputs);
const arrayOfInputs = [...inputs]; //verandert noodlist in array
arrayOfInputs.forEach((input) => {
  input.addEventListener('change', (evt) => {
    const inputType = evt.target.dataset.info;
    switch (inputType) {
      case 'naam': {
        contactInfo.naam = evt.target.value;
        contactInfo.userID = evt.target.value + '13';
        break;
      }
      case 'telefoon': {
        contactInfo.telefoon = evt.target.value;
        break;
      }
      case 'straatnaam': {
        contactInfo.adres = evt.target.value;
        break;
      }
      case 'huisnummer': {
        contactInfo.adres += ` ${evt.target.value}`;
        break;
      }

      case 'stad': {
        contactInfo.adres += ` ${evt.target.value}`;
        break;
      }
      case 'postcode': {
        console.log('postcode inside case', evt.target.value);
        contactInfo.adres += ` ${evt.target.value}`;

        break;
      }
      case 'email': {
        contactInfo.email = evt.target.value;
        break;
      }
    }
  });
});

const naamDisplay = document.querySelector('.card_naam_input');
const telefoonDisplay = document.querySelector('.card_telefoonnummer_input');
const adresDisplay = document.querySelector('.card_adres_input');
const emailDisplay = document.querySelector('.card_email_input');
const userDisplay = document.querySelector('.card_user_input');

button.addEventListener('click', (evt) => {
  evt.preventDefault();

  const telefoon = contactInfo.telefoon;
  console.log(telefoon);
  const splitTelefoon = contactInfo.telefoon.split('0');
  splitTelefoon[0] = '+31';
  const modeTelefoon = splitTelefoon.join('');
  contactInfo.telefoon = modeTelefoon;

  console.log(splitTelefoon);
  console.log(modeTelefoon);

  naamDisplay.textContent = contactInfo.naam;
  telefoonDisplay.textContent = contactInfo.telefoon;
  adresDisplay.textContent = contactInfo.adres;

  const email = contactInfo.email;

  if (email) {
    const splitEmail = email.split('@')[1].toLowerCase().split('.')[0];
    if (splitEmail !== 'techgrounds') {
      alert(
        `${splitEmail} is not a valid emailaddress. Please, use @techgrounds.com`
      );
      console.log(splitEmail);
    }
  }

  emailDisplay.textContent = contactInfo.email;
  userDisplay.textContent = contactInfo.userID;

  inputs.forEach((input) => {
    input.value = '';
  });
});
