# https://leetcode.com/problems/3sum

#* 15. 3Sum

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()  # Sort the array in ascending order
        ans = []
        
        for i in range(len(nums)-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue  # Skip duplicate elements
            
            left = i + 1
            right = len(nums) - 1
            
            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]
                
                if current_sum == 0:
                    ans.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    
                    while left < right and nums[left] == nums[left-1]:
                        left += 1  # Skip duplicate elements
                    while left < right and nums[right] == nums[right+1]:
                        right -= 1  # Skip duplicate elements
                elif current_sum < 0:
                    left += 1
                else:
                    right -= 1
        
        return ans