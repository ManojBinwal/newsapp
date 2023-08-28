import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = this.capitalize(`${this.props.category} - NewsDonkey`)
  }
  capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  }

  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.props.setProgress(100)
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })
  };

  render() {
    return (
      <>
        <h2 className='text-center my-4'>NewsDonkey - Top {this.capitalize(`${this.props.category}`)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    key={element.url}
                  />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
