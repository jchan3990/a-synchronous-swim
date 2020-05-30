const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

// Helper function to get random dir
function getMove() {
  var dirOptions = ['up', 'down', 'left', 'right']
  var index = Math.floor(Math.random() * dirOptions.length);

  // return dirOptions[index];
  var result = messages.dequeue()
  // return messages.dequeue();
  if (result !== undefined) {
    return result;
  } else {
    return dirOptions[index];
  }
}

// function getBg() {
//   var bgPath =
//   return bgPath;
// }

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(getMove());
    res.end();
  }

  // if (req.method === 'GET' && req.url === '/background.jpg') {
  //   if fs.readfile => background,jpg{
  //     res.write(send background)
  //   } else {
  //     r
  //   }
  //   // res.writeHead(404, headers);
  //   res.end();
  //   console.log('testing bg');
  // }

    res.writeHead(200, headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
};
