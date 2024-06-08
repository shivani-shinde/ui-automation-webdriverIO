import Page from "../page.js";

class HomePage extends Page{
    public get fromInput() {
        return $(`[data-testid="originId"]`);
    }

    public get toInput() {
        return $(`[data-testid="destinationId"]`);
    }
    public get startDate() {
        return $(`//button[contains(@class, "calendar__tile--active")]`);
    }
    public get endDate() {
        return $(`//button[contains(@class, "calendar__tile--active")]/following-sibling::button[1]`);
    }
    public get roundTripTab() {
        return $(`//button[@role="tab" and text()="Round Trip"]`);
    }
    public get buttonSearch() {
        return $(`//button[text()='Search']`);
    }
    public get originAirports() {
        return $$(`//p[@data-testid="originId"]/ancestor::div/following-sibling::div//p[text()='Popular Airports']/parent::div/following-sibling::div//li//span[contains(@class, 'text-primary')]`);
    }
    public get destinationAirports() {
        return $$(`//p[@data-testid="destinationId"]/ancestor::div/following-sibling::div//p[text()='Popular Airports']/parent::div/following-sibling::div//li//span[contains(@class, 'text-primary')]`);
    }
    get popularText() {
        return $(``)
    }
} 
export default new HomePage();