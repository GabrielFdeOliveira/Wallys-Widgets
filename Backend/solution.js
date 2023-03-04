const packSizes = [5000, 2000, 1000, 500, 250];

export function order(numOfWidgets) {
  let result = [];
  if (typeof numOfWidgets !== 'number' || numOfWidgets <= 0) {
    throw new Error('Invalid input');
  }

  let remaining = numOfWidgets;

  while (remaining > 0) {
    for (let i = 0; i < packSizes.length; i++) {
      if (remaining > packSizes[i]) {
        if (i === 0) {
          remaining -= packSizes[i];
          result.push(packSizes[i]);
          break;
        } else {
          if (i < packSizes.length - 1) {
            remaining -= packSizes[i];
            result.push(packSizes[i]);
            break;
          } else {
            remaining = remaining - packSizes[i - 1];
            result.push(packSizes[i - 1]);
            break;
          }
        }
      }
      else if (i === packSizes.length - 1) {
        remaining -= packSizes[i];
        result.push(packSizes[i]);
        break;
      }
    }
  }
  console.log(result)
  return result;
}
order(12001)