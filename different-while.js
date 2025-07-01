// odd number \\
let i = 1;

while (i <= 20) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}

// *** 2nd option *** \\
let p = 1;

while (p <= 20) {
  if (p % 2 === 0) {
    console.log(p);
  }
  p++;
}

// *** 3rd option *** \\
let x = 1;

while (x <= 20) {
  console.log(x);
  x += 2;
}

// *** 4rd type *** \\
// give me the list numbers between 1 to 30 divisible by 5
let z = 1;

while (z <= 30) {
  if (z % 5 === 0) {
    console.log(z);
  }
  z++;
}

// give me the sum of numbers from 1 to 20 that are divisible by 3
let a = 1;
let sum = 0;

while (a <= 20) {
  if (a % 3 === 0) {
    console.log(a);
    sum = sum + a;
  }
  a++;
}

console.log(`total sum is`, sum);
