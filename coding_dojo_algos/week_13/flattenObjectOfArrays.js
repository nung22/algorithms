/* 
My react dev friend had to do this while building a feature at work.
*/

const object1 = {
  closedCreditMemos: [],
  closedDeliveryOrders: [],
  closedPickupOrders: [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
  ],
  openCreditMemos: [],
  openDeliveryOrders: [
    {
      id: 123,
      type: "delivery",
      gateCode: "#2552",
    },
    {
      id: 153,
      type: "delivery",
      instructions: "Place in secure delivery box.",
    },
  ],
  openPickupOrders: [
    {
      id: 123,
      type: "pickup",
    },
  ],
  returnPickupOrders: [],
};

const expected1 = [
  { id: 112, type: "pickup" },
  { id: 117, type: "pickup" },
  { id: 123, type: "delivery" },
  { id: 153, type: "delivery" },
  { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays(obj) {
  const result = [];
  Object.values(obj).forEach( arr =>
    arr.length > 0 
    ? result.push(...arr) : ''
  )
  result.forEach( order => {
    Object.keys(order).forEach( key => 
      key !== 'id' && key !== 'type'
      ? delete order[key] : ''
    )
  })
  return result
}

console.log( flattenObjectOfArrays(object1));

/********************************************************************/

/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  hasCovid: false,
};

const people = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];

const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {}