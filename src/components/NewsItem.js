import React, { Component } from 'react'
import removeImage from './remove.jpg';
export class NewsItem extends Component {
  render() {
    let{title,description,imageurl,url,author,publishedAt,source}=this.props
    return (
    
    <div>
    <div className='col-lg-12 col-md-12 col-sm-12 m-5'>    
<div className="card">

  <img src={imageurl || removeImage} className="card-img-top" alt=""/>
  
  <div className="card-body">
    <h5 className="card-title"><b>{title?title.slice(0,40):" "}</b></h5>
    <p className="card-text">{description?description.slice(0,80):" "}</p>
    <p>Report By {!author?"International":author},</p>
    <p>{new Date(publishedAt).toLocaleString()}</p>

    <a href={url} className="btn btn-sm btn-dark">Details</a>
    <span className="position-absolute top-0 m-1 p-2 start-0  badge rounded-pill bg-light text-dark">
  {source.name}
  </span>
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
