/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  obj = {};
  for(let i = 0; i < transactions.length; i++){
    if(transactions[i].category in obj){
      obj[transactions[i].category] += transactions[i].price;
    }
    else{
      obj[transactions[i].category] = transactions[i].price;
    }
  }

  arr = [];
  objectList = Object.entries(obj);
  for(let i = 0; i < Object.keys(obj).length; i++){
    var temp = {};
    temp['category'] = objectList[i][0];
    temp['totalSpent'] = objectList[i][1];
    arr.push(temp);
  }

  return arr;
}

module.exports = calculateTotalSpentByCategory;
