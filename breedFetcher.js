const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {

  if (error) {
    console.log(error);
    throw Error;
  } else if (response['body'] === '[]') {
    console.log('Requested breed does not exist.');
  } else if (response['body'] !== '[]') {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }

});