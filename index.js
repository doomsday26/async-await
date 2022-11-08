console.log('personn1 shows ticket');
console.log('personn2 shows ticket');

const promiseTicket=new Promise((resolve,reject)=>{
    setTimeout(() => {
           resolve('ticket')
    }, 3000);
})
const getPopcorn= promiseTicket.then((t)=>{  
console.log('husband: we shold go in');
console.log('wife: no i am hungry');
return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`)

})} )
const getButter=  getPopcorn.then( (t)=>{
console.log('husband:i got popcorn');
console.log('husband: should  we go in');
console.log('wife: i need butter in my popcorn');
return new Promise((resolve, reject) => {
    resolve(`${t} butter`)
})} )
const getColdrink =  getButter.then((t)=>{
    return new Promise((resolve, reject) => {
        console.log('i got the coldrink');
        resolve (`${t} coldrink`)
    }) });

    getColdrink.then(t =>{console.log(t);})
console.log('person 4 shows ticket');
console.log('person 5 shows ticket');