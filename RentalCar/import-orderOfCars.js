var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var orderOfCars = [
    {
        "order": { "carName":"Honda City Hatchback RS",
                    "totalPrice":19000,
                    "duration":"1 month"
                },
        "branchLocation": "Donmueang Airport",
        "orderDate": new Date(2022, 5, 25, 12, 34, 23, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Nissan Almera",
                    "totalPrice":55000,
                    "duration":"3 month"
                },
        "branchLocation": "Donmueang Airport",
        "orderDate": new Date(2022, 6, 3, 18, 34, 34, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Nissan Almera",
                    "totalPrice":19000,
                    "duration":"1 month"
                },
        "branchLocation": "Krabi Airport",
        "orderDate": new Date(2022, 6, 30, 6, 34, 23, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Toyota CHR",
                    "totalPrice":100000,
                    "duration":"6 month"
                },
        "branchLocation": "Lampang Airport",
        "orderDate": new Date(2022, 6, 30, 18, 23, 0, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Mini Countryman",
                    "totalPrice":50000,
                    "duration":"3 month"
                },
        "branchLocation": "Udon Thani Airport",
        "orderDate": new Date(2022, 7, 2, 12, 30, 29, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Tesla Model Y EV",
                    "totalPrice":90000,
                    "duration":"6 month"
                },
        "branchLocation": "Udon Thani Airport",
        "orderDate": new Date(2022, 7, 12, 7, 4, 56, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Honda City Hatchback RS",
                    "totalPrice":19000,
                    "duration":"1 month"
                },
        "branchLocation": "Donmueang Airport",
        "orderDate": new Date(25, 5, 25, 12, 34, 23, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Ora Good Cat",
                    "totalPrice":20000,
                    "duration":"1 month"
                },
        "branchLocation": "Donmueang Airport",
        "orderDate": new Date(2022, 7, 26, 10, 23, 6, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Ora Good Cat",
                    "totalPrice":20000,
                    "duration":"1 month"
                },
        "branchLocation": "Suvarnabhumi Airport",
        "orderDate": new Date(2022, 7, 30, 15, 48, 12, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Ora Good Cat",
                    "totalPrice":50000,
                    "duration":"3 month"
                },
        "branchLocation": "Samui Airport",
        "orderDate": new Date(2022, 8, 3, 17, 48, 2, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Toyota Cross",
                    "totalPrice":55000,
                    "duration":"3 month"
                },
        "branchLocation": "Khon Kaen University",
        "orderDate": new Date(2022, 8, 21, 14, 45, 6, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Toyota Yaris Mid",
                    "totalPrice":14000,
                    "duration":"1 month"
                },
        "branchLocation": "Hat Yai Airport",
        "orderDate": new Date(2022, 8, 27, 13, 45, 12, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Toyota Majesty",
                    "totalPrice":25000,
                    "duration":"1 month"
                },
        "branchLocation": "Hat Yai Airport",
        "orderDate": new Date(2022, 9, 25, 15, 2, 12, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Toyota Vios",
                    "totalPrice":78000,
                    "duration":"6 month"
                },
        "branchLocation": "Central Udon Thani",
        "orderDate": new Date(2022, 10, 22, 12, 32, 12, 0),
        "pickupStatus": true
    },
    {
        "order": { "carName":"Toyota Majesty",
                    "totalPrice":40000,
                    "duration":"3 month"
                },
        "branchLocation": "Chiangmai Airport",
        "orderDate": new Date(2022, 11, 3, 10, 41, 36, 0),
        "pickupStatus": true
    },
]

orderOfCars.forEach(function(obj){
    db.collection("orderOfCars").add({
        order: obj.order,
        branchLocation: obj.branchLocation,
        orderDate: obj.orderDate,
        pickupStatus: obj.pickupStatus
    }).then( docRef => { console.log("Document written with ID : "+docRef.id)})
});


