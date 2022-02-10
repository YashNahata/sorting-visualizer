async function bubbleSort(speed) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        bars.children[j].classList.add("current-bar");
        bars.children[j + 1].classList.add("current-bar");
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        let first = bars.children[j].style.height;
        let second = bars.children[j + 1].style.height;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 350 - speed)
        );
        bars.children[j].style.height = second;
        bars.children[j + 1].style.height = first;
        bars.children[j].classList.remove("current-bar");
        bars.children[j + 1].classList.remove("current-bar");
        bars.children[j].classList.add("sorted-bar");
        bars.children[j + 1].classList.add("sorted-bar");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 350 - speed)
        );
        bars.children[j].classList.remove("sorted-bar");
        bars.children[j + 1].classList.remove("sorted-bar");
      } else {
        bars.children[j].classList.add("sorted-bar");
        bars.children[j + 1].classList.add("sorted-bar");
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 350 - speed)
        );
        bars.children[j].classList.remove("sorted-bar");
        bars.children[j + 1].classList.remove("sorted-bar");
      }
    }
  }
  finalColor();
  newArrayBtn.disabled = false;
}