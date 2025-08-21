import React from 'react'

const Bloge = ({item,HandelClick}) => {
    const {heading,author_name, author_read_time,} = item
  return (
    <div >
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <img src="" alt="" />
                        <h3>{author_name}</h3>
                    </div>
                    <div>
                        <button>
                            <h3 onClick={()=> HandelClick(author_read_time)}>
                              Read time:{author_read_time}minit
                            </h3>
                        </button>
                        
                    </div>
                </div>
                <h2 className="card-title">{heading}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <button onClick={()=>HandelClick(item)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>
            </div>
        </div>
    </div>
  )
}

export default Bloge