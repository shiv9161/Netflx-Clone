import React, { useEffect, useState } from 'react'


const Latest = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    getData()
  },[])

  const getData = () => {
    fetch('data.json', {headers : {
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }}).then((response)=> {
      return response.json()
    }).then((myJson) => {
      // console.log(data, "data")
      setData(myJson)
    })
  }

  return (
    <>
     <p>List movies</p>
     {
        data.map((item)=> {
          return(
            <div className="card" style={{ width: '16rem', display: "inline-block" }}>
            <img src={item.image_url} style={{width: '100%'}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
            </div>
          </div>
          )
        })
      }
    </>
  )
}

export default Latest
