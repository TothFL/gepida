const torzs = document.querySelector("#tablazatTorzs");

var empList = [
    {id: 1, name: "Per Lajos", city: "Szeged", salary: 345},
    {id: 2, name: "Para Béla", city: "Szeged", salary: 345},
    {id: 3, name: "Erős Imre", city: "Szolnok", salary: 325},
    {id: 4, name: "Tér Emese", city: "Szeged", salary: 385},
    {id: 5, name: "Ken Irén", city: "Miskolc", salary: 375},
    {id: 6, name: "Csoma ferenc", city: "Szeged", salary: 395}
];

//----------------------------- Egybe 

function tablazatKeszites(){
    empList.forEach((emp)=>{
        console.log(emp.name)

        let sor = document.createElement("tr");

        let adatId = document.createElement("td");
        let adatName = document.createElement("td");
        let adatCity = document.createElement("td");
        let adatSalary = document.createElement("td");  
        
        adatId.textContent=emp.id;
        adatName.textContent=emp.name;
        adatCity.textContent=emp.city;
        adatSalary.textContent=emp.salary;

        torzs.append(sor);

        sor.append(adatId);
        sor.append(adatName);
        sor.append(adatCity);
        sor.append(adatSalary);

    });
};

tablazatKeszites();
