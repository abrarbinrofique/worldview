import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageurl,url}=this.props
    return (
    
    <div>
    <div className='col-lg-4 col-md-4 col-sm-6 m-5'>    
<div className="card" style={{width:"18rem"}}>
  <img src={imageurl || "https://assets1.cbsnewsstatic.com/hub/i/r/2024/10/06/a3e8c9f9-c684-4354-aed2-700235dd73cc/thumbnail/1200x630/66c704c2e160ba5adc80b684df621ff7/ap24278594336152.jpg?v=0736ad3ef1e9ddfe1218648fe91d6c9b"} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title"><b>{title?title.slice(0,40):" "}</b></h5>
    <p className="card-text">{description?description.slice(0,80):" "}</p>
    <a href={url} className="btn btn-sm btn-dark">Details</a>
  </div>
</div>
</div>

<div className='d-flex justify-content-between'>

  

</div>

      </div>
      
    ) 
  }
}

export default NewsItem
