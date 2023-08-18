# https://www.algoexpert.io/questions/transpose-matrix

#* Transpose Matrix

def transposeMatrix(matrix):
    # Write your code here.
    # transposed matrix
    res = []
    # iterate through number of matrix columns
    for i in range(len(matrix[0])):
        # create row for each column
        res.append([])

        # iterate through number of matrix rows
        for j in range(len(matrix)):
            # insert values originally in columns into new rows
            res[i].append(matrix[j][i])

    return res