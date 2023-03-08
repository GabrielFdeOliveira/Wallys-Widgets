function calculatePacks(numOfWidgets, packSizes) {
  if (typeof numOfWidgets !== "number" || numOfWidgets <= 0) {
    throw new Error("Invalid input");
  }

  let result = [];
  let remaining = numOfWidgets;
  let packCount = {};

  for (let i = 0; i < packSizes.length; i++) {
    packCount[packSizes[i]] = 0;
  }

  while (remaining > 0) {
    for (let i = 0; i < packSizes.length; i++) {
      if (remaining > packSizes[i]) {
        if (i === 0) {
          remaining -= packSizes[i];
          result.push(packSizes[i]);
          packCount[packSizes[i]] += 1;
          break;
        } else {
          if (i < packSizes.length - 1) {
            remaining -= packSizes[i];
            result.push(packSizes[i]);
            packCount[packSizes[i]] += 1;
            break;
          } else {
            remaining = remaining - packSizes[i - 1];
            result.push(packSizes[i - 1]);
            packCount[packSizes[i]] += 1;
            break;
          }
        }
      } else if (i === packSizes.length - 1) {
        remaining -= packSizes[i];
        result.push(packSizes[i]);
        packCount[packSizes[i]] += 1;
        break;
      }
    }
  }
  return result;
}
export default calculatePacks;
