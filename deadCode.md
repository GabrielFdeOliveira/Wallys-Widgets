const packSizes = [5000, 2000, 1000, 500, 250];

function calculatePacks(numOfWidgets) {
if (typeof numOfWidgets !== 'number' || numOfWidgets <= 0) {
throw new Error('Invalid input');
}

let result = [];

for (let i = 0; i < packSizes.length; i++) {
while (numOfWidgets >= packSizes[i]) {
numOfWidgets -= packSizes[i];
result.push(packSizes[i]);
}
}
return result;
}

module.exports = calculatePacks;

---

test('should throw error for input greater than the maximum allowed value', () => {
expect(() => calculatePacks(Number.MAX_SAFE_INTEGER + 1)).toThrow('Invalid input');
});
