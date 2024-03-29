import { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {

  render() {
    let { title, imageUrl, newsUrl, sourceId } = this.props;

    return (
      <div className="card my-3">
        <a className="news-click" href={newsUrl} target="_blank" rel="noreferrer" >
          <img
            className="card-img-top"
            src={(imageUrl.includes('cdn.openpr.com')) ? 'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg' : imageUrl}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = 'https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg';
            }}
            alt = "News Thumbnail"
          />
          <div className="card-body">
            <p className="source">{sourceId}</p>
            <div className="lines-3">
              <h5 className="card-title">{title}...</h5>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
