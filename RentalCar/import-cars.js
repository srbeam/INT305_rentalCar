var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var cars = [
    {
        "name": "Toyota Yaris Ativ",
        "type": "Sedan",
        "fuel" :["E20","Gasohol-95","Gasohol-91"],
        "price": {
            "1 month": 14000,
            "3 month": 40000,
            "6 month": 78000
          }
    },
    {
        "name": "Toyota Vios",
        "type": "Sedan",
        "fuel" :["E20","Gasohol-95","Gasohol-91","E85"],
        "price": {
            "1 month": 14000,
            "3 month": 40000,
            "6 month": 78000
          }
    },
    {
        "name": "Nissan Almera",
        "type": "Sedan",
        "fuel" :["E20","Gasohol-95","Gasohol-91"],
        "price": {
            "1 month": 19000,
            "3 month": 55000,
            "6 month": 100000
          }
    },
    {
        "name": "Toyota CHR",
        "type": "SUV",
        "fuel" :["E85","Benzine"],
        "price": {
            "1 month": 19000,
            "3 month": 55000,
            "6 month": 100000
          }
    },
    {
        "name": "Mini Countryman",
        "type": "Sedan",
        "fuel" :["E20","Gasohol-95","Gasohol-91"],
        "price": {
            "1 month": 20000,
            "3 month": 50000,
            "6 month": 90000
          }
    },
    {
        "name": "Tesla Model Y EV",
        "type": "Sedan",
        "fuel" :["Electric"],
        "price": {
            "1 month": 20000,
            "3 month": 50000,
            "6 month": 90000
          },
    },
    {
        "name": "Ora Good Cat",
        "type": "Sedan",
        "fuel" :["Electric"],
        "price": {
            "1 month": 20000,
            "3 month": 50000,
            "6 month": 90000
          },
    },
    {
        "name": "Mitsubishi Pajero",
        "type": "SUV",
        "fuel" :["Diesel"],
        "price": {
            "1 month": 19000,
            "3 month": 55000,
            "6 month": 100000
          }
    },
    {
        "name": "Toyota Majesty",
        "type": "Van",
        "fuel" :["Diesel"],
        "price": {
            "1 month": 25000,
            "3 month": 40000,
            "6 month": 70000
          }
    },
    {
        "name": "Toyota Cross",
        "type": "SUV",
        "fuel" :["E20","gasohol-95"],
        "price": {
            "1 month": 19000,
            "3 month": 55000,
            "6 month": 100000
          }
    },
    {
        "name": "Honda CR",
        "type": "SUV",
        "fuel" :["Gasohol-95","Gasohol-91"],
        "price": {
            "1 month": 14000,
            "3 month": 40000,
            "6 month": 78000
          }
    },
    {
        "name": "Toyota Yaris Mid",
        "type": "Hatchback",
        "fuel" :["Gasohol-95","Gasohol-91"],
        "price": {
            "1 month": 14000,
            "3 month": 40000,
            "6 month": 78000
          }
    },
    {
        "name": "Toyota Commuter",
        "type": "Van",
        "fuel" :["Diesel"],
        "price": {
            "1 month": 25000,
            "3 month": 40000,
            "6 month": 70000
          }
    },
    {
        "name": "Mazda 2 Hatchback",
        "type": "Hatchback",
        "fuel" :["Gasohol-95","Gasohol-91"],
        "price": {
            "1 month": 14000,
            "3 month": 40000,
            "6 month": 78000
          }
    },
    {
        "name": "Honda City Hatchback RS",
        "type": "Hatchback",
        "fuel" :["E20","gasohol-95"],
        "price": {
            "1 month": 19000,
            "3 month": 55000,
            "6 month": 100000
          }
    }
   
]

cars.forEach(function(obj){
    db.collection("cars").add({
        name: obj.name,
        type: obj.type,
        fuel: obj.fuel,
        price: obj.price,
    }).then( docRef => { console.log("Document written with ID : "+docRef.id)})
});


