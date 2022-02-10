async function selectionSort(speed) {
  for (let i = 0; i < arr.length - 1; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    bars.children[i].classList.add("current-bar");
    bars.children[small].classList.add("current-bar");
    let temp = arr[small];
    arr[small] = arr[i];
    arr[i] = temp;
    let first = bars.children[i].style.height;
    let second = bars.children[small].style.height;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 350 - speed)
    );
    bars.children[i].style.height = second;
    bars.children[small].style.height = first;
    bars.children[i].classList.remove("current-bar");
    bars.children[small].classList.remove("current-bar");
    bars.children[i].classList.add("sorted-bar");
    bars.children[small].classList.add("sorted-bar");
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 350 - speed)
    );
    bars.children[i].classList.remove("sorted-bar");
    bars.children[small].classList.remove("sorted-bar");
  }
  finalColor();
  newArrayBtn.disabled = false;
}