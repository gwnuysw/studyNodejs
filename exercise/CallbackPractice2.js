const fs = require('fs');
const util = require('util');


// fs.access('./Javascript/exercise/folder', fs.constants.F_OK|fs.constants.R_OK|fs.constants.W_OK, (err) =>{
//   if(err){
//     if(err.code === 'ENOENT'){
//       console.log('폴더 없음');
//       fs.mkdir('./Javascript/exercise/folder', (err)=>{
//         if(err){
//           console.log(err);
//         }
//         console.log('폴더 만들기 성공');
//         fs.open('./Javascript/exercise/folder/file.js', 'w', (err, fd)=>{
//           if(err){
//             throw err;
//           }
//           console.log('빈 파일 만들기 성공', fd);
//           fs.rename('./Javascript/exercise/folder/file.js', './Javascript/exercise/folder/newfile.js', (err)=>{
//             if(err){
//               throw err;
//             }
//             console.log('이름 바꾸기 성공');
//           });
//         });
//       });
//     }
//     else{
//       throw err;
//     }
//   }
//   else{
//     console.log('이미 폴더 있음');
//   }
// });
const access = util.promisify(fs.access);
const mkdir = util.promisify(fs.mkdir);
function createFolderFile(){
  let promise = new Promise((resolve, reject) =>{
    fs.access('./Javascript/exercises/folder', fs.constants.F_OK|fs.constants.R_OK|fs.constants.W_OK, (err)=>{
      if(err){
        if(err.code === 'ENOENT'){
          resolve();
        }
        else{
          throw err;
        }
      }
      else{
        console.log('이미 폴더 있음');
      }
    });
  });
  access('./Javascript/exercise/folder', fs.constants.F_OK|fs.constants.R_OK|fs.constants.W_OK)
  .then(()=>{
    console.log('이미 폴더 있음');
  })
  .then(()=>{
    console.log('폴더 만들기 성공');
  })
  .catch((err)=>{
    if(err.code === 'ENOENT'){
      console.log('폴더 없음');
      return mkdir('./Javascript/exercise/folder');
    }
  });
};

createFolderFile();
