let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");

let lengthOfFavoriteFruits = favoriteFruits.?("lime");
console.log(favoriteFruits);  // Should print [ 'grapefruit', 'orange', 'lemon', 'tangerine', 'lime' ]

let arr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// Removing the last element is done with pop():
arr8.pop()

// Deleting the first element can be done with shift(). This causes all other indices to be reduced by one:
arr8.shift()

// You can use the splice() method to add elements at a certain index.
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"]
arrOfShapes.splice(2, 0, "square", "trapezoid"); // The first parameter, 2 in our case, is the index of the array 
                                                 // on which we want to start inserting. 
                                                 // The second parameter, 0, is the number of elements we want to 
                                                 // delete starting at our previously defined starting index.
                                                 // The parameters after these first two, square and trapezoid are 
                                                 // whatever should be inserted starting at the start index.
console.log(arrOfShapes);

// What does this do?
arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 2, "square", "trapezoid")
console.log(arrOfShapes)

// Use splice to leave only circle in the array. This another way to delete values from an array.
arrOfShapes.splice(?, 
console.log(arrOfShapes)

// You can also add another array to your array. This can be done with the concat() method. 
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

// FIX: Add [7,8,9] to arr7
let arr9 = arr7.?(7, 8, 9);
console.log(arr9)

// If you want to check whether a value is present in an array, you can use the find() method. 
// What will go in the find() method is somewhat different. It is actually a function. 
// This function will be executed on every element in the array until it finds a match, and if it does not, 
// then it will return undefined.
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6}); // We will cover functions in more depth later.
let findValue2 = arr8.find(function(e) { ? e === 10});    // FIX
console.log(findValue, findValue2);

// Often, you do not only want to find the element, but you want to know what position it is on. 
// This can be done with the indexOf() method. This method returns the index on which the value is found.
arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.?(10);  // FIX: Find the index of 10
console.log(findIndex, findIndex2);

// What do you think this does?
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");

// Call the sort method to sort an array
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
// Call the reverse method to reverse the elements of an array.
names.reverse()

/*
1.  Create an empty array to use as a shopping list.
2.  Add Milk, Bread, and Apples to your list.
3.  Update "Bread" with Bananas and Eggs.
4.  Remove the last item from the array and output it into the console.
5.  Sort the list alphabetically.
6.  Find and output the index value of Milk.
7.  After Bananas, add Carrots and Lettuce.
8.  Create a new list containing Juice and Pop.
9.  Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.

Your final list should look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
*/