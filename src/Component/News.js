// For class based component News-app


import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
         
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category:"general"
  }

   
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string

  }

  captializeFirstLetter = (string)=>{
             return string.charAt(0).toUpperCase() + string.slice(1);
  }
   
 constructor(props){
    super(props);
    // console.log("Hello I am a constructor from News component");
    this.state = {
        articles:[],
    loading:false,
       page:1,
       totalResults:0  
    }
    document.title = `${this.captializeFirstLetter(this.props.category)}- NewsApp`;
 }

 async updateNews(){
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page} &pageSize=${this.props.pageSize}`;
     
  this.setState({loading:true});
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json();
  this.props.setProgress(70);
  console.log( parsedData);
  this.setState({articles:parsedData.articles,
   totalResults:parsedData.totalResults,
    loading:false,
     
})
this.props.setProgress(100);
 }


   async componentDidMount(){
    //  console.log("cdm");
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe83ea86477c467db70ff7976330a2b2&page=1 &pageSize=${this.props.pageSize}`
     
    //  this.setState({loading:true});
    //  let data = await fetch(url);
    //  let parsedData = await data.json();
    //  console.log( parsedData);
    //  this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    // loading:false})
    this.updateNews();
   }


  handlePrevClick = async()=>{
  //   console.log("previous");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe83ea86477c467db70ff7976330a2b2&page=${this.state.page - 1}& pageSize=${this.props.pageSize}`
  //   this.setState({loading:true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log( parsedData);
   

  //   this.setState({
  //    page:this.state.page - 1,
  //    articles:parsedData.articles,
  //    loading:false
  //  })
     this.setState({page:this.state.page - 1});
     this.updateNews();
  }

  handleNextClick = async()=>{
  //   console.log("next");
  //  if (!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))) {
    
   
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe83ea86477c467db70ff7976330a2b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

  //    this.setState({loading:true});
  //    let data = await fetch(url);
  //    let parsedData = await data.json();
    
    

  //    this.setState({
  //     page:this.state.page + 1,
  //     articles:parsedData.articles,
  //     loading:false
  //   })
  // }

  this.setState({page:this.state.page + 1});
  this.updateNews();
  }

  // Infinite scroll
 fetchMoreData = async() => {

   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e61bba6573f84bfcb1b59036128ef0a8&page=${this.state.page+1} &pageSize=${this.props.pageSize}`;
   this.setState({page:this.state.page + 1});
     
    // this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
     totalResults:parsedData.totalResults,
      loading:false,
       
  })
  }

 

  render() {
    return (
      <>
       {/* <div className='container my-3'> */}
        <h1 className=' text-center' style={{marginTop:"90px"}}>NewsUpdate - Top {this.captializeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
     
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
        <div className="row ">
        { this.state.articles.map((element)=>{
             return    <div className="col-md-4"  key = {element.url}>
             
                 <Newsitem title = {element.title?element.title:""} description={element.description?element.description:""}  imageUrl = {element.urlToImage} newsUrl = {element.url} author ={element.author} date ={element.publishedAt} source ={element.source.name}/>
                 </div>
            })}
           
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between my-3">
            <button disabled = {this.state.page<=1} type="button" onClick = {this.handlePrevClick} className="btn btn-outline-dark">&larr; Previous</button>
            <button disabled= {this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button"onClick = {this.handleNextClick}  className="btn btn-outline-dark">Next 	&rarr;</button>
            </div> */}
     </>
    )
  }
}

export default News
           



// Function based component

// import React, {useEffect, useState} from 'react'

// import NewsItem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props)=>{
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
    
//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     } 

//     const updateNews = async ()=> {
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
//         setLoading(true)
//         let data = await fetch(url);
//         props.setProgress(30);
//         let parsedData = await data.json()
//         props.setProgress(70);
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
//         updateNews(); 
//         // eslint-disable-next-line
//     }, [])


//     const fetchMoreData = async () => {   
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1) 
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };
 
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>
//             </>
//         )
    
// }


// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
//   }
  
//   News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }


       
// export default News
        

     
