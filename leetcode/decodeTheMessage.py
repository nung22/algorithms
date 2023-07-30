# https://leetcode.com/problems/decode-the-message

#* 2325. Decode the Message

class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        d={' ':' '}
        c=97
        for i in range(len(key)):
            if key[i] not in d:
                d[key[i]]=chr(c)
                c+=1

        result=''    
        for i in range(len(message)):
                result+=d[message[i]]  
        return result        