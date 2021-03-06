function rotLeft(a, d) {
  if (a.length === d) {
    return a;
  }

  const rotatedArray = [];
  for (let i = 0; i < a.length; i++) {
    const rotationLevel = getRotateLevel(d, a.length);
    let futurRotIndex = 0;
    const currentElementValue = a[i];
    futurRotIndex = i - rotationLevel;
    if (futurRotIndex < 0) {
      futurRotIndex = a.length + (futurRotIndex);
    }
    rotatedArray[futurRotIndex] = currentElementValue;
  }
  console.log(rotatedArray);
  return rotatedArray;
}

function getRotateLevel(d, length) {
  if (d > length) {
    const loopLevel = Math.ceil(d / length);
    const index = (loopLevel * length) - d;
    return length - index;
  }
  return d;
}

// [ 1, 2, 3, 4, 5 ], 4 [3, 4, 5, 1, 2] 8
// [ 1, 2, 3, 4, 5 ]

// Si la le décalage est égale à la taille pas besoin de faire le decalage


// index 2 - decale 3 -> dest 4 -> taille 5
// de la soustraction limite - decalage correspond à la taille de l'array - le reste de cette soustraction


// [ 1, 2, 3, 4, 5 ]

rotLeft([1, 2, 3, 4, 5], 4);
rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10);
rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13);
