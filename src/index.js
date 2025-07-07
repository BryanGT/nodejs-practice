const args = process.argv.slice(2);

let min = 1;
let max = 100;

if (args.length >= 2) {
  min = parseInt(args[0], 10);
  max = parseInt(args[1], 10);

  if (isNaN(min) || isNaN(max)) {
    console.error("Invalid arguments");
    process.exit(1);
  }

  if (min > max) {
    console.error("Minimum value cannot be greater than maximum value");
    process.exit(1);
  }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);