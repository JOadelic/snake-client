const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    // host: '172.46.2.204',
    host: '10.0.2.15',
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log('I am connected!')
    conn.write("Successfully connected to game server");
  });
// comment this in if you want to see initials on screen
  // conn.on('connect', () => {
  //   conn.write('Name: RJO');
  // });
  
  conn.setEncoding('utf8');

  return conn;
}

module.exports = { connect };