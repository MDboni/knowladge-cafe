import { useEffect, useState } from "react"


const SecondPage = () => {
    const [ dataa,setDataa ] = useState([])
    const [book,setBook] = useState([])

    const Handele = add =>{
        console.log(add);
        
        const newBok = [...book, add] 
        setBook(newBok)

    }

    useEffect(()=>{
        fetch('fake.json')
        .then(res=> res.json())
        .then(data => setDataa(data))
    },[])

  return (
    <div className="flex gap-3">
        <div className="w-3/5">

           {
            dataa.map(item=> (

                <div key={item.id} className="card bg-base-100  shadow-sm">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.heading}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                        <button onClick={()=>Handele(item.heading)} className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))
           }

        </div>
        
        <div className="w-2/5 border-3">
           
           <h3>
             {book}
           </h3>
        </div>
    </div>
  )
}

export default SecondPage