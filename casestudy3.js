//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.
{
    let arr = [10, 365, 723, 6, 63];


    let firstElement = arr[0];

    function prime(firstElement) {
        if (firstElement <= 1)
            return `${firstElement} is not a prime number`;
        for (let i = 2; i < firstElement; i++) {
            if (firstElement % i == 0)
                return `${firstElement} is not a prime number`;
        }
        return `${firstElement} is a prime number`;
    }

    console.log(prime(firstElement));
}
console.log('\n');

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//check if the current number is odd or even, and display the message to the screen as odd or even.

{
    for (let i = 0; i <= 15; i++) {
        if (i % 2 == 0)
            console.log(`${i} is even`);
        else
            console.log(`${i} is odd`)
    }

}
console.log('\n');

// Write a JavaScript program to find the sum of squares of the elements of an array.

{
    let arr = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    console.log('sum of squares is '+ sum);
}
console.log('\n');

// Write a JavaScript program to find the most frequent item of an array

{
    let arr = [1, 1, 3, 3, 4, 4, 4, 3, 3];
    let maxCount = 0;
    let maxItem = '';
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
        }
        if (count > maxCount) {
            maxCount = count;
            maxItem = arr[i];
        }
    }
    console.log('most frequent item is '+ maxItem);
}

