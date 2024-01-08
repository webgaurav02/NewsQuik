import { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import HeaderNews from "../HeaderNews/HeaderNews";
import "./News.css";
import articles_json from "../../sample.json"



export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles_1: [],
      articles_2: [],
    };
  }


  API_KEY_1 = 'pub_35917f023407a531a3936e1eacf8def474cd6';
  API_KEY_2 = 'pub_360447372493ecd799677cd991f8d8e496c1a';
  // `https://newsdata.io/api/1/news?apikey=${this.API_KEY_1}&language=en&country=in&category=top`
  // `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&language=en`


  componentDidMount() {

    const getArticles1 = async () => {
      try {
        // let url_1 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_1}&language=en&country=in&category=top`;
        // let data_1 = await fetch(url_1);
        // let parsedData_1 = await data_1.json();
        // this.setState({ articles_1: parsedData_1.results });
        this.setState({ articles_1: articles_json.results });
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log("article 1", this.state.articles_1);
    }

    const getArticles2 = async () => {

      try {
        // let url_2 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&language=en`;
        // let data_2 = await fetch(url_2);
        // let parsedData_2 = await data_2.json();
        // this.setState({ articles_2: parsedData_2.results });
        this.setState({ articles_2: articles_json.results });
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log("article 2", this.state.articles_2);
    }

    getArticles1();
    getArticles2();
    
  }

  render() {
    const headerNewsComponent = this.state.articles_2.length > 0 ? <HeaderNews articles={this.state.articles_2} /> : null;

    return (
      <div className="news mt-5">
        {headerNewsComponent}
        <div className="container my-3 row">
        <div className="col-md-9">
            <h1 className="top-headlines">Top Headlines</h1>
            <div className="row">
              {this.state.articles_1.map((ele) => (
                <div key={ele.article_id} className="col-md-4">
                  <NewsItem
                    title={ele.title}
                    description={ele.content}
                    imageUrl={!ele.image_url ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" : ele.image_url}
                    newsUrl={ele.link}
                    sourceId={ele.source_id}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3 top-head-righ p-3">
                <div className="right-headlines">
                  
                </div>
          </div>
        </div>
      </div>
    );
  }
}