import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  
  static defaultProps={
    country:'us',
    pageSize:8,
    category:'general',
  }

  staticpropTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  constructor(){
    super()
    this.state={
        articles:[],
        page: 1,
        load:false,
       
    };
  }

  async componentDidMount()
  {    this.setState({ load: true })


     let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=2cac0b51810f44dbae3ed3644d2c9aad&page=1&pageSize=${this.props.pageSize}`
     let data=await fetch(url)
     let d=await data.json()
     console.log(d)
     this.setState({articles:d.articles,totalResults:d.totalResults,load:false})
  }

  previousfuntion=async()=> {
    this.setState({ load: true })
    if( this.state.page>1)
    {
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=2cac0b51810f44dbae3ed3644d2c9aad&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        let data=await fetch(url)
        let d=await data.json()
        console.log(d)
        this.setState({
            page:this.state.page-1,
            articles:d.articles,
          load:false})
    
    }
    
  }

  nextfuntion=async()=>{
   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
   {



    this.setState({ load: true })
    console.log('next')
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=2cac0b51810f44dbae3ed3644d2c9aad&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
     let data=await fetch(url)
     let d=await data.json()
     console.log(d)
     this.setState({
         page:this.state.page+1,
         articles:d.articles,
         load:false,})
        
}
 
  }

  render() {
    return (
      <div className='container my-3'>
        <h5 className='my-5 text-center'>WorldView-Your daily news update</h5>
     <div className='text-center'>{this.state.load && <Spinner/>}</div> 
        <div className='row'>
         {!this.state.load && this.state.articles.map((el)=>{
             return (
                <div className="col-md-4" key={el.url}> 
            <NewsItem title={el.title} description={el.description} imageurl={el.urlToImage} url={el.url} author={el.author} publishedAt={el.publishedAt}
            source={el.source}/>
           
            </div>
            );
         })}
         
        </div>
        <div className='d-flex justify-content-between'>
<button disabled={this.state.page<=1} type='button' onClick={this.previousfuntion} className='btn btn-sm btn-dark'>
       &larr;previous
    </button>
    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextfuntion} className='btn btn-sm btn-dark'>
      Next &rarr; 
    </button>
    </div>
      </div>
    )
  }
}

export default News
