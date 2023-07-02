# https://leetcode.com/problems/jewels-and-stones

#* 771. Jewels and Stones

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        hashMap = {}
        for stone in stones:
            hashMap[stone] = hashMap.get(stone, 0) + 1
        res = 0
        for jewel in jewels:
            res += hashMap.get(jewel, 0)
        return res