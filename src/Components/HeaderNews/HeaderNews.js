

import { Component } from "react";
import "./HeaderNews.css";

export default class HeaderNews extends Component {
  render() {

    let { articles } = this.props;

    return (
      <>
        <div className="container-fluid header-news" style={ {textAlign: 'left' }}>
          <div className="row head-news md-6">
            <div className="col-md-6 news-div header-news-left" style={ {backgroundImage: `url("${ (!articles[0].image_url)?'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg':articles[0].image_url}")`, color: "white"}}>
              <div className="">
                <p className="text source">{articles[0].source_id}</p>
                <h3 className="lines-2 text">{articles[0].title}</h3>
                <p className="lines-2 text">{articles[0].content}</p>
              </div>
            </div>
            <div className="col-md-6 header-news-right" >
              <div className="row news-div rightnews-top bg-warning" style={ {backgroundImage: `url("${ (!articles[1].image_url)?'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg':articles[1].image_url}")`, color: "white"}}>
                <p className="text source">{articles[1].source_id}</p>
                <h3 className="lines-2 text">{articles[1].title}</h3>
                <p className="lines-2 text">{articles[1].content}</p>
              </div>
              <div className="row rightnews-bottom">
                <div className="col-md-6 news-div bg-success" style={ {backgroundImage: `url("${ (!articles[2].image_url)?'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg':articles[2].image_url}")`, color: "white"}}>
                  <p className="text source">{articles[2].source_id}</p>
                  <h3 className="lines-2 text">{articles[2].title}</h3>
                  <p className="lines-2 text">{articles[2].content}</p>
                </div>
                <div className="col-md-6 news-div bg-danger" style={ {backgroundImage: `url("${ (!articles[3].image_url)?'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg':articles[3].image_url}")`, color: "white"}}>
                  <p className="text source">{articles[3].source_id}</p>
                  <h3 className="lines-2 text">{articles[3].title}</h3>
                  <p className="lines-2 text">{articles[3].content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}