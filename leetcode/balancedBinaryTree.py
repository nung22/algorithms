# https://leetcode.com/problems/balanced-binary-tree

""" 

110. Balanced Binary Tree

Given a binary tree, determine if it is 
height-balanced.


Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true


Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104

"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        lh=self.height(root.left)
        rh=self.height(root.right)
        if lh-rh>1 or rh-lh>1:
            return False
        leftside=self.isBalanced(root.left)
        rightside=self.isBalanced(root.right)
        if leftside and rightside:
            return True
        else:
            return False
    def height(self,root):
        if root is None:
            return 0
        else:
            return 1+max(self.height(root.left),self.height(root.right))