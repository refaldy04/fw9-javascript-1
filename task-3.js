const printSegitiga = 5;
let segitiga = '';

for (let i = 0; i <= printSegitiga; i++) {
  for (let j = 1; j <= printSegitiga - i; j++) {
    segitiga += j;
  }
  segitiga += '\n';
}
console.log(segitiga);
