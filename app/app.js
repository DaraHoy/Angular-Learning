/*global angular*/
(function(){
    var app = angular.module('carRental', []);
    var cars = [
            {
                name: 'Toyota Prius',
                type: "Compact",
                description: ". . .",
                price: 50
            },
            {
                name: 'Honda Civic',
                type: "Compact",
                description: ". . .",
                price: 50
            }
        ]
    
    app.controller('RentalController', function(){
        this.products = cars;
    });
    
    /* 
        Car image
        Car type
        Car description
        Daily rental price: add a filter to print as currency
        Rent now button
        Add something else of your own choosing.
        If the car is not available
        Car image
        Car type
        Unavailable shown
    */
    
    
})();