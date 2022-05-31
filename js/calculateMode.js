let entryCountObj ={}
let max = 0
let ansArr = []

const genObj = (arr) => {
    arr.forEach(element => {
        //console.log(element)
        if(entryCountObj.hasOwnProperty(element)){
            entryCountObj[element] += 1
            //console.log(ansObject)
        } else{
            entryCountObj[element] = 1
        }
    });
    //console.log(entryCountObj)
    return entryCountObj
}

//next step is to determine the max value of values { '1': 2, '2': 2 }
const getMax = (entryCountObj) => {max = Math.max(... Object.values(entryCountObj))
    return max
}
//console.log(getMax({ '1': 2, '2': 2 }))


const calculateMode = (arr) => {
    //let max = 0
    //let entryCountObj ={}
    //genObj(arr)
    getMax(genObj(arr))
    //console.log(getMax(genObj(arr)))
    //console.log(entryCountObj)
    //getMax(entryCountObj)
    //console.log(max)
    for(let i = 0; i < Object.values(entryCountObj).length; i++){
        //console.log(Object.values(entryCountObj))
        if(Object.values(entryCountObj)[i] == max){
            ansArr.push(Object.keys(entryCountObj)[i])
        }
    }
    //console.log(max,ansArr,entryCountObj)
    return ansArr


// first step will be to generate an object with the array entries as keys, and count of entries as values

}
//console.log(calculateMode(["fart","poop", "fart", "fart", "queef","queef","queef"]))
