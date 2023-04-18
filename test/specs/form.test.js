import FormPage from '../pageobjects/form.page.js'

describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await FormPage.open();
        await browser.pause(1000)
        await expect(FormPage.header).toHaveTextContaining(     //checks id
            'Form validation');
    })

    it('should display appropriate message when submitted without meeting the minimum criteria', async () => {
        await FormPage.submit.click();
        await expect(FormPage.errorText).toHaveTextContaining(
            'The form could not be submitted because 9 errors were found.'
        );
    })
});