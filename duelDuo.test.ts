
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(' "Draw" button displays choices section', async () => {
    await driver.findElement(By.id('draw')).click()
    const choicesSection = await driver.findElement(By.id('choices'))
    const displayed = await choicesSection.isDisplayed()
    expect(displayed).toBe(true)
})

test(' "Remove from Duo" button puts robot back into choices section', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const playerDuoSection = await driver.findElement(By.id('player-duo'))
    const selectedRobotName = await driver.findElement(By.xpath('//div[@id="player-duo]/div/h3')).getText()
    await driver.findElement(By.xpath('//button[text()="Remove from Duo"]')).click()
    const returnedRobot = await driver.findElement(By.xpath('//div[@id="choices"]/div/h3[contains(text(), ' + selectedRobotName + ')]'))
    const displayed = await returnedRobot.isDisplayed()
    expect(displayed).toBe(true)
})


// My Tests ... did not work 
//          my tests :c

// test('draw', async () => {
//     await drawFive(driver)
// })

// test('Add to duo', async () => {
//     await chooseBot(driver)
// })

// const drawFive = async (driver) => {

//     await driver.findElement(By.xpath('//button')).click()
//     const draw = await driver.findElement(By.xpath('//choices'))

// }

// const chooseBot = async (driver) => {

//     await driver.findElement(By.xpath('//button')).click()
//     const choose = await driver.findElement(By.xpath('//player-duo'))
// }

// module.exports = {
//     drawFive,
//     chooseBot
// }