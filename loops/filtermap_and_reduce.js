//filter :- returns the values

let arr = [1,2,3]
// const newNums = arr.filter((nums) => nums >4)
// console.log(newNums);

// const newNums = arr.filter((nums) => {return nums >4})
// console.log(newNums);
// 

// const books =[
    // {title: 'Book one',genre: 'Fiction',publish: 1981,edition: 2004},
    // {title: 'Book two',genre: 'history',publish: 1982,edition: 2005},
    // {title: 'Book three',genre: 'anime',publish: 1983,edition: 2006},
    // {title: 'Book four',genre: 'geography',publish: 1984,edition: 2007},
    // {title: 'Book five',genre: 'history',publish: 1985,edition: 2008},
    // {title: 'Book six',genre: 'science',publish: 1986,edition: 2009},
    // {title: 'Book seven',genre: 'science',publish: 1987,edition: 2010},
    // {title: 'Book eight',genre: 'dictonary',publish: 1988,edition: 2011},
    // {title: 'Book nine',genre: 'anime',publish: 1989,edition: 2012},
// ]
// const newbook = books.filter((bk) => bk.genre == 'history')
// console.log(newbook);

//++++++++++++++++++++++++++  chaning  +++++++++++++++++++++
// const numbers = arr
//     .map((num) => num*10)
//     .map((num) => num +1)
//     .filter((num) => num >= 40)

// console.log(numbers)

//++++++++++++++++++++++++++  Reduce   ++++++++++++++++++

// const myTotal = arr.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and current val: ${currval}`)
//     return acc + currval
// }, 0) //initial val for accumlator
// console.log(myTotal)

const total = arr.reduce((acc,currentval) => 
{return acc + currentval } ,0 
) 
console.log(total)




