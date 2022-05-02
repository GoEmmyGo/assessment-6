
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

// Check that clicking the Draw button displays the div with id = “choices”

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

test('clicking Draw button displays div with id = choices', async () => {

    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    driver.sleep(3000)
    const drawButton = await choices.isDisplayed()
    driver.sleep(3000)
    expect(drawButton).toBeTruthy
})

test('clicking Add to Duo button displays div id = player-duo', async () => {

    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    driver.sleep(3000)
    const addToDuoButton = await playerDuo.isDisplayed()
    driver.sleep(3000)
    expect(addToDuoButton).toBeTruthy
})

test('clicking Remove from Duo button rediplays div id = choices', async () => {
    
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    await driver.findElement(By.xpath('(//button[text()="Remove from Duo"])')).click()
    const putBotBack = await driver.findElement(By.xpath('(//div[@class="bot-card outline"][5])'))
    driver.sleep(3000)
    const removeFromDuoButton = await putBotBack.isDisplayed()
    driver.sleep(3000)
    expect(removeFromDuoButton).toBeTruthy
})




