# https://leetcode.com/problems/sort-the-people

#* 2418. Sort the People

class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        a=zip(heights,names)
        l=[]
        for i,j in sorted(a):
            l.append(j)
        return l[::-1]