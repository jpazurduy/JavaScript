import axios from 'axios'
import { useEffect, useState } from 'react'

// By default is necessary to export something
export default function Product() {
    const [products, setProducts] = useState([])
    useEffect( async () => {
        getProducts()
    }, [])

    async function getProducts() {
        const { data } = await axios.get("http://localhost:3000")
        setProducts(data)
    }

    return (
        <div>
            <h1>Product Management</h1>
            <h2>we are the champions!!!</h2>
            <hr />

            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    { products && products.map((product) => {
                        return 
                        <tr>
                            <td>{ product.name }</td>
                            <td>{ product.price }</td>
                            <td>{ product.quantity }</td>
                            <td>{ product.description }</td>
                            <td>{ product.image }</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
        
    )
}

export function Images() {
    return (
        <h4>Hello</h4>
    )
}
