// continue ===> skip this iteration
// break ===> i am done with this loop. loop end .

let x = 0;
while (x < 15) {
  x++;
  if (x % 5 !== 0) {
    continue;
  }
  console.log(x);
}

for (i = 0; i < 20; i++) {
  if (i % 10 !== 1) {
    continue;
  }
  console.log(i);
}
