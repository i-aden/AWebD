let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  postcode: "M33 G11",
                  city: "Manchester",
                  county: "Greater Manchester"
                },
                yearOfEstablishment: 2021 
              }

// FIX: Change the postcode to M24 7HZ              
// company?postcode = "M24 7HZ"

// FIX: Our company might have a range of activities instead of one. 
// Replace the activity from our previous sample with the array:
// ["food manufacturing", "improving kids' health", "manufacturing toys"]
company = { companyName: "Healthy Candy",
                // activities: ??,
                address: {
                  street: "2nd street",
                  number: "123",
                  postcode: "M33 G11",
                  city: "Manchester",
                  county: "Greater Manchester"
                },
                yearOfEstablishment: 2021 
              }

// FIX: Fetch the second value of the company's activities: improving kids' health.
// let activitiy = compnayactivities[11]

// FIX
const animals = ['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog', 'rabbit']
for (const animal animals) {
  console.log(animal)
}

// FIX
const cityValues = [459, 144, 96, 34, 0, 14]
// Destructure cityvalues into 6 variables
const [manchester, birmingham, ?] = ?
console.log(birmingham)   // 144

/*
Take the following array:

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]

Manipulate your array using various methods, such as pop(), push(), shift(), unshift(), toLowerCase(),
toUpperCase() and transform it into the following:

      ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

You can take the following steps, or adopt your own approach:
1. Remove the first item and the last item.
2. Add FIRST to the start of the array.
3. Assign hello World to the fourth item value.
4. Assign MIDDLE to the third index value.
5. Add LAST to the last position in the array.
6. Output it to the console.
