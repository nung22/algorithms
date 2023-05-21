# https://leetcode.com/problems/best-time-to-buy-and-sell-stock

#* 121. Best Time to Buy and Sell Stock 

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        minPrice = sys.maxsize
        for price in prices:
            if price < minPrice:
                minPrice = price
            
            profit = price - minPrice 

            if profit > result:
                result = profit
        return result