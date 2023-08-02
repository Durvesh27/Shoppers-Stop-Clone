import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SingleCard from './SingleCard'
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    const [drop, setDrop] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            setProducts(data)
        }
        getProducts()
    }, [])

    return (
        <div>
            <div className='pro-header'>
                <h1 className='main-1'>Products
                    <span className='main-2'>{products?.length} products</span>
                </h1>
                <div style={{ display: "flex", alignItems: "center", width: "30%" }}>
                    <select style={{ padding: "10px", width: "100%", fontSize: "15px" }}>
                        <option>Sort by :   Popularity </option>
                    </select>

                    <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" alt="" style={{ marginLeft: "20px" }} />
                </div>
            </div>

            <div className='products'>
                <div className="products-left">
                    <div className='left-sec1'>
                        <p style={{ fontWeight: 600 }}>Filters</p>
                        <p style={{ color: "#DA1C5C", fontSize: "14px", fontWeight: 600 }}> Clear All</p>
                    </div>
                    <div className="left-sec3">

                        <div style={{ lineHeight: "45px" }}>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    <span style={{ fontWeight: 600 }}>CATEGORIES</span>
                                </div>
                                <div style={{ fontWeight: 600 }}>
                                    <i class="fa-solid fa-angle-down fa-lg" onClick={() => setDrop(!drop)}></i>
                                </div>
                            </div>
                            {
                                drop && 
                                <div className='drop-items'>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>MENS CLOTHING</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>WOMENS CLOTHING</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>ELECTRONICS</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>JEWELLERY</span>
                                    </div>
                                </div>
                            }

                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    {/* <input type="radio" style={{ width: "20px", height: "20px" }} /> */}
                                    <span style={{ fontWeight: 600 }}>OFFERS</span>
                                </div>
                                <div style={{ fontWeight: 600 }}>
                                    <i class="fa-solid fa-angle-down fa-lg" ></i>
                                </div>
                            </div>
                          
                                <div className='drop-items'>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>FLAT 30% OFF</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>FLAT 40% OFF</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>FLAT 50% OFF</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>FLAT 60% OFF</span>
                                    </div>
                                </div>
                            
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">
                                    {/* <input type="radio" style={{ width: "20px", height: "20px" }} /> */}
                                    <span style={{ fontWeight: 600 }}>COLOURS</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    <i class="fa-solid fa-angle-down fa-lg"></i>
                                </div>
                            </div>
                            <div className='drop-items'>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ width: "20px", height: "20px" ,background:"red",borderRadius:"50%"}} ></span>
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>RED</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ width: "20px", height: "20px" ,background:"green",borderRadius:"50%"}} ></span>
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>GREEN</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ width: "20px", height: "20px" ,background:"blue",borderRadius:"50%"}} ></span>
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>BLUE</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ width: "20px", height: "20px" ,background:"black",borderRadius:"50%"}} ></span>
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>BLACK</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ width: "20px", height: "20px" ,background:"grey",borderRadius:"50%"}} ></span>
                                        <span style={{ marginLeft: "15px", fontSize: "14px", fontWeight: 600 }}>GREY</span>
                                    </div>
                
                                </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">

                                    <span style={{ fontWeight: 600 }}>SIZE</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    <i class="fa-solid fa-angle-down fa-lg"></i>
                                </div>
                            </div>
                            <div className='left-sec3-flex'>
                                <div className="sec3-left">

                                    <span style={{ fontWeight: 600 }}>PRICE</span>
                                </div>
                                <div style={{ color: "#C5C5C5", fontWeight: 600 }}>
                                    <i class="fa-solid fa-angle-down fa-lg"></i>
                                </div>
                            </div>

                        </div>

                    </div>




                </div>
                <div className='products-right'>
                {
                            products.length?
                        
                    <div className="products-right-item">
                        {
                            products.map((pro) => {
                                return <SingleCard imgsrc={pro.image} primary={pro.category} secondary={pro.title} price={pro.price} id={pro.id} />
                            })
                        }
                    </div>:
                    <div className='loader'>Loading...</div>
}
                </div>

            </div>
        </div>
    )
}

export default Products
