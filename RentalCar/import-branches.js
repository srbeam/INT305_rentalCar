var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var branches = [
    {
        "province": "Bangkok",
        "location": "Donmueang Airport",
        "numOfOrder": 768
    },
    {
        "province": "Bangkok",
        "location": "Suvarnabhumi Airport",
        "numOfOrder": 897
    },
    {
        "province": "Krabi",
        "location": "Krabi Airport",
        "numOfOrder": 354
    },
    {
        "province": "Lampang",
        "location": "Lampang Airport",
        "numOfOrder": 122
    },
    {
        "province": "Udon Thani",
        "location": "Udon Thani Airport",
        "numOfOrder": 444
    },
    {
        "province": "Phuket",
        "location": "Phuket Airport",
        "numOfOrder": 233
    },
    {
        "province": "Chiangmai",
        "location": "Chiangmai Airport",
        "numOfOrder": 250
    },
    {
        "province": "Chiangmai",
        "location": "Maejo University",
        "numOfOrder": 270
    },
    {
        "province": "Udon Thani",
        "location": "Central Udon Thani",
        "numOfOrder": 699
    },
    {
        "province": "Khon Kaen",
        "location": "Khon Kaen Airport",
        "numOfOrder": 470
    },
    {
        "province": "Khon Kaen",
        "location": "Khon Kaen University",
        "numOfOrder": 588
    },
    {
        "province": "Suratthani",
        "location": "Hat Yai Airport",
        "numOfOrder": 500
    },
    {
        "province": "Songkhla",
        "location": "Samui Airport",
        "numOfOrder": 150
    },
    {
        "province": "Chiang Rai",
        "location": "Chiang Rai Airport",
        "numOfOrder": 200
    },
    {
        "province": "Chiang Rai",
        "location": "Central Chiangrai",
        "numOfOrder": 150
    },
    
    
]

branches.forEach(function(obj){
    db.collection("branches").add({
        province: obj.province,
        location: obj.location,
        numOfOrder: obj.numOfOrder
    }).then( docRef => { console.log("Document written with ID : "+docRef.id)})
});


