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

    var rentals = [[{
                name: 'Toyota Prius',
                description: "The Toyota Prius is a full hybrid electric automobile developed by Toyota",
                price: 50,
                img: "../img/prius.png"
            },
            {
                name: 'Ford Fiesta',
                description: ". . .",
                price: 50,
                img: "../img/fiesta.png"
            },{
                name: 'Ford Focus',
                description: ". . .",
                price: 50,
                img: "../img/focus.png"
            }],[{
                name: 'Chevrolet Tahoe',
                type: "SUV",
                description: ". . .",
                price: 150,
                img: "../img/tahoe.png"
            },{
                name: 'GMC Yukon-Denali',
                type: "SUV",
                description: ". . .",
                price: 150,
                img: "../img/denali.png"
            },{
                name: 'Ford Explorer',
                type: "SUV",
                description: ". . .",
                price: 150,
                img: "../img/explorer.png"
            }],[{
                name: 'Jaguar XF',
                type: "Premium",
                description: ". . .",
                price: 550,
                img: "../img/jaguarXF.png"
            },{
                name: 'Chrysler 300',
                type: "Premium",
                description: ". . .",
                price: 550,
                img: "../img/300.png"
            },{
                name: 'Mercedes E350',
                type: "Premium",
                description: ". . .",
                price: 550,
                img: "../img/mercedes.png"
            }]
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