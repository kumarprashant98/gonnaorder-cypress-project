export class CatalogPO {
    catalogText = "//div[contains(text(),'Catalog')]"
    catalogButton = "[value='Catalog']"
    addCategoryButton = "//button[contains(text(),'Add Category')]"
    /**
     * Get Catalog Text
     * @returns Catalog Text
     */
    getCatalogText() {
        return cy.locator(this.catalogButton)
    }

    /**
     * Click on Add Category Button
     */
    clickOnAddCategoryButton() {
        cy.locator(this.addCategoryButton).click()
    }
}                                                                                                                                                                                                         