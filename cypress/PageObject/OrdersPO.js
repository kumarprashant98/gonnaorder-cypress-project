export default class OrdersPO {
  ordersText = "//div[contains(text(),'Orders')]"
  catalogButton = "[href='/manager/stores/4748/catalog']"
  addNewScheduleButton = "//button[contains(text(),'Add New Schedule')]"

  /**
   * Get Orders Text
   * @returns Orders Text
   */
  getOrdersText() {
    return cy.locator(this.ordersText)
  }

  /**
   * Click on Catalog Button
   */
  clickOnCatalogButton() {
    cy.locator(this.catalogButton).click()
  }

  /**
   * Click on Add New Schedule Button
   */
  clickOnAddNewScheduleButton() {
    cy.locator(this.addNewScheduleButton).click()
  }
}