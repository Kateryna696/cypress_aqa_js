class FuelExpenses{
    get fuelExpMenuButton(){
        return cy.contains('.btn.btn-white.btn-sidebar.sidebar_btn', ' Fuel expenses');
    }
    get addExpendeButton(){
        return cy.contains('button', 'Add an expense');
    }
    get vehicleDropDown(){
        return cy.get('#addExpenseCar');
    }
    get reportDate(){
        return cy.get('#addExpenseDate');
    }
    get expenseMileage(){
        return cy.get('#addExpenseMileage');
    }
    get expenseLiters(){
        return cy.get('#addExpenseLiters');
    }
    get expenseTotalCost(){
        return cy.get('#addExpenseTotalCost');
    }
    get errorMessageNumLitres(){
        return cy.contains('.invalid-feedback', 'Liters required');
    }
    get errorMessageTotalCost(){
        return cy.contains('.invalid-feedback', 'Total cost required');
    }
    get saveButton(){
        return cy.get('.modal-footer.d-flex.justify-content-end').contains('button', 'Add');
    }
    get cancelButton(){
        return cy.get('.modal-footer.d-flex.justify-content-end').contains('button', 'Cancel');
    }
    get alertOfDanger(){
        return cy.get('.alert.alert-danger');
    }
    get carSelectDropDown(){
        return cy.get('#carSelectDropdown');
    }
    
    get editFuelExpenses(){
        return cy.get('.btn.btn-edit');
    }
    get deleteFuelExpenses(){
        return cy.get('.btn.btn-delete');
    }
    get confirmDeleteFuelExpenses(){
        return cy.contains('.btn.btn-danger', 'Remove');
    }

    clickAddExpendeButton(){
        this.addExpendeButton.click();
    }
    selectVehicleDropDown(car){
        this.vehicleDropDown.select(car);
    }
    typeExpenseMileage(mileage){
        this.expenseMileage.type(mileage);
    }
    typeExpenseTotalCost(total){
        this.expenseTotalCost.type(total);
    }
    typeExpenseLiters(liters){
        this.expenseLiters.type(liters);
    }
    clickSaveButton(){
        this.saveButton.click();
    }
    clickCancelButton(){
        this.cancelButton.click();
    }
    selectCarSelectDropDown(car){
        this.carSelectDropDown.click();
        this.carSelectDropDown.select(car);
    }
    clickEditFuelExpenses(){
        this.editFuelExpenses.click();
    }

    selectDeleteFuelExpenses(){
        this.deleteFuelExpenses.click({ force: true });
        this.confirmDeleteFuelExpenses.click();
    }
    clickFuelExpenseMenu(){
        this.fuelExpMenuButton.click();
    }

}

export default new FuelExpenses();