import {useEffect, useState} from 'react'
import api from "./plugins/axios.ts";
import './App.css'

function App() {
    const [customer, setCustomer] = useState([])
    const getCustomer = async () => {
        try {
            const {data} = await api.get('/customers')
            setCustomer(data.data)
        } catch (e){
    }
}
    useEffect(()=>{
        getCustomer()
    },[]);
    console.log(customer, 'data')
  return (
    <>
        <h2>React - Lesson 41</h2>

    </>
  )
}

export default App
