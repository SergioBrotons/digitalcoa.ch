const path = require('path');
const nextPath = path.join(__dirname, '.next', 'standalone', 'server.js');

// Load environment the way Next.js standalone expects
process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || 3000;

console.log('--- DigitalCoa.ch Server Starting ---');
console.log('Detected Port:', process.env.PORT);
console.log('Searching for Next.js internal server at:', nextPath);

try {
  require(nextPath);
} catch (err) {
  console.error('FAILED TO START NEXT.JS STANDALONE SERVER');
  console.error('Error details:', err);
  process.exit(1);
}
