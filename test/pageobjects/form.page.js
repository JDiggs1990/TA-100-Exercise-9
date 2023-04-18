import Page from "./page.js";
class FormPage extends Page {
     //define multiple selectors using getter methods
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }
     // Email Selector
     get inputEmail() {
          return $("#mail"); //uses CSS query selector
     }
    get submit()
    {
        return $('input.btn:nth-child(9)');
        //#validation-example > input.btn.btn-primary
    }
    get errortext()
    {
        //return $('#errors-validation-example > h2:nth-child(1)'); //wrong?
        //return $('//*[@id="errors-validation-example"]/h2') xpath targeting h2 header
        //return $('#errors-validation-example > h2')  selector
        return $('/html/body/main/section[2]/div/form/section/h2')  //full xpath, also fails, keeps returning undefined
    
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to enter in a valid email
     */
    async emailInput() {
        await this.emailInput.setValue(input);
        await this.submit.click();
    }
     /**
      * overwrite specific options to adapt it to page object
      */
     open() {
          return super.open('');
     }
}
export default new FormPage();