# https://www.algoexpert.io/questions/group-anagrams

#* Group Anagrams

def groupAnagrams(words):
    # Write your code here.
    sortedWords = []
    res = []
    for word in words:
        sortedWord = ''.join(sorted(word))
        if sortedWord not in sortedWords:
            sortedWords.append(sortedWord)
            res.append([])
        res[sortedWords.index(sortedWord)].append(word)
    return res