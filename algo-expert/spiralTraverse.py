# https://www.algoexpert.io/questions/spiral-traverse

#* Spiral Traverse

def spiralTraverse(array):
    # Write your code here.
    res = []
    while array:
        res += array.pop(0)
        array = list(zip(*array))[::-1]
    return res