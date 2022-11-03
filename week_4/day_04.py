# Given an array of strings 
# return the snumber of times each string occurs (a frequency / hash table)


arr1 = ["a", "a", "a"]
arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"] 


def makeFrequencyTable(arr):
  arr_cp = arr
  freq_table = {}
  for i in range(len(arr)):
    if arr[i] not in freq_table:
      freq_table[arr[i]] = 1
    else:
      freq_table[arr[i]] += 1
  return freq_table


print(makeFrequencyTable(arr1))
print(makeFrequencyTable(arr2))