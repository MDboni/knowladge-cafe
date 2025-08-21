import { useEffect, useState } from "react"
import Bloge from "../Components/Bloge"
import Bookmarks from "../Components/Bookmarks"

const HomePage = () => {
    const [bloge,setBloge] = useState([])
    const [bookmarks,setBookmarks] = useState([])
    const [timee,setTiem] = useState(0)

    const HandelClick = loge => {
        console.log('handel click work',loge);
        const newBookmark = [...bookmarks,loge]
        setBookmarks(newBookmark)
        
    }

    const ReadingHandel = time => {
        setTiem(timee+ time)
    }


    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=> setBloge(data))
    },[])

  return (
    <div className="mx-10">
        <div className="flex justify-center mx-auto ">
            <div className="w-[70%]">
                
                {
                    bloge.map(item => <Bloge 
                        key={item.id}
                        item={item}
                        HandelClick={HandelClick}
                        ReadingHandel={ReadingHandel}
                    ></Bloge>)
                }
                
            </div>

            <div className="w-[25%] border-2 ml-10">
                <Bookmarks 
                    item={bookmarks} 
                    time={timee}
                />
            </div>
        
       </div>
    </div>
  )
}

export default HomePage