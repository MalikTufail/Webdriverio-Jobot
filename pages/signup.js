class SignUp {
    async type (selector, value) {
        return await $(selector).setValue(value)
    }
    async button (selector) {
        return await $(selector).click()
    }
    async validation (selector) {
        return await $(selector).getText()
    }
}
// export default new SignUp()
module.exports = new SignUp();