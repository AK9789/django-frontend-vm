import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Tpp = () => {
    const history = useHistory()
    let { id } = useParams();

    const[name, setName] = useState("")
    const[bankName, setBankName] = useState("")
    const[ifsc, setIfsc] = useState("")
    const[accountNo, setAccountNo] = useState("")
    const[branch, setBranch] = useState("")
    const [specificUser, setSpecificUser] = useState({});

    useEffect(()=>{
        axios.get(`http://34.201.5.35:450/api/user-specific/${id}/`).then((response)=>{
            setSpecificUser(response.data)
            console.log(response.data)
        })
      },[])


    const register = ()=>{
        const data = {
            "T_name":name,
            "T_bankName":bankName,
            "T_ifsc":ifsc,
            "T_accountNo":accountNo,
            "T_branch":branch,
        }
        axios.post("http://34.201.5.35:450/api/user-create/",data).then((response)=>{
            console.log(response)
            alert('submitted')
        })
    }
  return (
    <div>
        <div className="container">
            <div className="login__main">
                <div className="login">
                    <div className="login__box">
                        <form >
                            <input name='name' required type="text" className="input__feild feild" placeholder="name" onChange={(event)=>{setName(event.target.value)}}/>
                            <input name='bankname' required type="text" className="input__feild feild" placeholder="bankname" onChange={(event)=>{setBankName(event.target.value)}}/>
                            <input name='ifsc' required type="text" className="input__feild feild" placeholder="ifsc" onChange={(event)=>{setIfsc(event.target.value)}}/>
                            <input name='accountno' required type="text" className="input__feild feild" placeholder="accountNo" onChange={(event)=>{setAccountNo(event.target.value)}}/>
                            <input name='branch' required type="text" className="input__feild feild" placeholder="branch" onChange={(event)=>{setBranch(event.target.value)}}/>
                            <button className="submit__feild feild" onClick={register} style={{ background: "#063970" }}>Register</button>
                        
                        </form>
                            {/* <button className="submit__feild feild" style={{ background: "#063970" }} onClick={hello}>Login</button> */}
                    </div>
                </div>
        
            </div>
            
        </div>
    </div>
  )
}

export default Tpp