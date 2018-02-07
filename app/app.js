/*global $ angular*/
(function() {

    var app = angular.module('carRental', []);

    app.controller('RentalController', function($scope) {
        this.info = company;
        this.rentals = rentals;

        this.rent = function(type, id) {
            this.info.available--;
            this.rentals[type][id].available--;
        }
    });

    var company = {
        name: "Angular Rentals",
        types: ["Compact", "SUV", "Lexury"],
        available: 90
    }

    var rentals = [
        [{
                name: 'Toyota Prius',
                description: "The Toyota Prius is a full hybrid electric automobile developed by Toyota",
                price: 50,
                img: "../img/prius.png",
                available: 10,
                type: 0,
                id: 0
            },
            {
                name: 'Ford Fiesta',
                description: ". . .",
                price: 50,
                img: "../img/fiesta.png",
                available: 10,
                type: 0,
                id: 1
            }, {
                name: 'Ford Focus',
                description: ". . .",
                price: 50,
                img: "../img/focus.png",
                available: 10,
                type: 0,
                id: 2
            }
        ],
        [{
            name: 'Chevrolet Tahoe',
            type: "SUV",
            description: ". . .",
            price: 150,
            img: "../img/tahoe.png",
            available: 10,
            type: 1,
            id: 0
        }, {
            name: 'GMC Yukon-Denali',
            type: "SUV",
            description: ". . .",
            price: 150,
            img: "../img/denali.png",
            available: 10,
            type: 1,
            id: 1
        }, {
            name: 'Ford Explorer',
            type: "SUV",
            description: ". . .",
            price: 150,
            img: "../img/explorer.png",
            available: 10,
            type: 1,
            id: 2
        }],
        [{
            name: 'Jaguar XF',
            type: "Premium",
            description: ". . .",
            price: 550,
            img: "../img/jaguar.png",
            available: 10,
            type: 2,
            id: 0
        }, {
            name: 'Chrysler 300',
            type: "Premium",
            description: ". . .",
            price: 550,
            img: "../img/300.png",
            available: 10,
            type: 2,
            id: 1
        }, {
            name: 'Mercedes E350',
            type: "Premium",
            description: ". . .",
            price: 550,
            img: "../img/mercedes.png",
            available: 10,
            type: 2,
            id: 2
        }]
    ];

})();
