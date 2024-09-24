import { CatalogPO } from "../PageObject/CatalogPO";
import { CreateCategoryPO } from "../PageObject/CreateCategoryPO";
import { addcategorydata } from "../datafactory/addcatagorydata";
import LoginPO from "../PageObject/LoginPO";
import HomePO from "../PageObject/HomePO";
import OrdersPO from "../PageObject/OrdersPO";
import { pageheaderdata } from "../datafactory/pageheaderdata";


beforeEach(() => {
    const login = new LoginPO();
    const headertextdata = new pageheaderdata().getPageHeader()
    const constants = new Constants()

    cy.log("Step 1: Navigate to the url")
    cy.visit(Cypress.env("baseUrl"));

    // cy.fixture("Admin").as("data"); --- Knowledge purpose

    cy.log("Step 2: Verify that user navigated to home page")
    cy.fixture('Admin').then((data) => {
        login.getLoginHeaderText().then(function (x) {
            let header = x.text().trim()
            expect(header).to.equal(headertextdata.loginHeader)
        })

        cy.log("Step 3: Enter valid login details")
        login.enterLoginDetails(data)
    })
})

describe('Gonna order Test', () => {
    it('Verify that a category is added successfully', () => {

        const homepage = new HomePO();
        const orders = new OrdersPO();
        const catalog = new CatalogPO();
        const createCatalog = new CreateCategoryPO();
        const categorydata = new addcategorydata().addCategoryDetails()
        const headertextdata = new pageheaderdata().getPageHeader()

        cy.log("Step 1: Verify that user navigated to Home page")
        homepage.getStoresListText().then(function (x) {
            let storetext = x.text().trim()
            expect(storetext).to.equal(headertextdata.storesListText)
        })

        cy.log("Step 2: Click on the store name")
        homepage.clickOnTheStoreName(headertextdata.storename)
        orders.getOrdersText().then(function (x) {
            let ordertext = x.text().trim()
            expect(ordertext).to.equal(headertextdata.ordersText)
        })

        cy.log("Step 3: Click on the Catalog button")
        orders.clickOnCatalogButton()
        cy.wait(3000)

        cy.log("Step 4: Verify that user navigated to catalog page")
        catalog.getCatalogText().then(function (x) {
            let catalogtext = x.text().trim()
            expect(catalogtext).to.equal(headertextdata.catalogText)
        })

        cy.log("Step 5: Click on Add Category Button")
        catalog.clickOnAddCategoryButton()

        cy.log("Step 6: Verify that user navigated to create catalog page")
        createCatalog.getCreateCategoryText().then(function (x) {
            let createcatalogtext = x.text().trim()
            expect(createcatalogtext).to.equal(headertextdata.createCategoryText)
        })

        cy.log("Step 7: Add new Category in Catalog")
        createCatalog.addNewCategory(categorydata)

        cy.log("Step 8: Verify that success message displayed")
        createCatalog.getSuccessMessage().then(function (x) {
            let successMessageText = x.text().trim()
            expect(successMessageText).to.equal("Save category success")
        })
    })


})

