for(let i = 1; i <= 5; i++) {
    if(i === 3) { // strict equality operator is used to compare the value of i with 3
        continue; // This will skip the current iteration when i is equal to 3 and continue with the next iteration of the loop
    }
    console.log(i);
}