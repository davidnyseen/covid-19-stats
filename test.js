var http = require('https');
const express = require('express');

// express app
const app = express();

app.listen(3000); //  i am a server

app.get('/', (req, res) => { //  get info for custmer
// redirects
  res.redirect('/israel/confirmed');
});

app.get('/israel/confirmed', (req, res) => { //  get info for custmer
  var str = '';

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var confirmedCasesInIsrael = {
  host: 'api.covid19api.com',
  port: 443,
  path: '/dayone/country/israel/status/confirmed'
  
};
callback = function(response) { // what to do with unput
  

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    res.send(str);
    });
}

http.request(confirmedCasesInIsrael, callback).end(); // do options 
//https://documenter.getpostman.com/view/10808728/SzS8rjbc

  //res.sendFile('./views/index.html', { root: __dirname});
  
});
