# https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

# * 1700. Number of Students Unable to Eat Lunch

class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        # iterate through sandwiches
        for sandwich in sandwiches:
            if sandwich not in students:
                return len(students)
            while sandwich != students[0]:
                students.append(students.pop(0))
            students.pop(0)
        
        return len(students) 