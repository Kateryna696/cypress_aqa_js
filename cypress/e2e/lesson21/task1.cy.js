/// <reference types="cypress" />

describe('API tests', () => {
    const email = `kustova.kate+12@gmail.com`; 
    const password='Kat12345';  
    const baseUrl='https://qauto.forstudy.space/api';
    let carId;
    
    beforeEach(() => {    
        cy.request({
            method: 'POST',
            url: `${baseUrl}/auth/signin`,
            body: {
                "email": email,
                "password": password,
                "remember": false
              },
          }).then((response) => {
            expect(response.status).to.equal(200);
          });
    });
    it('POST request for Garage - add new car', () => {
        cy.request({
            method: 'POST',            
            url: `${baseUrl}/cars`,
            body: {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
              },
            
          }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.data).to.have.property('carBrandId', 1);
            carId = response.body.data.id; 
          });

    });

    it('GET request for Garage - car brands', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/cars/brands`
        }).then((response) => {
            
            expect(response.status).to.equal(200);
    
            
            expect(response.body).to.have.property('data').that.is.an('array');
    
            
            expect(response.body.data[0]).to.have.property('title').that.is.a('string');
            expect(response.body.data[0]).to.have.property('id').that.is.a('number');
            expect(response.body.data[0]).to.have.property('logoFilename').that.is.a('string');
        });
    });
    
    it('GET request for Garage - car models', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/cars/models`
        }).then((response) => {
           
            expect(response.status).to.equal(200);
    
            
            expect(response.body).to.have.property('data').that.is.an('array');
    
            
            expect(response.body.data[0]).to.have.property('carBrandId').that.is.a('number');
            expect(response.body.data[0]).to.have.property('title').that.is.a('string');
            expect(response.body.data[0]).to.have.property('id').that.is.a('number');
        });
    });
    
    it('GET request for Garage - get car by id', () => {
        cy.request({
            method: 'GET',            
            url: `${baseUrl}/cars/${carId}`
            
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data.id).to.eq(carId);
        });

    });
    it('DELETE request for Garage - delete car by id', () => {
        cy.request({
            method: 'DELETE',            
            url: `${baseUrl}/cars/${carId}`
            
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.have.property('carId', carId);
        });

    });
});