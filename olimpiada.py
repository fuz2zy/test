
def bubleSort(massive: list) -> list:
    for i in range(len(massive)):
        for j in range(i, len(massive)):
            if massive[i] > massive[j]:
                massive[i], massive[j] = massive[j], massive[i]

    return massive
    

def question1():
    
    n = int(input("n = "))
    k = int(input("k = "))

    answer = {}

    for num in range(n, k+1):
        answer[num] = {}

        for char in list(str(num)):
            answer[num][char] = 1 if char not in answer[num] else answer[num][char] + 1
        
        for char in answer[num]:
            if answer[num][char] == 3:
                print(num)

# question1(1000, 1020)

def splitStringToInt(a: str) -> list:

    res = []
    word = ""

    for charNum in range(len(a)):
        if a[charNum] == " ":
            res.append(int(word))
            word = ""
        
        else:
            word += a[charNum]
            if charNum == len(a) - 1:
                res.append(int(word))
   
    print(res)
    return res

def question2():
    
    nx = splitStringToInt(input())
    n = nx[0]
    x = nx[1]

    stepsByDays = []

    maxSteps = 0
    dayWithMaxSteps = 0
    sumSteps = 0

    for dayNum in range(n):
        stepsByDays.append(int(input()))

        if stepsByDays[dayNum] > maxSteps:
            dayWithMaxSteps = dayNum
            maxSteps = stepsByDays[dayNum]
        
        sumSteps += stepsByDays[dayNum]
    

    print(dayWithMaxSteps+1)
    if sumSteps >= x:
        print(1)


def question3():

    n = int(input())
    k = int(input())

    maxGroupByThreeVir = 7

    viruses = [3 for i in range(k)]

    for dayNum in range(n):
        
        amountVirWithoutGroup = len(viruses)
        
        for groupNum in range(maxGroupByThreeVir):
            if amountVirWithoutGroup > 0:
                amountVirWithoutGroup -= 3
                for virNum in range(5):
                    viruses.append(dayNum+3)
        
        if amountVirWithoutGroup >  0:
            while amountVirWithoutGroup > 0:
                amountVirWithoutGroup -= 5
                for virNum in range(9):
                    viruses.append(dayNum+3)

    print(len(viruses))
question3()







    

    