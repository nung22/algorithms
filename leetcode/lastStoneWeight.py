# https://leetcode.com/problems/last-stone-weight

""" 

1046. Last Stone Weight

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.


Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:

Input: stones = [1]
Output: 1 


Constraints:

1 <= stones.length <= 30
1 <= stones[i] <= 1000

"""

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # convert stones to negative numbers for max heap
        max_heap = [-stone for stone in stones]
        heapq.heapify(max_heap)

        while len(max_heap) > 1:
            # get the two largest stones
            stone1 = heapq.heappop(max_heap)
            stone2 = heapq.heappop(max_heap)

            # smash the two stones together
            if stone1 != stone2:
                heapq.heappush(max_heap, stone1 - stone2)

        # if there is only one stone left, return its positive value
        if max_heap:
            return -max_heap[0]
        else:
            return 0