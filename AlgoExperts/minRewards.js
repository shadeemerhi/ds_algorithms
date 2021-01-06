function minRewards(scores) {
  const rewards = new Array(scores.length).fill(1);

  let rewardR;
  let rewardL;
  let reward = 1;
  let expR = false;
  let expL = false;
  for(let i = 0; i < scores.length; i++) {
    reward = 1;
    if (isMinimum(scores[i-1], scores[i], scores[i+1])) {
      let left = i - 1;
      let right = i + 1;
      rewards[i] = 1;
      expR = true;
      expL = true;

      while(right < scores.length && expR) {
        reward++;
        rewards[right] = reward;
        right++;
        if(scores[right + 1] < scores[right]) {
          console.log(scores[right], scores[right + 1], reward)
          rewards[right] = ++reward;
          rewards[right + 1] = 1;
          expR = false;
          console.log('right');
        }
      }

      reward = 1;

      while(left >= 0 && expL) {
        console.log('left', reward);
        if(rewards[left - 1] > 1) break;
        reward++;
        rewards[left] = reward;
        left--;
        if(scores[left - 1] < scores[left]) {
          rewards[left] = ++reward;
          rewards[left - 1] = 1;
          expL = false;
          console.log('left');

        }
      }
    }
  }
  return rewards.reduce((a, b) => a + b);
}

function isMinimum(prev, current, next) {
  return prev > current && next > current;
}

// const scores = [8, 4, 2, 1, 3, 6, 7, 9, 5];
const scores = [5, 10];

const test = minRewards(scores);

console.log(test);