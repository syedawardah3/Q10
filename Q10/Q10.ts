// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// Program: Dinner Guest List
// Author: ChatGPT
// Date: 2024-02-08
// Description: This program manages a dinner guest list. It adds new guests to the list and prints invitation messages for each guest.

// Original guest list
let guests: string[] = ['Alice', 'Bob', 'Charlie'];

// Informing people about the bigger dinner table
console.log("Good news everyone! We've found a bigger dinner table!");

// Add one new guest to the beginning of the list
guests.unshift('David');

// Add one new guest to the middle of the list
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Emily');

// Use push() to add one new guest to the end of the list
guests.push('Frank');

// Print invitation messages
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}

// Program: Fibonacci Sequence
// Author: ChatGPT
// Date: 2024-02-08
// Description: This program generates the Fibonacci sequence up to a specified number of terms and prints the sequence.

// Function to generate Fibonacci sequence
function fibonacci(n: number): number[] {
    let sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Generate and print Fibonacci sequence with 10 terms
console.log("Fibonacci sequence:");
console.log(fibonacci(10).join(', '));
