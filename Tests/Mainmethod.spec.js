const {test,expect} = require('@playwright/test')
const fs = require('fs').promises;
const paths = require('path')
const Login = require('../Baselibrary/Login')
const Form1 = require('../pages/Form1')


async function getDataFromJSON(filePath) {
    const data = await fs.readFile(filePath , 'utf8')
    return JSON.parse(data)
    
}

test.describe.serial('Main method',()=>{
    let userData;

    test.beforeEach(async({page})=>{
        const data =await getDataFromJSON(paths.join(__dirname, '../input/inputdata.json'));
        userData = data[0]


        const login = new Login(page)
        await login.loginpage(userData)
    })



    test('Test case 1',async({page})=>{
        const form1 = new Form1(page)
        await form1.Form1page(userData)
    })

    test('Test case 2',async({page})=>{
        const multiselection1 = new Form1(page)
        await multiselection1.Multiselection1(userData)
    })

    test('Test case 3',async({page})=>{
        const multiselection2 = new Form1(page)
        await multiselection2.Multiselection2(userData)
    })

})





