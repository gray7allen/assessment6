
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

test('draw', async () => {
    await drawFive(driver)
})

test('Add to duo', async () => {
    await chooseBot(driver)
})

const drawFive = async (driver) => {

    await driver.findElement(By.xpath('//button')).click()
    const draw = await driver.findElement(By.xpath('//choices'))

}

const chooseBot = async (driver) => {

    await driver.findElement(By.xpath('//button')).click()
    const choose = await driver.findElement(By.xpath('//player-duo'))
}

module.exports = {
    drawFive,
    chooseBot
}