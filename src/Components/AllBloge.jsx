import React from 'react'

const AllBloge = ({item,Handele}) => {
  return (
    <div>
        
        {
            item.map(item=>(
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.heading} Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                        <button onClick={()=>Handele(item.heading)} className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default AllBloge