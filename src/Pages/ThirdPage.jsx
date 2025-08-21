import { useEffect, useState } from "react"
import AllBloge from "../Components/AllBloge"


const ThirdPage = () => {

const [alluser,setAlluser] = useState([])
const [additem,setAddItem] = useState([])

useEffect(()=>{
    fetch('fake.json')
    .then(res=>res.json())
    .then(data=>setAlluser(data))
},[])

const Handele = add => {
    console.log(add);
    const newItem = [...additem,add]
    setAddItem(newItem) 
}

  return (
    <div className="flex gap-4">
        <div className="w-3/5">
           <AllBloge item={alluser} Handele={Handele}></AllBloge>
        </div>
{/* ............................. */}
        <div className="w-2/5 border-3">
            <h2>
                {
                    <h2>count: {additem.length}</h2>
                },
                {
                    additem.map(item => (
                       <div key={item.id}>
                          <p>{item.heading}</p>
                       </div>
                    ))
                }
            </h2>
        </div>
    </div>
  )
}

export default ThirdPage