/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. 

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

// This will solve our problem with only 1 iteration
var maxProfit = function (prices) {
    let maxProfit = 0;
    let cheapestPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];

        console.log("price = " + prices[i]);
        console.log("cheapestPrice before = " + cheapestPrice);

        if (price < cheapestPrice) { cheapestPrice = price; }

        console.log("cheapestprice after = " + cheapestPrice);

        const currentProfit = price - cheapestPrice;
        console.log("currentProfit = " + currentProfit);

        maxProfit = Math.max(currentProfit, maxProfit);
        console.log("maxProfit = " + maxProfit);
        console.log("\n");
    }
    return maxProfit;
};

// module.exports = maxProfit;//
console.log(maxProfit([7, 1, 5, 3, 6, 4]));


/*
Time Complexity: O(n) - We iterate through the input Array once
Space Complexity: O(1)
*/