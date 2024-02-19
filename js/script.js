console.log('Password Generator');

const firstName = prompt('Qual è il tuo nome?');
console.log(firstName);

const lastName = prompt  ('Qual è il tuo cognome?');
console.log(lastName);

const color = prompt  ('Qual è il tuo colore preferito?');
console.log(color);

const password = firstName + lastName + color + '24';
console.log(password)

document.getElementById('mypassword').innerHTML = password;