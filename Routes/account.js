import express from 'express';
import fs from 'fs';

const dataPath ='./UserDetails/useraccount.json';
const router=express.Router();

//util functions for loading and saving datas from and to the file
const saveAccountData =(data)=>{
    const stringifyData =JSON.stringify(data);
    fs.writeFileSync(dataPath,stringifyData);
}

const getAccountData =()=>{
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}

//Show all user accounts
// router.get('/account',(req,res)=>{
//     fs.readFile(dataPath,'utf8',(err,data)=>{
//         if(err{
//             throw err;
//         })

//         res.send(JSON.parse(data))
//     });
// });

//Create new account
router.post('/account/addaccount',(req,res)=>{
    const existAccounts = getAccountData();
    const newAccountId = Math.floor(100000 + Math.random() * 900000); //set id

    existAccounts[newAccountId] = req.body; //wait for inputing data

    saveAccountData(existAccounts);
    res.send({success: true, msg: 'account data added successfully'});
});

//Read- get all accounts from the json file 
router.get('/account/list',(req,res)=>{
    const accounts=getAccountData();
    res.send(accounts);
});


//Update account
router.put('/account/:id', (req, res) => {
    const existAccounts = getAccountData();
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const accountId = req.params['id'];
      existAccounts[accountId] = req.body;
      saveAccountData(existAccounts);
      res.send(`accounts with id ${accountId} has been updated`)
    }, true);
  });

//Delete account
router.delete('/account/delete/:id', (req, res) => {
    const existAccounts = getAccountData();
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const userId = req.params['id'];
      delete existAccounts[userId]; 
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`)
    }, true);
  })

export default router;



