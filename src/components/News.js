import React, { useEffect, useState } from 'react'
import Newitem from './Newitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';

// export class News extends Component {

//   static defaultProps = {
//     country: 'in',
//     pageSize: 6,
//     category: 'general'
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   constructor(props) {
//     super(props);
//     console.log("I am a constructor")
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalize(this.props.category)} - DailyNews`
//   }


//   capitalize = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   async update() {
//     this.props.setProgress(0);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     this.setState({ loading: true })
//     let parseData = await data.json()
//     console.log(parseData)
//     this.props.setProgress(70);
//     this.setState({
//       articles: parseData.articles,
//       totalResults: parseData.totalResults,
//       loading: false
//     })
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.update();
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd2135d91cfa4b77a4a26e029cb42ab0&page=1&pageSize=${this.props.pageSize}`
//     // let data = await fetch(url);
//     // this.setState({loading: true})
//     // let parseData = await data.json()
//     // console.log(parseData)
//     // this.setState({ 
//     //   articles: parseData.articles,
//     //   totalResults: parseData.totalResults,
//     //   loading: false
//     //  })
//   }

//   // Previous = async () => {
//   //   this.update();
//   //   this.setState({ page: this.state.page - 1 })
//   //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd2135d91cfa4b77a4a26e029cb42ab0@page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
//   //   // let data = await fetch(url);
//   //   // this.setState({loading: true})
//   //   // let parseData = await data.json()
//   //   // console.log(parseData)
//   //   // this.setState({
//   //   //   page: this.state.page - 1,
//   //   //   articles: parseData.articles,
//   //   //   loading: false
//   //   // })
//   // }

//   // Next = async () => {
//   //   this.update();
//   //   this.setState({ page: this.state.page + 1 })
//   //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
//   //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd2135d91cfa4b77a4a26e029cb42ab0@page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//   //   //   let data = await fetch(url);
//   //   //   this.setState({loading: true})
//   //   //   let parseData = await data.json()
//   //   //   console.log(parseData)
//   //   //   this.setState({
//   //   //     page: this.state.page + 1,
//   //   //     articles: parseData.articles,
//   //   //     loading: false
//   //   //   })
//   //   // }

//   // }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 })
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     let data = await fetch(url);
//     let parseData = await data.json()
//     console.log(parseData)
//     this.setState({
//       articles: this.state.articles.concat(parseData.articles),
//       totalResults: parseData.totalResults,
//       loading: false
//     })
//   }

//   render() {
//     return (
//       <>
//         <h2 className='my-4 mx-4'>Daily-News Top HeadLines of {this.capitalize(this.props.category)} </h2>

//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={this.state.articles.length < this.state.totalResults ? <Spinner /> : null}
//         >

//           <div className='container'>
//             <div className='row'>
//               {!(this.state.loading) && this.state.articles.map((element) => {
//                 const uniqueKey = uuidv4();
//                 return <div className='col-md-4 my-3' key={uniqueKey}>
//                   <Newitem title={element.title ? element.title.slice(0, 40) : ""} discription={element.description ? element.description.slice(0, 60) : ""}
//                     imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                 </div>
//               })}
//             </div>
//           </div>

//           {/* <div className='container d-flex justify-content-between'>
//           <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.Previous}>&larr; Previous</button>
//           <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} className="btn btn-dark" onClick={this.Next}>Next &rarr;</button>
//         </div> */}

//         </InfiniteScroll>
//       </>
//     )
//   }
// }





const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const update = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    props.setProgress(30);
    setLoading(true)
    let parseData = await data.json()
    console.log(parseData)
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
    
    useEffect(()=>{
      document.title = `${capitalize(props.category)} - DailyNews`
      update();
    },[])
    


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    // setLoading(false)
  }

  return (
    <>
      <h2 className='my-4 mx-4'>Daily-News Top HeadLines of {capitalize(props.category)} </h2>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={articles.length < totalResults ? <Spinner /> : null}
      >

        <div className='container'>
          <div className='row'>
            {!(loading) && articles.map((element) => {
              const uniqueKey = uuidv4();
              return <div className='col-md-4 my-3' key={uniqueKey}>
                <Newitem title={element.title ? element.title.slice(0, 40) : ""} discription={element.description ? element.description.slice(0, 60) : ""}
                  imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>


      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News;
