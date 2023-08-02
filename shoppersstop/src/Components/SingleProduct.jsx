import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {single}=useParams();
   const [item,setItem]=useState({})
   const[logged,setLogged]=useState(false)
   const[email,setEmail]=useState("")
    
   useEffect(()=>{
    const getItem=async()=>{
    let response=await fetch(`https://fakestoreapi.com/products/${single}`);
    const data=await response.json()
    setItem(data)
    }
    getItem()
    },[])

    useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("Current"))
    if(user){
    setEmail(user.email)
    setLogged(true)
    }
    },[])
 
    function addCart(){
    if(logged){
    const users=JSON.parse(localStorage.getItem("Users"))
    users.forEach((ele)=>{
        if(ele.email===email){
           ele.cart.push(item) 
           alert("Items added to Cart")
           localStorage.setItem("Users",JSON.stringify(users))
        }
    })
    }else{
        alert("Login for Shopping")
    }
    }

    if (!Object.keys(item).length > 0) return <h2 className="loader">Loading...</h2>
    !Object.keys(item).length > 0 && <h1 style={{color:"blue"}}>Not found...</h1>
    
    return (
        <div>
                        {/* {
        !item.length?  */}
            <div className='sp-main'>

                <div className="sp-left">
     <img src={item?.image} alt="" />
     <img src={item?.image} alt="" />
                </div>


        
        <div className="sp-right">
        <div className="sp-right1">
            <h3 style={{textTransform:"uppercase"}}>{item?.category}</h3>
            <div className='sp-star'>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m12 2 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L12 15.82l-5.878 4.27 2.245-6.91L2.49 8.91h7.266L12 2z' fill='%23FFC635'/%3E%3C/svg%3E" alt="" />
            <span style={{marginLeft:"5px"}}>4.2</span>
            </div>

        </div>
        <div className="sp-right2">
            {item?.title}
        </div>
        <p>{item?.description}</p>
        <p className='sp-right3'>{item.price}$</p>
        <h3>Size</h3>
        <button className='sp-btn1'>LARGE</button>
        <button className='sp-btn1'>MEDIUM</button>
        <button className='sp-btn1'>SMALL</button>
        <button className='sp-btn1'>X-LARGE</button>
        <p className='sp-right4'>14 days easy return and exchange applicable for this item</p>
        <div className='sp-right5'>
            <span className='sp-circle'>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 9.563a2.437 2.437 0 1 0 0 4.874 2.437 2.437 0 0 0 0-4.874zM2.437 12a3.563 3.563 0 1 1 7.126 0 3.563 3.563 0 0 1-7.126 0zM16.5 16.313a2.437 2.437 0 1 0 0 4.874 2.437 2.437 0 0 0 0-4.875zm-3.563 2.437a3.563 3.563 0 1 1 7.126 0 3.563 3.563 0 0 1-7.125 0zM16.5 2.813a2.437 2.437 0 1 0 0 4.874 2.437 2.437 0 0 0 0-4.875zM12.937 5.25a3.563 3.563 0 1 1 7.126 0 3.563 3.563 0 0 1-7.125 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.45 6.568a.562.562 0 0 1-.17.777l-5.453 3.506a.563.563 0 0 1-.608-.946l5.454-3.506a.562.562 0 0 1 .777.169zM8.05 13.318a.563.563 0 0 1 .777-.17l5.454 3.507a.562.562 0 1 1-.609.946L8.22 14.095a.563.563 0 0 1-.169-.777z' fill='%23000'/%3E%3C/svg%3E" alt="" />
            </span>
            <span className='sp-circle'>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.593 21.48c.117.09.26.14.407.14.147 0 .29-.05.407-.14 3.706-2.88 6.26-5.36 8.046-7.807 2.28-3.126 2.8-6.013 1.547-8.58-.893-1.833-3.467-3.32-6.46-2.46A6.58 6.58 0 0 0 12 5.147a6.58 6.58 0 0 0-3.54-2.514c-3-.873-5.567.627-6.46 2.46-1.253 2.567-.733 5.454 1.547 8.58 1.786 2.447 4.34 4.927 8.046 7.807zM3.2 5.673A3.933 3.933 0 0 1 6.753 3.72c.452.002.9.067 1.334.193a5.287 5.287 0 0 1 3.293 2.8.667.667 0 0 0 1.233 0 5.333 5.333 0 0 1 3.294-2.8c2.226-.626 4.226.434 4.893 1.767 1.033 2.113.573 4.473-1.427 7.207A38.085 38.085 0 0 1 12 20.107a38.085 38.085 0 0 1-7.373-7.227C2.633 10.153 2.167 7.793 3.2 5.673z' fill='%23333'/%3E%3C/svg%3E" alt="" />
            </span>
            <button className='sp-btn2' onClick={addCart}>ADD TO BAG</button>
        </div>
        <div className="sp-right6">
            <p>More Casual Shirts from Life</p>
            <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="sp-right6" >
            <p>More Products from Life</p>
            <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="sp-right6">
            <p>More Casual Shirts</p>
            <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="sp-right7">
            <div>
                <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2.063a6.938 6.938 0 1 0 0 13.875 6.938 6.938 0 0 0 0-13.876zM3.936 9a8.063 8.063 0 1 1 16.125 0A8.063 8.063 0 0 1 3.937 9z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5.063a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.876zM6.936 9a5.063 5.063 0 1 1 10.125 0A5.063 5.063 0 0 1 6.937 9zM16.5 14.437c.31 0 .563.252.563.563v7.5a.562.562 0 0 1-.814.503l-4.25-2.124-4.247 2.124a.562.562 0 0 1-.814-.503V15a.562.562 0 1 1 1.125 0v6.59l3.685-1.843a.562.562 0 0 1 .503 0l3.687 1.843V15c0-.311.251-.563.562-.563z' fill='%23000'/%3E%3C/svg%3E" alt="" />
                <p>Authentic Product</p>
            </div>
            <div>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.702 2.952a3.25 3.25 0 0 1 5.547 2.236H8.751a3.25 3.25 0 0 1 .95-2.236zM7.75 6.312V8.25a.5.5 0 0 0 1 0V6.312h6.5V8.25a.5.5 0 0 0 1 0V6.312h2.684a.187.187 0 0 1 .18.136l1.14 3.99H3.746l1.14-3.99a.187.187 0 0 1 .18-.136H7.75zm0-1.125a4.25 4.25 0 0 1 8.5 0h2.684a1.313 1.313 0 0 1 1.262.952l1.341 4.694.026.17V12.5a3.563 3.563 0 0 1-1.5 2.905V21.5a1.313 1.313 0 0 1-1.313 1.313H5.25A1.312 1.312 0 0 1 3.937 21.5v-6.095a3.568 3.568 0 0 1-1.5-2.905v-1.503c0-.057.01-.112.026-.164l1.34-4.694a1.312 1.312 0 0 1 1.263-.952H7.75zm13.787 5.646.026.167v-.017l-.001-.009a.562.562 0 0 0-.025-.14zM15.563 12.5v-.938h4.874v.938a2.438 2.438 0 0 1-1.132 2.059.562.562 0 0 0-.165.096 2.436 2.436 0 0 1-3.578-2.155zM18 16.063c.32 0 .635-.043.938-.126V21.5a.188.188 0 0 1-.188.188H5.25a.187.187 0 0 1-.188-.188v-5.563A3.56 3.56 0 0 0 9 14.42a3.56 3.56 0 0 0 5.52.598c.182-.183.343-.383.48-.598a3.561 3.561 0 0 0 3 1.642zm-3.563-4.5v.937a2.438 2.438 0 1 1-4.874 0v-.938h4.874zm-6 .937v-.938H3.564v.938a2.437 2.437 0 0 0 1.132 2.059.562.562 0 0 1 .166.096A2.438 2.438 0 0 0 8.438 12.5z' fill='%23000'/%3E%3C/svg%3E" alt="" />
                <p>Express Store Pickup</p>
            </div>
            <div>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.367 4.367a.187.187 0 0 1 .133-.054h15a.188.188 0 0 1 .188.187V10c0 7.475-6.33 9.962-7.635 10.395l-.006.002a.145.145 0 0 1-.094 0l-.006-.002c-1.305-.433-7.634-2.92-7.634-10.395V4.5c0-.05.02-.097.054-.133zm.133-1.18A1.313 1.313 0 0 0 3.187 4.5V10c0 8.273 7.032 11.006 8.403 11.462.266.09.554.09.82 0 1.371-.456 8.402-3.19 8.402-11.462V4.5A1.313 1.313 0 0 0 19.5 3.187h-15zm12.013 6.22a.563.563 0 0 0-.776-.814l-5.112 4.88-2.362-2.255a.563.563 0 0 0-.776.814l2.75 2.625c.217.207.559.207.776 0l5.5-5.25z' fill='%23000'/%3E%3C/svg%3E" alt="" />
                <p>Secure Payment</p>
            </div>
        </div>
        </div>
       
                        
            </div>
            {/* <div className='loader'>Loading...</div> */}
{/* } */}
        </div>
    )
}

export default SingleProduct
