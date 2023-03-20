// import React, { Component } from 'react'

const Newsitem = (props)=> {
  
   let {title, description, imageUrl, newsUrl,author, date,source } = props
    return (

        <div>

        <div className="card  my-3 ">
         <div style = {{ 
          display:"flex",
          justifyContent:"flex-end",
          position:"absolute",
          right:"0"
         }
         }>

        
        <span className=" badge rounded-pill bg-danger" style={{left:"90%" ,zIndex:"1"}}>{source} </span>

        </div>
  <img src = {!imageUrl?"https://c.ndtvimg.com/2022-12/45is488o_elon-musk-twitter-poll-ended-with-users-seeking-his-departure_625x300_19_December_22.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-danger"> By {!author?"unknow":author} on {new Date(date).toGMTString()} </small></p>
    <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

</div>
      
    )
  
}

export default Newsitem
