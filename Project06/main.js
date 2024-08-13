let products = [];
let url = "https://laravue2.blumbit.net/back/public/"

async function getData() {
    try {
        const response = await axios.get(url+"api/producto?page=1&limit=10&q=");
        const {page, data} = response.data
        products = data
        console.log(products)
        //dasdfcument.write(JSON.stringify(JSON.stringify(products)))
        let htmlTable = ""

        products.forEach(element => {
            
            htmlTable = htmlTable + `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.precio}</td>
                    <td>${element.stock}</td>
                    <td>${element.imagen}</td>
                </tr>
            `
        });

        document.getElementById("dataId").innerHTML = htmlTable
    } catch (error) {
        document.write("loading error")
    }
    
}