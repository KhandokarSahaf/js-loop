// odd numbers \\
for (let i = 1; i < 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// *** 2 nd Type *** \\
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// *** 3rd type *** \\
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// *** 4rd type *** \\
// give me the list numbers between 1 to 30 divisible by 5

for (iz = 1; iz <= 30; iz++) {
  if (iz % 5 === 0 && iz % 3 === 0) {
    console.log(iz);
  }
}

// give me the sum of numbers from 1 to 20 that are divisible by 3
let total = 0;

for (let nn = 1; nn <= 20; nn++) {
  if (nn % 3 === 0) {
    console.log(nn);
    total = total + nn;
  }
}
console.log(`total sum is`, total);
