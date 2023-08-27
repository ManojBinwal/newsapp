import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  //define constructor
  constructor() {
    super();
    // console.log("Hello I am a contructor for the news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:20
    }
  }
  //asycronous function to fetch api call using componentDidMount
  async componentDidMount() {
  
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe07c651e81947ab852ed91aeef51599&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults })
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fe07c651e81947ab852ed91aeef51599&page=${this.state.page + 1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("next" + this.state.page)
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  handlePrevClick = async () => {
    console.log("prev" + this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fe07c651e81947ab852ed91aeef51599&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  showTotalResults = () =>{
    console.log(this.state.totalResults)
  }
  render() {
    return (
      <div className='container my-3 '>
      <div className='d-flex justify-content-center'><h2 ><strong>NewsDonkey - Top Headlines</strong> </h2></div>
        
      <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} rel="noreferrer" type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; prev</button>
          <button  disabled = {this.state.page>Math.ceil(this.state.totalResults/20)-1} rel="noreferrer" type="button" className="btn btn-dark"  onClick={this.handleNextClick} > next &rarr;</button>
        </div>
        <div className="row">
          {this.state.articles.map((element) => {

            return (<div className='col-md-4' key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 49) + ("...") : ""}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>
            )
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} rel="noreferrer" type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; prev</button>
          <button  disabled = {this.state.page>Math.ceil(this.state.totalResults/20)-1} rel="noreferrer" type="button" className="btn btn-dark"  onClick={event =>(this.handNextClick , this.showTotalResults)} > next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
