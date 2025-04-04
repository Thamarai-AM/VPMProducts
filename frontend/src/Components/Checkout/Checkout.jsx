import React, { useState,useEffect } from "react";
import axios from 'axios'

import './Checkout.css'
const Checkout = () => {
    const userId = localStorage.getItem("profileID");
  const [user, setUser] = useState({ address1: "", address2: "", zipcode: "" });
console.log(user)
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userId}`)
          .then(response => setUser(response.data))
          .catch(error => console.error("Error fetching user data:", error));
      }, [userId]);
    
  return (
    <div>
        <h3></h3>
      {user.address1}
    </div>
  )
}

export default Checkout
