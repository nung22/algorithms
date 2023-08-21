# https://www.algoexpert.io/questions/sweet-and-savory

#* Sweet and Savory

def sweetAndSavory(dishes, target):
    # Write your code here.
    sweet = sorted([dish for dish in dishes if dish < 0], key = abs)
    savory = sorted([dish for dish in dishes if dish > 0])

    bestPair = [0, 0]
    bestDiff = float('inf')
    sweetIdx, savoryIdx = 0, 0
        
    # iterate throuhg possible pairings
    while sweetIdx < len(sweet) and savoryIdx < len(savory):
        currSum = sweet[sweetIdx] + savory[savoryIdx]

        if currSum <= target:
            currDiff = target - currSum
            if currDiff < bestDiff:
                bestDiff = currDiff
                bestPair = [sweet[sweetIdx], savory[savoryIdx]]
            savoryIdx += 1
        else:
            sweetIdx += 1
    
    return bestPair
