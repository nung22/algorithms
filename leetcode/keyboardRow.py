# https://leetcode.com/problems/keyboard-row

#* 500. Keyboard Row 

class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        dic={}
        res=[]
        for i in "qwertyuiop":
            dic[i]=1
        for i in "asdfghjkl":
            dic[i]=2
        for i in "zxcvbnm":
            dic[i]=3
        for i in words:
            new=i.lower()
            prev=dic[new[0]]
            flg=1
            for j in new:
                if dic[j]!=prev:
                    flg=0
                    break
                prev=dic[j]
            if flg==1:
                res.append(i)
        return res
