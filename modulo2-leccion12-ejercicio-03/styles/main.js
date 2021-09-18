'use strict';
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

for (const name of users) {
    const name = users.name;
    const premium = users.isPremium;
  if (premium) {
    console.log(`Bienvenida ${users.name}, gracias por confiar en nosotros`);
  } else {
    console.log(`Bienvenida ${name}`);
  }
}
