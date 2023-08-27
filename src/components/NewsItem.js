import React, { Component } from 'react'


export class NewsItem extends Component {
    constructor() {
        super();
        // console.log("Hello I'm a news-item constructor")
    }

    render() {
        let { title, description, imageUrl, newsUrl, date, author, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl ? imageUrl : "https://cdn.vox-cdn.com/thumbor/AzUxs8UmwIY2lOByn5LIX8geWjY=/0x0:2200x1650/1200x628/filters:focal(1100x825:1101x826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24835037/PayPal_stablecoin.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1" , left:"90%"}}>
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span> </h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-body-secondary">{author ? author : "Unknown"}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">{new Date(date).toGMTString()}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem