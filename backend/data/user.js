import bcrypt from 'bcryptjs';

const user = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Gio Mari',
    email: 'gio@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Ilia Belka',
    email: 'ilia@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default user;
