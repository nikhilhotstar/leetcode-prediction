require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
const start= async function (){
    const baseUrl="https://leetcode.com/contest/globalranking/"
    
    for(let i=0;i<2000;i++){
        console.time("exec")
        let a= await driver.get(baseUrl+(i+1))
        await sleep(3000)
        let b=await driver.findElements(webdriver.By.className("ranking-row"))

        console.log(await driver.getCurrentUrl(), b.length)
        for(let element in b){
            let text= await b[element].getText()
            console.log(text)
        }
        console.timeEnd("exec")
    }
    driver.close()
}

start()