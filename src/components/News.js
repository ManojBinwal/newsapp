import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kevin Hurler",
      "title": "SEC Reportedly Asked Coinbase to Halt All Trading—Except for Bitcoin",
      "description": "Coinbase’s CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities & Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. According to Armstrong, the suggestion came just before the SEC sue…",
      "url": "https://gizmodo.com/sec-asked-coinbase-to-halt-trading-except-for-bitcoin-1850691411",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76f95899df261776c441932b344183f1.jpg",
      "publishedAt": "2023-07-31T14:55:00Z",
      "content": "Coinbases CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities &amp; Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. Acco… [+1850 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Cheryl Eddy",
      "title": "Everyone's Favorite Knife-Wielding Robot Returns in Next Week's Futurama",
      "description": "Futurama’s new season continues its examination of 3023 by way of 2023 with next week’s “How the West Was 1010001,” which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze. Like most places they visit, they encounter absurdities…",
      "url": "https://gizmodo.com/futurama-hulu-new-ep-3-clips-bitcoin-crypto-wild-west-1850708869",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/11cf0e30bb3cfd27a7b0f55aa6eddfd3.jpg",
      "publishedAt": "2023-08-04T20:45:00Z",
      "content": "Futuramas new season continues its examination of 3023 by way of 2023 with next weeks How the West Was 1010001, which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze.… [+2351 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Emma Roth",
      "title": "PayPal launches PYUSD stablecoin backed by the US dollar",
      "description": "PayPal has launched a stablecoin called PayPal USD, starting today and “rolling out in the coming weeks.” The new stablecoin can be used for purchases and person-to-person payments.",
      "url": "https://www.theverge.com/2023/8/7/23822752/paypal-pyusd-stablecoin-cryptocurrency",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/AzUxs8UmwIY2lOByn5LIX8geWjY=/0x0:2200x1650/1200x628/filters:focal(1100x825:1101x826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24835037/PayPal_stablecoin.png",
      "publishedAt": "2023-08-07T14:07:51Z",
      "content": "PayPal launches PYUSD stablecoin backed by the US dollar\r\nPayPal launches PYUSD stablecoin backed by the US dollar\r\n / PayPal USD is built on Ethereum and is 1:1 redeemable for US dollars.\r\nPayPal is… [+1960 chars]"
    },
  ]
  constructor(){
    super();
    console.log("Hello I am a contructor for the news component")
    this.state = {
      articles : this.articles ,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3 '>
        <h2>NewsDonkey - Top Headlines</h2>
        <div className="row">
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://media.nbclosangeles.com/2023/07/230725-bronny-james-getty-e1690297157144.jpg?quality=85&strip=all&resize=1200%2C675"  neswsUrl="Todo"/>
          </div>
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          <div className='col-md-4'>
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
