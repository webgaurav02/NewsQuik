import { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import HeaderNews from "../HeaderNews/HeaderNews";
import "./News.css";
import InfiniteScroll from "react-infinite-scroll-component";
// import articles_json from "../../sample.json"



export default class News extends Component {

  API_KEY_1 = process.env.REACT_APP_NEWS_API_1;
  API_KEY_2 = process.env.REACT_APP_NEWS_API_2;

  constructor() {
    super();
    this.state = {
      articles_1: [],
      articles_2: [],
      query: '',
      isLoading: false,
      resLength: 0,
      nextPage: '',
      fetchCount: 0,
      maxFetchCount: 2,
    };
  }


  handleCategory = async (e) => {
    this.setState({ isLoading: true });
    let text = e.target.innerHTML;
    let category = text.trim().toLowerCase();
    try {
      let url_1 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&country=in&language=en&category=${category}&size=9&image=1`;
      let data_1 = await fetch(url_1);
      let parsedData_1 = await data_1.json();
      this.setState(
        {
          articles_1: parsedData_1.results,
          isLoading: false,
          resLength: parsedData_1.totalResults,
          nextPage: parsedData_1.nextPage,
          fetchCount: 1,
        }
      );
      // this.setState({ articles_2: articles_json.results });
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  handleQuery = async () => {
    this.setState({ isLoading: true });
    let text = document.getElementById("querySearch").value;
    let query = text.toLowerCase()
    this.setState({ isLoading: true });
    try {
      let url_1 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&country=in&language=en&size=9&image=1&q=${query}`;
      let data_1 = await fetch(url_1);
      let parsedData_1 = await data_1.json();
      this.setState(
        {
          articles_1: parsedData_1.results,
          query: query,
          isLoading: false,
          resLength: parsedData_1.totalResults,
          nextPage: parsedData_1.nextPage,
          fetchCount: 1,
        }
      );
      // this.setState({ articles_2: articles_json.results });
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchMoreData = async () => {
    // console.log("Fetching more data...");
    if (this.state.articles_1.length === this.state.resLength) {
      this.setState(
        {
          isLoading: false,
        }
      )
      return;
    }
    let url = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&country=in&language=en&size=9&image=1${(this.state.query !== '') ? `&q=${this.state.query}` : ''}&page=${this.state.nextPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("API Response:", parsedData);
    setTimeout(() => {
      this.setState(
        {
          articles_1: [...this.state.articles_1, ...parsedData.results],
          // isLoading: false,
          resLength: parsedData.totalResults,
          nextPage: parsedData.nextPage,
          fetchCount: this.state.fetchCount + 1,
        }
      );
      // console.log(this.state.nextPage);
    }, 500);
  }




  componentDidMount() {

    const getArticles1 = async () => {
      this.setState({ isLoading: true });
      try {
        let url_1 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_1}&language=en&country=in&category=top&size=9&image=1`;
        let data_1 = await fetch(url_1);
        let parsedData_1 = await data_1.json();
        this.setState(
          {
            articles_1: parsedData_1.results,
            isLoading: false,
            resLength: parsedData_1.totalResults,
            nextPage: parsedData_1.nextPage,
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
        let url_2 = `https://newsdata.io/api/1/news?apikey=${this.API_KEY_2}&language=en&image=1`;
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
        <div className="search-bar">
          <input
            id="querySearch"
            className="form-control me-2"
            type="text"
            placeholder="Eg: 'cricket'"
          />
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={() => this.handleQuery()}
          >Search
          </button>
        </div>
        <div className="container-fluid cat-container">
          <ul className="category-container">
            <li className="category" onClick={this.handleCategory}> Sports </li>
            <li className="category" onClick={this.handleCategory}> Business </li>
            <li className="category" onClick={this.handleCategory}> Entertainment </li>
            <li className="category" onClick={this.handleCategory}> Science </li>
            <li className="category" onClick={this.handleCategory}> Politics </li>
            <li className="category" onClick={this.handleCategory}> Technology </li>
            <li className="category" onClick={this.handleCategory}> Health </li>
          </ul>
        </div>
        <hr />

        <div className="news-items">
          <InfiniteScroll
            dataLength={this.state.resLength}
            next={this.fetchMoreData}
            hasMore={(this.state.fetchCount < this.state.maxFetchCount)}
            loader={<span className="loader"></span>}
          >
            {this.state.isLoading && <span className="loader"></span>}
            {!this.state.isLoading && <div className="container my-3 row">
              {this.state.articles_1.map((ele) => (
                <div key={ele.article_id} className="col-md-4">
                  <NewsItem
                    title={ele.title}
                    imageUrl={!ele.image_url ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" : ele.image_url}
                    newsUrl={ele.link}
                    sourceId={ele.source_id}
                  />
                </div>
              ))}
            </div>}
          </InfiniteScroll>
        </div>





        {/* {this.state.isLoading && <span className="loader"></span>}
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
        </div>} */}
      </div>
    );
  }
}