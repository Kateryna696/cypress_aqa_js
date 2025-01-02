/// <reference types="cypress" />
import Garage from "../../page-objects/pages/Garage";
import FuelExpenses from "../../page-objects/pages/FuelExpenses";

describe('Adding new car to the Garage', () => {
    beforeEach(() => {
    const email = Cypress.env('MAIN_USER_EMAIL'); 
    const password=Cypress.env('MAIN_USER_PASSWORD'); ;       
    cy.login(email, password);
    cy.url().should('include', '/panel/garage');
  });
  
  it('Validation of the form Add car', () => {
    Garage.clickAddNewCarButton();
    Garage.addButton.should('be.disabled');
    Garage.clickCancelButton();
 
    });
  it('Adding new car - success', () => {
   Garage.clickAddNewCarButton();
   Garage.selectCarBrand('Porsche');
   Garage.selectCarModel('Panamera');
   Garage.typeCarMileage('100');
   Garage.addButton.should('be.enabled');
   Garage.clickAddButton();
   Garage.carItem.should('be.visible');
   Garage.carName.should('have.text', 'Porsche Panamera');

   });

   it('Adding fuel expences - failed: validation empty fileds error', () => {
    Garage.clickAddFuelButton();
    FuelExpenses.expenseLiters.focus();
    FuelExpenses.expenseLiters.blur();
    FuelExpenses.expenseTotalCost.focus();
    FuelExpenses.expenseTotalCost.blur();
    FuelExpenses.errorMessageNumLitres.should('have.text','Liters required');
    FuelExpenses.errorMessageTotalCost.should('have.text','Total cost required');
    FuelExpenses.saveButton.should('be.disabled');
    });

   it('Adding fuel expences - failed: validation First expense mileage error', () => {
    Garage.clickAddFuelButton();
    FuelExpenses.typeExpenseLiters(10);
    FuelExpenses.typeExpenseTotalCost(200);
    FuelExpenses.clickSaveButton();
    FuelExpenses.alertOfDanger.should('have.text','First expense mileage must not be less or equal to car initial mileage. Car initial mileage is 100');
    });

   it('Adding fuel expences - success', () => {
    Garage.clickAddFuelButton();
    FuelExpenses.expenseMileage.clear();
    FuelExpenses.typeExpenseMileage(200);
    FuelExpenses.typeExpenseLiters(10);
    FuelExpenses.typeExpenseTotalCost(200);
    FuelExpenses.clickSaveButton();
    cy.get('tbody tr').should('exist');
    });

    it('Delete fuel expences', () => {
      FuelExpenses.clickFuelExpenseMenu();
      FuelExpenses.selectDeleteFuelExpenses();
      cy.get('tbody tr').should('not.exist');
      });

    it('Delete car from the garage', () => {
      Garage.clickEditCarButton();
      Garage.clickRemoveCarButton();
      Garage.clickConfirmRemoveCarButton();
      Garage.carItem.should('not.exist');
      });

});