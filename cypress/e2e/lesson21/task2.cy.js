/// <reference types="cypress" />

describe('Profile Page - Name Change', () => {
    const email = `kustova.kate+12@gmail.com`;
    const password = 'Kat12345';
    const baseUrl = 'https://qauto.forstudy.space';
    let sidvalueGlobal;
    before(() => {
        
        cy.request({
            method: 'POST',
            url: `${baseUrl}/api/auth/signin`,
            body: {
                "email": email,
                "password": password,
                "remember": false
            },
        }).then((response) => {
            
            expect(response.status).to.equal(200);
            const sidCookie = response.headers['set-cookie'][0];
            const sidValue=sidCookie.split(';')[0].split('=')[1];
            sidvalueGlobal=sidValue;
            cy.setCookie('sid', sidvalueGlobal);
        });
    });

    it('Should change user name to Polar Bear using intercept', () => {
            cy.intercept('GET', `${baseUrl}/api/users/profile`, (req) => {
                req.headers['Cookie'] = `sid=${sidvalueGlobal}`;
                req.reply((res) => {
                    res.body.data.name = 'Polar';
                    res.body.data.lastName = 'Bear';
                    return res;
                });
            }).as('getProfile');
           
            cy.visit(`${baseUrl}/panel/profile`, {
                auth: {
                  username: 'guest',
                  password: 'welcome2qauto',
                },
              });

            cy.wait('@getProfile');

            cy.get('.profile_name.display-4').should('have.text', 'Polar Bear');
        });
    });
