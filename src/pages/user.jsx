import axios from 'axios';
import React from 'react';
const Userinput = ()=>{
    const [input,setInput] = React.useState({
        name:"",
        date: "",
        purpose:"",
        status:"pending",
        amount:""
    })
    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = ()=>{
        const config = {
            method: 'POST',
            url: 'http://localhost:3000/items',
            data:input
        }
        return axios(config)
    }
    return (
        <div style={{width:'600px', height:'500px',display:'flex',flexDirection:'column',padding:'1rem',margin:'1rem',border:'1px solid black',margin:'auto',marginTop:'150px'}}>
            <input style={{width:'90%',height:'70px',marginTop:'20px'}} type="text" placeholder="Enter your name" name="name" value={input.name} onChange={handleChange} />
            <input style={{width:'90%',height:'70px',marginTop:'20px'}} type="number" placeholder="Enter your date" name="date" value={input.date} onChange={handleChange}/>
            <input style={{width:'90%',height:'70px',marginTop:'20px'}} type="text" placeholder="Enter your purpose" name="purpose" value={input.purpose} onChange={handleChange}/>
            <input style={{width:'90%',height:'70px',marginTop:'20px'}} type="number" placeholder="Enter your amount" name="amount" value={input.amount} onChange={handleChange}/>
            <button style={{width:'90%',height:'70px',marginTop:'20px'}} onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Userinput;