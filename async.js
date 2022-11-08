console.log('personn1 shows ticket');
console.log('personn2 shows ticket');

const preMovie=async ()=>{
     const promiseTicket=new Promise((resolve,reject)=>{
        setTimeout(() => {
               resolve('ticket')
        }, 3000);
    });

const getPopcorn= new Promise((resolve, reject) => {
    resolve('popcorn')
})
const addbutter= new Promise((resolve, reject) => {
    resolve('butter');
})

const getColdrinks= new Promise((resolve, reject) => {
    resolve('coldrinks')
})


let ticket= await promiseTicket;


let[popcorn,butter,coke]  = await Promise.all([getPopcorn,addbutter,getColdrinks])

console.log(popcorn,butter,coke);


return ticket;

}

preMovie().then((m)=>console.log(m) );





console.log('person 4 shows ticket');
console.log('person 5 shows ticket');