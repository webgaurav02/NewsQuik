import { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import HeaderNews from "../HeaderNews/HeaderNews";
import "./News.css";
// import articles_json from "../../sample.json"



export default class News extends Component {

  API_KEY_1 = process.env.REACT_APP_NEWS_API_1;
  API_KEY_2 = process.env.REACT_APP_NEWS_API_2;

  constructor() {
    super();
    this.state = {
      articles_1: [],
      articles_2: [],
      isLoading: false,
    };
  }

  handleCategory = async (e) => {
    this.setState({ isLoading: true });
    let text = e.target.innerHTML;
    let category = text.split(' ')[2].toLowerCase();
    try {
      let url_1 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&language=en&category=${category}&size=9`;
      let data_1 = await fetch(url_1);
      let parsedData_1 = await data_1.json();
      this.setState(
        {
          articles_1: parsedData_1.results,
          isLoading: false,
        }
      );
      // this.setState({ articles_2: articles_json.results });
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  componentDidMount() {

    const getArticles1 = async () => {
      this.setState({ isLoading: true });
      try {
        let url_1 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_1}&language=en&country=in&category=top&size=9`;
        let data_1 = await fetch(url_1);
        let parsedData_1 = await data_1.json();
        this.setState(
          { 
            articles_1: parsedData_1.results,
            isLoading: false
          }
        );
        // this.setState(
        //   {
        //     articles_1: articles_json.results,
        //     isLoading: false
        //   }
        // );
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const getArticles2 = async () => {

      try {
        let url_2 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&language=en`;
        let data_2 = await fetch(url_2);
        let parsedData_2 = await data_2.json();
        this.setState({ articles_2: parsedData_2.results });
        // this.setState({ articles_2: articles_json.results });
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getArticles1();
    getArticles2();

  }


  render() {
    const headerNewsComponent = this.state.articles_2.length > 0 ? <HeaderNews articles={this.state.articles_2} /> : null;

    return (
      <div className="news mt-5 container-fluid">
        {headerNewsComponent}
        <h1 className="top-headlines">Top Headlines</h1>
        <div className="category-container container-fluid">
          <span className="category" onClick={this.handleCategory}> &#x2B29; Sports </span>
          <span className="category" onClick={this.handleCategory}> &#x2B29; Business </span>
          <span className="category" onClick={this.handleCategory}> &#x2B29; Entertainment </span>
          <span className="category" onClick={this.handleCategory}> &#x2B29; Science </span>
          <span className="category" onClick={this.handleCategory}> &#x2B29; Politics </span>
          <span className="category" onClick={this.handleCategory}> &#x2B29; Technology </span>
          <span className="category" onClick={this.handleCategory}> &#x2B29; Health </span>
        </div>
        <hr />
        {this.state.isLoading && <span className="loader"></span>}
        {!this.state.isLoading && <div className="container my-3 row">
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
        </div>}
      </div>
    );
  }
}