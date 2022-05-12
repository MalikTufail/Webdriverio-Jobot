// import signup from '../pages/signUp';
const signup = require('../pages/signUp');
context('sign up', () => {
    it('Verify that Email field should not show the validation message when a user enter an email in the email field', async () => {
        await browser.url('/become-a-client');
        await signup.type('input[aria-label="Work Email Address"]', 'abc@gmail.com')
        await browser.pause(5000);
        await signup.button('button.q-btn--standard')
        await browser.pause(5000);
    })
    it('verify the validation message of the Email field', async () => {
        await browser.url('/become-a-client');
        signup.type('input[aria-label="Work Email Address"]', '')
        await browser.pause(5000)
        signup.button('button.q-btn--standard')
        await browser.pause(5000)
        signup.validation('div.q-field__messages')
    })
})