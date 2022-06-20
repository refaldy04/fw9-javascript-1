let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

const myData = {
  ...data,
  name: 'Refaldy Bagas Anggana',
  email: 'refaldybanggana@gmail.com',
  hobby: ['basket', 'comic', 'game'],
};

let { street, city } = data.address;

console.log(myData);
console.log(`${street} & ${city}`);
