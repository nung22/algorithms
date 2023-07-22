# https://leetcode.com/problems/length-of-last-word

""" 

58. Length of Last Word

"""


class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.split()[-1])