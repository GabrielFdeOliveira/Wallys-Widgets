function calculatePacks(numOfWidgets, packSizes) {
  if (typeof numOfWidgets !== "number" || numOfWidgets <= 0) {
    throw new Error("Invalid input");
  }

  let result = [];
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
      } else if (i === packSizes.length - 1) {
        remaining -= packSizes[i];
        result.push(packSizes[i]);
        break;
      }
    }
  }
  return result;
}
export default calculatePacks;
