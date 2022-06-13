class Login {
    btnLogin() {
        return cy.visit('https://unsplash.com/login')
    }

    email() {
        return cy.get('input[id="user_email"]')
    }
    password() {
        return cy.get('input[id="user_password"]')
    }
    clickBtnLogin() {
        return cy.get('input[type="submit"]')
    }
}
export default Login
