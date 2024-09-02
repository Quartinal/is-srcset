import isSrcsetAttribute from '../index.js';

const srcset = '/example.webp 2x, https://example.com/example.webp 3x';

console.log(isSrcsetAttribute(srcset));