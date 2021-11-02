let sentence = "hello there from lighthouse labs";
let delay = 500;

const typewriter = function(sentence) {
for (const letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
  delay += 500;
} setTimeout(() => {
  process.stdout.write("\n");
}, delay);
}

typewriter(sentence);
//process.stdout.write removes the new line that is created at the end of a console.log




