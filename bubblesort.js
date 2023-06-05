function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.log(`Sorted numbers: ${arr}`);
}

const randomNumberArray = [...Array(100000)].map((_) =>
  Math.ceil(Math.random() * 100000)
);

console.log(`Unsorted numbers:  ${randomNumberArray}`);
console.log("------------------------------");

const start = Date.now();
const sortedArray = bubbleSort(randomNumberArray);
const end = Date.now();

console.log(`Execution time: ${end - start} ms`);
