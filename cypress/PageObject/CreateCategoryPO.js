import { cypresshelper } from "../CypressHelper/cypresshelper"
import { addcategorydata } from "../datafactory/addcatagorydata";

const dropdownList = [];

export class CreateCategoryPO {
    createCategoryText = "//span[contains(text(),'Create Category')]"
    nameTextBox = "#offerName"
    shortDescriptionTextBox = "#shortDesc"
    visibleToggleButton = "//button[contains(@class,'mdc-switch')]"
    imageUpload = "#uploadImage"
    saveAndContinueButton = "//button[contains(text(),'Save & Continue')]"
    cancelButton = "//a[contains(text(),'Cancel')]"
    addCategorySuccessMessage = "[role='alert']"
    visibleDropdown = "#availability"
    dropdownlist = "//option[@class='ng-star-inserted']"
    helper = new cypresshelper();
    /**
     * Get Create Category Text
     * @returns Create Category text
     */
    getCreateCategoryText() {
        return cy.locator(this.createCategoryText)
    }

    /**
     * Add new Category
     * @param {addcategorydata} addcategorydata 
     */
    addNewCategory(addcategorydata) {
        cy.locator(this.nameTextBox).type(addcategorydata.name)
        cy.locator(this.shortDescriptionTextBox).type(addcategorydata.shortdescription)
        cy.locator(this.visibleToggleButton).click().click();
        cy.locator(this.dropdownlist).each(element => {
            cy.wrap(element).invoke('text').then(text => {
                dropdownList.push(text);
            });
        }).then(() => {
            const randomLocationName = this.helper.getRandomStringFromList(dropdownList);
            cy.locator(this.visibleDropdown).select(randomLocationName);
        });
        cy.locator(this.imageUpload).attachFile(addcategorydata.artistimage)
        cy.locator(this.saveAndContinueButton).click()
    }

    /** 
     * Get success message
     */
    getSuccessMessage() {
        return cy.locator(this.addCategorySuccessMessage)
    }

}




