# https://leetcode.com/problems/integer-to-roman

#* 12. Integer to Roman

class Solution:
    def intToRoman(self, num: int) -> str:
        # Creating Dictionary for Lookup
        num_map = {
            1: "I",
            5: "V",    4: "IV",
            10: "X",   9: "IX",
            50: "L",   40: "XL",
            100: "C",  90: "XC",
            500: "D",  400: "CD",
            1000: "M", 900: "CM",
        }
        
        # Result Variable
        r = ''
        
        
        for n in sorted(num_map.keys(), reverse=True):
            # If n in list then add the roman value to result variable
            while n <= num:
                r += num_map[n]
                num-=n
        return r