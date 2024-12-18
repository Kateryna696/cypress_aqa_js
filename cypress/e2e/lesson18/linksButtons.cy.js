describe('Checking buttons and links from the header and footer', ()=>{
    beforeEach(()=>{
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
         })
    })

    it('Checking link Home is visible in the header, has link and text', ()=>{
     cy.get('header').find('.btn.header-link.-active').as('Home').should('exist');
     cy.get('@Home').should('be.visible');
     cy.get('@Home').should('have.text', 'Home');
     cy.get('@Home').should('have.attr', 'href', '/');
    });

    it('Checking button About is visible in the header and has text', ()=>{
        cy.get('header').find('button[appscrollto="aboutSection"]').as('About').should('exist');
        cy.get('@About').should('be.visible');
        cy.get('@About').should('have.text', 'About');
    });
    it('Checking button Contacts is visible in the header and has text', ()=>{
        cy.get('header').find('button[appscrollto="contactsSection"]').as('Contacts').should('exist');
        cy.get('@Contacts').should('be.visible');
        cy.get('@Contacts').should('have.text', 'Contacts');
    });
    it('Checking button Guest log in is visible in the header and has text ', ()=>{
        cy.get('header').find('.header-link.-guest').as('Guest').should('exist');
        cy.get('@Guest').should('be.visible');
        cy.get('@Guest').should('have.text', 'Guest log in');
    });
    it('Checking button Sign in is visible in the header and has text', ()=>{
        cy.get('header').find('.btn.btn-outline-white.header_signin').as('Sign in').should('exist');
        cy.get('@Sign in').should('be.visible');
        cy.get('@Sign in').should('have.text', 'Sign In');
    });
    it('Checking link Facebook is visible in the footer and has link', ()=>{
        cy.get('#contactsSection').find('.socials_icon.icon.icon-facebook').as('Facebook').should('exist');
        cy.get('@Facebook').should('be.visible');
        cy.get('@Facebook').parent().should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School');
    });
    it('Checking link Telegram is visible in the footer and has link', ()=>{
        cy.get('#contactsSection').find('.socials_icon.icon.icon-telegram').as('Telegram').should('exist');
        cy.get('@Telegram').should('be.visible');
        cy.get('@Telegram').parent().should('have.attr', 'href', 'https://t.me/ithillel_kyiv');
    });
    it('Checking link Youtube is visible in the footer and has link', ()=>{
        cy.get('#contactsSection').find('.socials_icon.icon.icon-youtube').as('Youtube').should('exist');
        cy.get('@Youtube').should('be.visible');
        cy.get('@Youtube').parent().should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
    });
    it('Checking link Instagram is visible in the footer and has link', ()=>{
        cy.get('#contactsSection').find('.socials_icon.icon.icon-instagram').as('Instagram').should('exist');
        cy.get('@Instagram').should('be.visible');
        cy.get('@Instagram').parent().should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/');
    });
    it('Checking link Linkedin is visible in the footer and has link', ()=>{
        cy.get('#contactsSection').find('.socials_icon.icon.icon-linkedin').as('Linkedin').should('exist');
        cy.get('@Linkedin').should('be.visible');
        cy.get('@Linkedin').parent().should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/');
    });
    it('Checking link Hillel is visible in the footer, has link and text', ()=>{
        cy.get('.col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0').find('.contacts_link.display-4').as('Hillel').should('exist');
        cy.get('@Hillel').should('be.visible');
        cy.get('@Hillel').should('have.text', 'ithillel.ua');
        cy.get('@Hillel').should('have.attr', 'href', 'https://ithillel.ua');
    });
    it('Checking link Support is visible in the footer, has link and text', ()=>{
        cy.get('.col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0').find('.contacts_link.h4').as('Support').should('exist');
        cy.get('@Support').should('be.visible');
        cy.get('@Support').should('have.text', 'support@ithillel.ua');
        cy.get('@Support').should('have.attr', 'href', 'mailto:developer@ithillel.ua');
    });
})