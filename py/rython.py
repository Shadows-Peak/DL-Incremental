# Due to not wanting this dependent on the math module,
# The following functions are solutions that work for me

def shuf(List):
    import random
    newList=List
    random.shuffle(newList)
    return newList

def flat(lis):
    flatList = []
    # Iterate with outer list
    for element in lis:
        if type(element) is list:
            # Check if type is list than iterate through the sublist
            for item in element:
                flatList.append(item)
        else:
            flatList.append(element)
    return flatList

def unflat(lis,cutOff):
    if len(lis) <= cutOff:
        return([lis])
    else:
        lisT = lis
        nestedList = []
        for j in range(int((len(lisT)-1)/cutOff)):
            newList = []
            for i in range(j*cutOff,j*cutOff+cutOff):
                newList.append(lisT[i*cutOff:(i+1)*cutOff])
            nestedList.extend(newList)
        for i in range(cutOff*int(len(lis))):
            try:
                nestedList.remove([])
            except:
                pass
        return(nestedList)

class Matrix:
    # Matrix Variable
    
    def __init__(self, data, Type, Name):
        self.data = data
        self.Type = [Type,Type]
        self.NAME = Name
    @classmethod
    def new(self, size):
        self.Type = [size,size]
        emptyRow = [0]*size
        inputData = [emptyRow]*size
        Final=Matrix(inputData,size,'')
        return(Final)
    def random(size, Range):
        """
        Creates a new matrix with random values in the range you supply (integers only)
        """
        import random
        theData = [0]*(size**2)
        for i in range(len(theData)):
            theData[i] = random.randint(Range[0],Range[1])
        Final=Matrix.matrixFromData(unflat(theData,size),size)
        return(Final)
    def matrixFromData(DATA,size):
        return(Matrix(DATA,size,''))
    def write(self):
        print("Matrix"+str(self.NAME)+": ")
        for i in range(self.Type[0]):
            print(self.data[i])
    def read(self):
        return(self.data)
    def readR(self, row):
       return(self.data[row-1])
    def readC(self, column):
        columnDat = []
        for i in range(1,self.Type[0]+1):
            curRow = self.data[i-1]
            curSpace = curRow[column-1]
            columnDat.append(curSpace)
        return(columnDat)
    def readPos(self, pos):
        posR = pos[0]
        posC = pos[1]
        rowP = self.readR(posR)
        if (posR == 0) or (posC == 0):
            return("-1")
        try:
            return(rowP[posC-1])
        except:
            return("-1")
    def getPos(self, value):
        """
        Returns every position in the matrix that contains the given value
        """
        length = self.Type[0]
        positions = []
        for i in range(length):
            posR = i
            for j in range(length):
                posC = j
                if self.readPos([posR+1,posC+1]) == value:
                    positions.append([posR+1,posC+1])
        if positions == []:
            return(None)
        else:
            return(positions)
    def replaceValue(self, value1, value2):
        """
        Replaces every mention of one value with another (value1 -> value2)
        """
        values = self.getPos(value1)
        for i in range(len(values)):
            self.modifyPos(values[i],value2)
    def modifyPos(self, pos, value):
        """
        Modifies the given position with the given value
        """
        posR = pos[0]
        posC = pos[1]
        rowN = (posR-1)*self.Type[0]
        Place = rowN+(posC-1)
        newDat = flat(self.data)
        newDat[Place] = value
        newDat = unflat(newDat,self.Type[0])
        self.data=newDat
    def ifPos(self, pos, value):
        """
        Returns True or False depending on if the given position has the given value
        """
        posc = self.readPos(pos)
        if posc == value:
            return(True)
        else:
            return(False)
    def readADJBoth(self, pos):
        List = ["NA"]*8
        Positions = [["NA","NA"]]*8
        k = 0
        for i in [-1,0,1]: # Top Row
            try:
                temp = self.readPos([pos[0]-1,pos[1]+i]) 
                if temp != "-1":
                    List[k] = temp
                    Positions[k] = [pos[0]-1,pos[1]+i]
                else:
                    List[k] = "NA"
            except:
                # print("still failed!")
                List[k] = "NA"
            k += 1
        for i in [-1,1]: # Middle Row
            try:
                temp = self.readPos([pos[0],pos[1]+i])
                if temp != "-1":
                    List[k] = temp
                    Positions[k] = [pos[0],pos[1]+i]
                else:
                    List[k] = "NA"
            except:
                List[k] = "NA"
            k += 1
        for i in [-1,0,1]: # Bottom Row
            try:
                temp = self.readPos([pos[0]+1,pos[1]+i])
                if temp != "-1":
                   List[k] = temp
                   Positions[k] = [pos[0]+1,pos[1]+i]
                else:
                    List[k] = "NA"
            except:
                List[k] = "NA"
            k += 1
        return([List,Positions])
    def readADJ(self, pos):
        """
        Returns a list of the adjacent 8 spaces around the given position
        [Top Left, Top Middle, Top Right, Middle Left, Middle Right, Bottom Left, Bottom Middle, Bottom Right]
        Returns "NA" as the index if the space doesn't exist
        """
        return(self.readADJBoth(pos)[0])
    def readADJPos(self, pos):
        """
        Returns a list of the positions of the adjacent 8 spaces around the given position
        [Top Left, Top Middle, Top Right, Middle Left, Middle Right, Bottom Left, Bottom Middle, Bottom Right]
        Returns "NA" as the index if the space doesn't exist
        """
        return(self.readADJBoth(pos)[1])
    def readTRD(self):
        """
        Returns the diagonal starting from the top and reading to the right
        """
        length = self.Type[0]
        diag = []
        for i in range(length):
            curRow = self.data[i]
            curPlace = curRow[i]
            diag.append(curPlace)
        return(diag)
    def readTLD(self):
        """
        Returns the diagonal starting from the top and reading to the left
        """
        length = self.Type[0]
        diag = []
        for i in range(length):
            it = abs(i-(length-1))
            curRow = self.data[i]
            curPlace = curRow[it]
            diag.append(curPlace)
        return(diag)
    def readBRD(self):
        """
        Returns the diagonal starting from the bottom and reading to the right
        """
        length = self.Type[0]
        diag = []
        for i in range(length):
            it = abs(i-(length-1))
            curRow = self.data[it]
            curPlace = curRow[i]
            diag.append(curPlace)
        return(diag)
    def readBLD(self):
        """
        Returns the diagonal starting from the bottom and reading to the left
        """
        length = self.Type[0]
        diag = []
        for i in range(length):
            it = abs(i-(length-1))
            curRow = self.data[it]
            curPlace = curRow[it]
            diag.append(curPlace)
        return(diag)
    def add(self,matrix2):
        """
        Changes the data of the matrix by adding the data of another
        """
        flat1 = flat(self.data)
        flat2 = flat(matrix2.data)
        if self.Type == matrix2.Type:
            newList = []
            for i in range(len(flat1)):
                newList.append(flat1[i]+flat2[i])
            self.data=unflat(newList,self.Type[0])
        else:
            return(False)
    def sum(matrix1, matrix2):
        """
        Returns the added data of two matricies
        """
        if matrix1.Type == matrix2.Type:
           e1 = Matrix.matrixFromData(matrix1.data,matrix1.Type[0])
           e2 = matrix2
           e1.add(e2)
           return(e1)
        else:
            return(False)
    def multiply(self, matrix2):
        """
        Changes the data of the matrix by adding the data of another
        """
        if self.Type[1] == matrix2.Type[0]:
            nRows = []
            for i in range(1,self.Type[0]+1):
                nRow = []
                for j in range(1,self.Type[1]+1):
                    curRow = self.readR(i)
                    curColumn = matrix2.readC(j)
                    curSum = 0
                    for v in range(len(curRow)):
                        curSum += curRow[v]*curColumn[v]
                    nRow.append(curSum)
                nRows.append(nRow)
            self.data=nRows
        else:
            return(False)
    def product(self, matrix1, matrix2):
        """
        Returns the multiplied data of two matricies
        """
        if matrix1.Type[1] == matrix2.Type[2]:
           e1 = Matrix.matrixFromData(matrix1.data,matrix1.Type[0])
           e2 = matrix2
           e1.multiply(e2)
           return(e1)
    def squared(self):
        """
        Changes the data of the matrix by squaring it
        """
        return(self.multiply(self))
    def square(matrix1):
        """
        Returns the squared data of the given matrix
        """
        e1 = Matrix.matrixFromData(matrix1.data,matrix1.Type[0])
        e1.multiply(e1)
        return(e1)
    def scramble(self):
        """
        Returns the data of the matrix with randomized locations for all values
        """
        temp = Matrix.new(self.Type[0])
        unformattedData = flat(self.read())
        unformattedData = shuf(unformattedData)
        length = self.Type[0]
        nums = 0
        for i in range(length):
            posR = i
            for j in range(length):
                posC = j
                temp.modifyPos([posR+1,posC+1],unformattedData[nums])
                nums += 1
        self.data = temp.data
        return(self)
    def setFirstN(self, N, number):
        """
        Sets the first N entries of the matrix to the given number
        """
        # NOT DONE
        unformattedData = flat(self.read())
        for i in range (N):
            unformattedData[i] = number
        unformattedData = unflat(unformattedData,self.Type[0])
        self.data = unformattedData
        return(self)
    def name(self, Name):
        """
        Renames the given matrix
        """
        self.NAME = " "+str(Name)
    def arrayToMatrix(array, size):
        ar1 = unflat(array,size)
        ma1 = Matrix.new(size)
        ma1.data = ar1
        return(ma1)
    def i():
        i2 = Matrix.new(2)
        i2.modifyPos([1,2],-1)
        i2.modifyPos([2,1],1)
        return(i2)
    def reverse(self):
        dat = reverse(flat(self.data))
        self.data = unflat(dat,self.Type[0])
    def re(x):
        re = Matrix.new(2)
        re.modifyPos([1,1],x)
        re.modifyPos([2,2],x)
        return(re)
    def im(x):
        im = Matrix.new(2)
        im.modifyPos([1,2],-x)
        im.modifyPos([2,1],x)
        return(im)

def lg10(x):
    log_b = 0
    while x > int(round(10 ** (log_b))):
        log_b += 0.1
    return int(round(log_b))

def floor(x):
    stc = str(f'{x:.303f}')
    stc = stc.split(".")
    return(int(stc[0]))

def reverse(x):
    if type(x) == list:
        return(x[::-1])
    else:
        return(str(x)[::-1])

# Abbreviation Dictionary Variable and Function

abbrevs={
                0:"",
                3:"k",
                6:"m",
                9:"b",
                12:"t",
                15:"qd",
                18:"qn",
                21:"sx",
                24:"sp",
                27:"oc",
                30:"n",
                33:"dc",
                36:"ud",
                39:"dd",
                42:"td",
                45:"qtd",
                48:"qnd",
                51:"sxd",
                54:"spd",
                57:"ocd",
                60:"nd",
                63:"vt",
                66:"uv",
                69:"dv",
                72:"tv",
                75:"qdv",
                78:"qnv",
                81:"sxv",
                84:"spv",
                87:"ocv",
                90:"nv",
                93:"tg",
                96:"ut",
                99:"dt",
                102:"ttg",
                105:"qdt",
                108:"qnt",
                111:"sxt",
                114:"spt",
                117:"oct",
                120:"nt",
                123:"qdg",
                126:"uqd",
                129:"dqd",
                132:"tqd",
                135:"qdqd",
                138:"qnqd",
                141:"sxqd",
                144:"spqd",
                147:"ocqd",
                150:"nqd",
                153:"qng",
                156:"uqn",
                159:"dqn",
                162:"tqn",
                165:"qdqn",
                168:"qnqn",
                171:"sxqn",
                174:"spqn",
                177:"ocqn",
                180:"nqn",
                183:"sxg",
                186:"usx",
                189:"dsx",
                192:"tsx",
                195:"qdsx",
                198:"qnsx",
                201:"sxsx",
                204:"spsx",
                207:"ocsx",
                210:"nsx",
                213:"spg",
                216:"usp",
                219:"dsp",
                222:"tsp",
                225:"qdsp",
                228:"qnsp",
                231:"sxsp",
                234:"spsp",
                237:"ocsp",
                240:"nsp",
                243:"ocg",
                246:"uoc",
                249:"doc",
                252:"toc",
                255:"qdoc",
                258:"qnoc",
                261:"sxoc",
                264:"spoc",
                267:"ococ",
                270:"noc",
                273:"ng",
                276:"un",
                279:"dn",
                282:"tn",
                285:"qdn",
                288:"qnn",
                291:"sxn",
                294:"spn",
                297:"ocn",
                300:"nn",
                303:"c"
            }

def Abbrev(num):
    if type(num) == str:
        return(False)
    else:
        rnum = round(num)
        pdnum = num - floor(num)
        dplaces = 0
        places = 0
        if rnum == 0:
            ohNo = True
        else:
            places = round(lg10(rnum))
        if pdnum == num:
            return(rnum)
        else:
            if places < 3:
                return(rnum)
            else:
                On3 = 3*floor(places/3)
                letter = str(abbrevs[On3])
                nnum = rnum/(10**On3)
                return(str(round(nnum,2))+letter)