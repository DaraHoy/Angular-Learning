/*global $ angular*/
(function(){

    var app = angular.module('carRental', []);

    app.controller('RentalController', function(){
        this.info = company;
        this.rentals = rentals;
    });

    var company = {
        name: "Angular Rentals",
        types: [{
            type: "Compact",
            available: 10,
            price: 50
        },{
            type: "SUV",
            available: 7,
            price: 150
        },{
            type: "Luxury",
            available: 5,
            price: 550
        }]

    }

    var rentals = [
            {
                name: 'Toyota Prius',
                type: "Compact",
                description: ". . .",
                price: 50,
                img: "../img/prius.png"
            },
            {
                name: 'Ford Fiesta',
                type: "Compact",
                description: ". . .",
                price: 50
            },{
                name: 'Ford Focus',
                type: "Compact",
                description: ". . .",
                price: 50
            },{
                name: 'Chevrolet Tahoe',
                type: "SUV",
                description: ". . .",
                price: 150
            },{
                name: 'GMC Yukon-Denali',
                type: "SUV",
                description: ". . .",
                price: 150
            },{
                name: 'Ford Explorer',
                type: "SUV",
                description: ". . .",
                price: 150
            },{
                name: 'Jaguar XF',
                type: "Premium",
                description: ". . .",
                price: 550
            },{
                name: 'Chrysler 300',
                type: "Premium",
                description: ". . .",
                price: 550
            },{
                name: 'Mercedes E350',
                type: "Premium",
                description: ". . .",
                price: 550
            }
        ]

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

//Materialize inits
$(document).ready(function() {
    $('select').material_select();
});