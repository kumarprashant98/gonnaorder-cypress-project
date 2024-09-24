export default class HomePO {
    storeListHeader = "//div[contains(text(),'Stores List')]"
    storeListTable = ".table tbody"

    /**
     * Get Stores List Text
     * @returns Store List Text
     */
    getStoresListText() {
        return cy.locator(this.storeListHeader)
    }

    /**
     * Click on the Store name
     * @param {storename} storename 
     */
    clickOnTheStoreName(storename) {
        cy.locator(this.storeListTable).contains('td', storename).should('be.visible').click()
    }
}
