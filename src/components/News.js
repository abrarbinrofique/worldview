import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor(){
    super()
    this.state={
        articles:[],
        page: 1,
       
    };
  }

  async componentDidMount()
  {
     let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=2cac0b51810f44dbae3ed3644d2c9aad&page=1&pagesize=20"
     let data=await fetch(url)
     let d=await data.json()
     console.log(d)
     this.setState({articles:d.articles,totalResults:d.totalResults})
  }

  previousfuntion=async()=> {

    if( this.state.page>1)
    {
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=2cac0b51810f44dbae3ed3644d2c9aad&page=${this.state.page-1}&pageSize=20`
        let data=await fetch(url)
        let d=await data.json()
        console.log(d)
        this.setState({
            page:this.state.page-1,
            articles:d.articles})
    
    }
    
  }

  nextfuntion=async()=>{
   if(this.state.page+1>Math.ceil(this.state.totalResults/20))
   {


   }
else{

    console.log('next')
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=2cac0b51810f44dbae3ed3644d2c9aad&page=${this.state.page+1}&pageSize=20`
     let data=await fetch(url)
     let d=await data.json()
     console.log(d)
     this.setState({
         page:this.state.page+1,
         articles:d.articles})
}
 
  }

  render() {
    return (
      <div className='container my-3'>
        <h5 className='my-5'>This is a news component</h5>
        <div className='row'>
         {this.state.articles.map((el)=>{
             return (
                <div className="col-md-4" key={el.url}> 
            <NewsItem title={el.title} description={el.description} imageurl={el.urlToImage} url={el.url}/>
            </div>
            );
         })}
         
        </div>
        <div className='d-flex justify-content-between'>
<button disabled={this.state.page<=1} type='button' onClick={this.previousfuntion} className='btn btn-sm btn-dark'>
       &larr;previous
    </button>
    <button onClick={this.nextfuntion} className='btn btn-sm btn-dark'>
      Next &rarr; 
    </button>
    </div>
      </div>
    )
  }
}

export default News
