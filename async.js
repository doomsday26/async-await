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
   console.log(`husband: we shold go in you ${ticket}` );
   console.log('wife: no i am hungry');
   let popcorn= await getPopcorn;

console.log(`husband:i got popcorn ${popcorn} `);
console.log('husband: should  we go in');
console.log('wife: i need butter in my popcorn');

let butter = await addbutter;
console.log(`i got some ${butter} on popcorn`);
console.log('wife: lets go');
   
let coldrink = await getColdrinks;
console.log(`husnand: here's the ${coldrink} `);

return ticket;

}

preMovie().then((m)=>console.log(m) );





console.log('person 4 shows ticket');
console.log('person 5 shows ticket');