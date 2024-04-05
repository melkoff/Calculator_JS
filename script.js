console.log('======================== Another Example =========================');

function createCounter() {
   let score = 0;

   function increaseScore(points) {
      score += points;
      console.log(`+${points}`);
   }

   function decreaseScore(points) {
      score -= points;
      console.log(`-${points}`);
   }

   function getScore() {
      return score;
   }

   return { increaseScore, decreaseScore, getScore };
}

const COUNTER = createCounter();

COUNTER.increaseScore(7);
COUNTER.increaseScore(7);
COUNTER.decreaseScore(13);
console.log(`The final score is ${COUNTER.getScore()} pts`);