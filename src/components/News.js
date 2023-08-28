import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    apiKey: "fe07c651e81947ab852ed91aeef51599",
    category: "general"

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
    apiKey: PropTypes.string.isRequired,
    category: PropTypes.string,
  }

  //define constructor
  constructor(props) {
    super(props);
    // console.log("Hello I am a contructor for the news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 20
    }
    document.title = this.capitalize(`${this.props.category} - NewsDonkey`)
  }
  capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  }
  //asycronous function to fetch api call using componentDidMount
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

  }

  handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log("next" + this.state.page)
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }

  handlePrevClick = async () => {
    // console.log("prev" + this.state.page)
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }
  showTotalResults = () => {
    console.log(this.state.totalResults)
  }
  render() {
    return (
      this.state.loading ?
        <Spinner /> :
        <div className='container my-3 '>
          <div className='d-flex justify-content-center'><h2 ><strong>NewsDonkey - Top {this.capitalize(`${this.props.category}`)} Headlines</strong> </h2></div>
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} rel="noreferrer" type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; prev</button>
            <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize) - 1} rel="noreferrer" type="button" className="btn btn-dark" onClick={this.handleNextClick} > next &rarr;</button>
          </div>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {

              return (<div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              )
            })}
          </div>
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} rel="noreferrer" type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; prev</button>
            <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize) - 1} rel="noreferrer" type="button" className="btn btn-dark" onClick={event => (this.handNextClick, this.showTotalResults)} > next &rarr;</button>
          </div>
        </div>
    )
  }
}

export default News
