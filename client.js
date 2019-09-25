const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log('I am connected!')
    conn.write("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write('Name: RJO');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });
  
  conn.setEncoding('utf8');

  


  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = { connect };