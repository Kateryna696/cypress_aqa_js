/// <reference types="cypress" />

const { randomInt } = require("crypto");

describe('Registration Form Tests', () => {
    const baseUrl = 'https://qauto.forstudy.space/';
    const randomInt = Math.floor(Math.random() * 10000);
    const uniqueEmail = `kustova.kate+${randomInt}@gmail.com`; 
    const password='Kat12345';
  
    beforeEach(() => {
        cy.visit(baseUrl, {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
         })
      cy.get('.hero-descriptor_btn.btn.btn-primary').click(); 
    });
    
    describe('Validations for field Name', () => {
    
        it('Error si shown for empty field, border color red, button Register is disabled', () => {
        cy.get('#signupName').as('Name').focus();
        cy.get('@Name').blur();
        cy.get('.invalid-feedback').should('contain', 'Name required');
        cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
       
       });
        it('Errors are shown for wrong length, border color red, button Register is disabled' , () => {
        cy.get('#signupName').as('Name').type('A'); // 1 char
        cy.get('@Name').blur();
        cy.get('.invalid-feedback').should('contain', 'Name has to be from 2 to 20 characters long');
        cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        
        cy.get('@Name').clear().type('qwertyuiopasdfghjklzx'); //21 char
        cy.get('@Name').blur();
        cy.get('.invalid-feedback').should('contain', 'Name has to be from 2 to 20 characters long');
        cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });

        it('Errors is shown for wrong data, border color red, button Register is disabled' , () => {
      
        cy.get('#signupName').as('Name').clear().type('John$'); // symbols
        cy.get('@Name').blur();
        cy.get('.invalid-feedback').should('contain', 'Name is invalid');
        cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('.btn.btn-primary', 'Register').should('be.disabled');

        cy.get('@Name').clear().type('Саша'); // not english
        cy.get('@Name').blur();
        cy.get('.invalid-feedback').should('contain', 'Name is invalid');
        cy.get('@Name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
    
        });
    });
    describe('Validations for field Last Name', () => {

        it('Error si shown for empty field, border color red, button Register is disabled', () => {
            cy.get('#signupLastName').as('LastName').focus();
            cy.get('@LastName').blur();
            cy.get('.invalid-feedback').should('contain', 'Last name required');
            cy.get('@LastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
        it('Errors are shown for wrong length, border color red, button Register is disabled' , () => {

            cy.get('#signupLastName').as('LastName').type('A'); // 1 char
            cy.get('@LastName').blur();
            cy.get('.invalid-feedback').should('contain', 'Last name has to be from 2 to 20 characters long');
            cy.get('@LastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
            
            cy.get('@LastName').clear().type('qwertyuiopasdfghjklzx'); //21 char
            cy.get('@LastName').blur();
            cy.get('.invalid-feedback').should('contain', 'Last name has to be from 2 to 20 characters long');
            cy.get('@LastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
     
        it('Errors is shown for wrong data, border color red, button Register is disabled' , () => {
            cy.get('#signupLastName').as('LastName').clear().type('John$'); // symbols
            cy.get('@LastName').blur();
            cy.get('.invalid-feedback').should('contain', 'Last name is invalid');
            cy.get('@LastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
    
            cy.get('@LastName').clear().type('Саша'); // not english
            cy.get('@LastName').blur();
            cy.get('.invalid-feedback').should('contain', 'Last name is invalid');
            cy.get('@LastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
    });

    describe('Validations for field Email', () => {

        it('Error si shown for empty field, border color red, button Register is disabled', () => {
            cy.get('#signupEmail').as('Email').focus();
            cy.get('@Email').blur();
            cy.get('.invalid-feedback').should('contain', 'Email required');
            cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
       
        it('Errors is shown for wrong data, border color red, button Register is disabled' , () => {
            cy.get('#signupEmail').as('Email').clear().type('email'); 
            cy.get('@Email').blur();
            cy.get('.invalid-feedback').should('contain', 'Email is incorrect');
            cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
    
            cy.get('@Email').clear().type('123'); 
            cy.get('@Email').blur();
            cy.get('.invalid-feedback').should('contain', 'Email is incorrect');
            cy.get('@Email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
    });
    describe('Validations for field Password', () => {

        it('Error si shown for empty field, border color red, button Register is disabled', () => {
            cy.get('#signupPassword').as('Password').focus();
            cy.get('@Password').blur();
            cy.get('.invalid-feedback').should('contain', 'Password required');
            cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
        it('Errors are shown for wrong length and incorrect format, border color red, button Register is disabled ' , () => {

            cy.get('#signupPassword').as('Password').type('Aa34567'); // 7 char
            cy.get('@Password').blur();
            cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
            
            cy.get('@Password').clear().type('Aa34567891234567'); //16 char
            cy.get('@Password').blur();
            cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
            
            cy.get('@Password').clear().type('aa3456789123456'); //without capital letter
            cy.get('@Password').blur();
            cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');

            cy.get('@Password').clear().type('A3456789123456'); //without small letter
            cy.get('@Password').blur();
            cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');

            cy.get('@Password').clear().type('13456789123456'); //without letters
            cy.get('@Password').blur();
            cy.get('.invalid-feedback').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            cy.get('@Password').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
    
    });
    describe('Validations for field Re-enter Password', () => {

        it('Error si shown for empty field, border color red, button Register is disabled', () => {
            cy.get('#signupRepeatPassword').as('RePassword').focus();
            cy.get('@RePassword').blur();
            cy.get('.invalid-feedback').should('contain', 'Re-enter password required');
            cy.get('@RePassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
        });
        it('Error is shown for password do not match, border color red, button Register is disabled ' , () => {

            cy.get('#signupPassword').as('Password').type('Aa345678'); 
            cy.get('#signupRepeatPassword').as('RePassword').type('Ba345679'); 
            cy.get('@RePassword').blur();
            cy.get('.invalid-feedback').should('contain', 'Passwords do not match');
            cy.get('@RePassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.contains('.btn.btn-primary', 'Register').should('be.disabled');
            
        });
    
    });
    describe('Successfull Sign up', () => {
        it('Successfull registration with valid data' , () => {

            cy.get('#signupName').type('Kateryna');
            cy.get('#signupLastName').type('Kustova');
            cy.get('#signupEmail').type(uniqueEmail);
            cy.get('#signupPassword').type(password, { sensitive: true });
            cy.get('#signupRepeatPassword').type(password, { sensitive: true });
            cy.contains('.btn.btn-primary', 'Register').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });
        
    });
    
});
describe('Successfull Sign in', () => {
    it('Login with the custom login command', () => {
    const email = `kustova.kate+12@gmail.com`; 
    const password='Kat12345';       
    cy.login(email, password);
    cy.url().should('include', '/panel/garage');
  });
});