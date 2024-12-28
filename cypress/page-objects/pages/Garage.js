class Garage {
    
    get addNewCarButton(){
        return cy.contains('button', 'Add car');
    }
    get carBrandDropDown(){
        return cy.get('#addCarBrand');
    }
    get carModelDropDown(){
        return cy.get('#addCarModel');
    }
    get carMileageField(){
        return cy.get('#addCarMileage');
    }
    get addButton(){
        return cy.get('.modal-content').contains('button', 'Add');
    }
    get cancelButton(){
        return cy.get('.modal-content').contains('button', 'Cancel');
    }
    get closeFormButton(){
        return cy.get('.close');
    }
    get carItem(){
        return  cy.get('.car-item');
    }
    get carName(){
        return  cy.get('.car_name.h2');
    }

    get editCarButton(){
        return cy.get('.car_edit.btn.btn-edit');
    }
    get removeCarButton(){
        return cy.contains('.btn.btn-outline-danger', 'Remove car');
    }
    get confirmRemoveCarButton(){
        return cy.contains('.btn.btn-danger', 'Remove');
    }
    get addFuelButton(){
        return cy.contains('.car_add-expense.btn.btn-success', 'Add fuel expense');
    }
    clickRemoveCarButton(){
        this.removeCarButton.click();
    }
    clickAddFuelButton(){
        this.addFuelButton.click();
    }
    clickConfirmRemoveCarButton(){
        this.confirmRemoveCarButton.click();
    }
    clickEditCarButton(){
        this.editCarButton.click();
    }
    clickAddNewCarButton(){
        this.addNewCarButton.click();
    }
    selectCarBrand(brand){
        this.carBrandDropDown.select(brand);
    }
    selectCarModel(model){
        this.carModelDropDown.select(model);
    }
    typeCarMileage(mileage){
        this.carMileageField.type(mileage);
    }
    clickAddButton(){
        this.addButton.click();
    }
    clickCancelButton(){
        this.cancelButton.click();
    }
    clickCloseButton(){
        this.closeFormButton.click();
    }
}
export default new Garage();