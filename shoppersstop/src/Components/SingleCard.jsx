import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SingleCard = (props) => {
const router=useNavigate();
  return (
    <div style={{ width: "23%", paddingBottom: "20px", position: "relative", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginBottom: "20px", padding: "5px" }} >
      <Link to={`/single-product/${props.id}`}>
      <img src={props.imgsrc} style={{ width: "100%", height: "273px" }} alt=""  />
      </Link>
      <div style={{ paddingLeft: "5px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600 }}>{props.primary}</h2>
        <p style={{ fontSize: "14.5px", color: "#7A7A7A", marginBottom: "5px" }}>{props.secondary}</p>
        <p style={{ fontSize: "14px", marginBottom: "5px" }}><b>{props.price}   $</b></p>
      </div>
      <div style={{ padding: "4px", position: "absolute", top: "8px", right: "8px", border: "1px solid #d5d5d5", boxShadow: "0px 0px 4px rgb(216 216 216 / 32%);", background: "rgba(255, 255, 255, 0.8)", borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
        <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
      </div>
    </div>

  )
}

export default SingleCard
