
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

wait(1)
  .then(() => console.log('3'))
  .then(() => wait(1))
  .then(() => console.log('2'))
  .then(() => wait(1))
  .then(() => console.log('1'))
  .then(() => wait(1))
  .then(() => console.log('go!'))