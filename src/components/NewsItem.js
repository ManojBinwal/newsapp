import React from 'react'

const NewsItem = (props) => {

    let  { title, description, imageUrl, newsUrl, date, author, source } = props ;
    return (
        <div className='my-3'>
            <div className="card" >
                <div> <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    {source}
                </span></div>
                <img src={imageUrl ? imageUrl : "https://cdn.vox-cdn.com/thumbor/AzUxs8UmwIY2lOByn5LIX8geWjY=/0x0:2200x1650/1200x628/filters:focal(1100x825:1101x826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24835037/PayPal_stablecoin.png"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">{author ? author : "Unknown"}</small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">{new Date(date).toGMTString()}</small>
                </div>
            </div>
        </div>
    )
}

export default NewsItem