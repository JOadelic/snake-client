
let connection;

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  connection = conn;
  return stdin;
}

const handleUserInput = function (data) {
  if (data === 'x') {
      process.exit();
  } else if (data === 'w') {
    conn.write('Move: up');
  } else if (data === 'a') {
    conn.write('Move: left');
  } else if (data === 's') {
    conn.write('Move: down');
  } else if (data === 'd') {
    conn.write('Move: right');
  } else if (data === 'p') {
    conn.write('Say: poOopity');
  } else if (data === 'l') {
    conn.write('Say: cyaLatah');
  }
};




module.exports = { setupInput };