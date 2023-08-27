import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  //define constructor
  constructor() {
    super();
    console.log("Hello I am a contructor for the news component")
    this.state = {
      articles: [],
      loading: false
    }
  }
  //asycronous function to fetch api call using componentDidMount
  async componentDidMount() {
    console.log("cdm")
    //define url from where json is to fetched
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe07c651e81947ab852ed91aeef51599"
    let data = await fetch(url);
    //get json inside data
    let parsedData = await data.json();
    //get parsed data from data.json
    console.log(parsedData);
    //get article inside array by storing them in articles.
    this.setState({articles: parsedData.articles})
  }
  
  render() {
    return (
      <div className='container my-3 '>
        <h2>NewsDonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {

            return (<div className='col-md-4' key={element.url}>
              <NewsItem 
              title={element.title ? element.title.slice(0,49)+("..."): "" } 
              description={element.description } 
              imageUrl={element.urlToImage} 
              newsUrl={element.url} />
            </div>
            )

          })}
        </div>
      </div>
    )
  }
}

export default News
