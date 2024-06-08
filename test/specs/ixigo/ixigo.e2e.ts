import HomePage from '../../pageobjects/ixigo/homePage.page.js'

describe('Ixigo Application', () => {
    before(async() => {
        await browser.url('https://www.ixigo.com/')
        await HomePage.roundTripTab.waitForDisplayed()
    })

    it('Search Round Trip flight', async () => {
        // Select origin airport
        await HomePage.roundTripTab.click()
        await HomePage.fromInput.waitForClickable()
        await HomePage.fromInput.click()
        const fromAirport = await HomePage.originAirports[0];
        var fromAirportText = await fromAirport?.getText();
        await fromAirport?.click()
        await browser.pause(3000)
        const isDestinationDropdownOpen = await HomePage.destinationAirports[0].isDisplayed()
        
        // Select destination airport
        if (isDestinationDropdownOpen) {
            await HomePage.destinationAirports[0].waitForDisplayed()
            await expect(HomePage.destinationAirports[0]).toBeDisplayed()
        } else {
            await HomePage.toInput.waitForClickable()
            await HomePage.toInput.click()
        }
        const toAirport = await HomePage.destinationAirports[1]
        const toAirportText = await toAirport?.getText()
        await toAirport?.waitForClickable()
        await toAirport?.click()

        // Select start and end date
        await HomePage.startDate.waitForDisplayed()
        await HomePage.startDate.click()
        await HomePage.endDate.waitForDisplayed()
        await HomePage.endDate.click()

        // Search
        await HomePage.buttonSearch.waitForClickable()
        await HomePage.buttonSearch.click()
        await browser.pause(3000)
        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toContain(fromAirportText)
        await expect(currentUrl).toContain(toAirportText)
    })
})

