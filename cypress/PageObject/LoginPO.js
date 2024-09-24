export default class LoginPO {
   loginHeader = "h1.text-blue"
   emailTextBox = "#login-email-field"
   passwordTextBox = "#login-password-field"
   loginButton = "#login-submit-button"

   /**
    * Get Login Header Text
    * @returns Login Text
    */
   getLoginHeaderText() {
      return cy.locator(this.loginHeader)
   }

   /**
    * Enter Login Details
    * @param {logindata} logindata 
    */
   enterLoginDetails(logindata) {
      cy.locator(this.emailTextBox).type(logindata.email)
      cy.locator(this.passwordTextBox).type(logindata.password)
      cy.locator(this.loginButton).click()
   }
}


