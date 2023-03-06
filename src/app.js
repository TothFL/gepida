// File: app.js
// Author: Tóth Fedor László
// Copyright: 2023, Tóth Fedor László
// Group: Szoft I-2-E
// Date: 2023.03.06
// Github: https://github.com/TothFL/
// Licenc: GNU GPL

const torzs = document.querySelector("#tablazatTorzs");

var empList = [
    {name: "Cassis", wheel: 28, use: "offroad", price: 557900},
    {name: "Alboin 900", wheel: 28, use: "Szetrekkingged", price: 519900},
    {name: "Asgard", wheel: 29, use: "technikás utak", price: 519900},
    {name: "Ruga", wheel: 29, use: "hegyi", price: 372900},
    {name: "Reptila", wheel: 28, use: "városi", price: 308900},
    {name: "Sirmium", wheel: 29, use: "hegyi", price: 264900}
];

function tablazatKeszites(){
    empList.forEach((emp)=>{
        console.log(emp.wheel)

        let sor = document.createElement("tr");

        let adatname = document.createElement("td");
        let adatwheel = document.createElement("td");
        let adatuse = document.createElement("td");
        let adatprice = document.createElement("td");  
        
        adatname.textContent=emp.name;
        adatwheel.textContent=emp.wheel;
        adatuse.textContent=emp.use;
        adatprice.textContent=emp.price;

        torzs.append(sor);

        sor.append(adatname);
        sor.append(adatwheel);
        sor.append(adatuse);
        sor.append(adatprice);

    });
};

tablazatKeszites();
