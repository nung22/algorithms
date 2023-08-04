# https://leetcode.com/problems/destination-city

#* 1436. Destination City

class Solution:
    
    def destCity(self, paths: List[List[str]]) -> str:

        xor_result = 0
        for city_a, city_b in paths:
            xor_result ^= hash(city_a)
            xor_result ^= hash(city_b)

        diff_bit = -xor_result & xor_result

        a = b = 0
        for city_a, city_b in paths:
            if hash(city_a) & diff_bit:
                a ^= hash(city_a)
            else:
                b ^= hash(city_a)

            if hash(city_b) & diff_bit:
                a ^= hash(city_b)
            else:
                b ^= hash(city_b)
        
        for _, city_b in paths:
            if hash(city_b) == b or hash(city_b) == a:
                return city_b
