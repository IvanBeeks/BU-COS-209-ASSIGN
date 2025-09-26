// Modules example
// math.js (export)
export function add(x, y) {
  return x + y;
}

// app.js (import)
import { add } from './math.js';
console.log(add(5, 7)); // 12
