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
