import React, { useEffect, useState } from 'react'

const Movies = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    fetch("https://dummyapi.online/api/movies").then((result)=> {
    result.json().then((resp)=>{
      // console.log("result", resp)
      setData(resp)
    })
  }) 
  },[])
  // console.log(data)
  return (
    <div>
      <p className='h1 text-center mt-3'>Movie List</p>
      {
        data.map((item)=> {
          return(
            <div className="card" style={{ width: '18rem', display: "inline-block" }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.movie}</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Movies
