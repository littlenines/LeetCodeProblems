const arr = [10,2,5,3];

for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = 0; j < arr.length; j++) {
        let second = arr[j];
        if (second === 2* first && i !==j) {
            return true;
        }
    }
}
return false;
