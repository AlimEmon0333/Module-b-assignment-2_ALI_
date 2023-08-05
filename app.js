let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]

let tbody = document.getElementById("tbody")
let input = document.getElementById("input")


    let arr2 = arr.map((x)=>{
        tbody.innerHTML += ` <tr>
        <td>${x.brand}</td>
        <td>${x.model}</td>
        <td>${x.camera}</td>
        <td>${x.ram}</td>
        <td>${x.rom}</td>
        <td>${x.price}</td>
    </tr>`
    })

function searching(){
    let arr3 = arr.map((x) => {
        if(input.value === x.model){
            tbody.innerHTML = ""
            tbody.innerHTML += ` <tr>
            <td>${x.brand}</td>
            <td>${x.model}</td>
            <td>${x.camera}</td>
            <td>${x.ram}</td>
            <td>${x.rom}</td>
            <td>${x.price}</td>
            </tr>` 
        }  
    })
    
    input.value = ""
}