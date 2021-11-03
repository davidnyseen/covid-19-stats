var http = require('https');
const express = require('express');
var cors = require('cors');
// express app
const app = express();

app.listen(3003); //  i am a server

app.get('/', cors(), (reqFromClient, responseToClient) => { //  get info for custmer
  responseToClient.redirect('/israel/confirmed');
});

app.get('/israel/confirmed', cors(), (reqFromClient, responseToClient) => { //  get info for custmer
  var str = '';
  console.log("welcome");
  //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
  var confirmedCasesInIsrael = {
    host: 'api.covid19api.com',
    port: 443,
    path: '/dayone/country/israel/status/confirmed'

  };
  callback = function (responseOnCovid) { 
    // what to do with unput
    //another chunk of data has been received, so append it to `str`
    responseOnCovid.on('data', function (chunk) {

      str += chunk;
    });

    //the whole response has been received, so we just print it out here
    responseOnCovid.on('end', function () {
      console.log("end", str);

      responseToClient.send(str);

    });
  }

  http.request(confirmedCasesInIsrael, callback).end();
  // do options 
  //https://documenter.getpostman.com/view/10808728/SzS8rjbc

  //res.sendFile('./views/index.html', { root: __dirname});

});
