import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Poll from '../components/Poll'

const getData = async()=>{
    const res = await axios.get('http://localhost:5000/')
    return res.data
}

const Home = () => {

    const [ data ,setData] = useState([])

    useEffect(()=>{
        getData()
        .then((response)=>{
            setData(response)
        })
    },[])
    console.log(data)
  return (
    <div className="p-10 flex flex-col mx-auto gap-4  sm:w-6/12">
      {data.map( poll=>(
        <Poll pollObj={poll} key={poll._id} />
      ) )}
    </div>
  )
}

export default Home
