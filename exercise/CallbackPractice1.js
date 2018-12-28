const fs = require('fs');
const util = require('util');
const reading = util.promisify(fs.readFile);
console.log('시작');
// fs.readFile('readme1', (err, data)=>{
//   if(err){
//     throw err;
//   }
//   console.log('1번', data.toString());
//   fs.readFile('readme2', (err, data)=>{
//     if(err){
//       throw err;
//     }
//     console.log('2번', data.toString());
//     fs.readFile('readme3', (err, data)=>{
//       if(err){
//         throw err;
//       }
//       console.log('3번', data.toString());
//     });
//   });
// });

// function readChain(){
//   reading('readme1')
//   .then((data)=>{
//     console.log(data.toString());
//     return reading('readme2');
//   })
//   .then((data)=>{
//     console.log(data.toString());
//     return reading('readme3');
//   })
//   .then((data)=>{
//     console.log(data.toString());
//   })
//   .catch((error)=>{
//     throw error;
//   });
// }

async function readChain(){
  try{
    let data = await reading('readme1');
    console.log(data.toString());
    data = await reading('readme2');
    console.log(data.toString());
    data = await reading('readme3');
    console.log(data.toString());
  }
  catch(error){
    throw error;
  }
}

readChain();
console.log('끝');
