# https://www.algoexpert.io/questions/best-seat

#* Best Seat

def bestSeat(seats):
    # Write your code here.
    zero = 0
    start = 0
    length = 0
    result = -1

    for idx, val in enumerate(seats):
        if val == 0:
            zero += 1
        else:
            if zero > length:
                result = (idx - 1 + start) // 2
                length = zero
            zero = 0
            start = idx + 1
    return result