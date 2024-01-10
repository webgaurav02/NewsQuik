import './Footer.css';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="container">
        <div className="above-footer">
        <div>
            <h3>Welcome to NewsQuik - Your Instant News Source 📰</h3>
            <p>Stay informed with the latest headlines from around the globe, curated just for you! NewsQuik is your go-to destination for breaking news, insightful stories, and trending topics.</p>
            <p>Explore diverse perspectives and stay connected to the world with our quick and reliable news updates.</p>
        </div>

        <div>
            <h4>Dive into the Headlines:</h4>
            <p>Quickly access news stories that matter to you. Our platform aggregates headlines from a wide range of sources, ensuring you get a comprehensive overview of current events.</p>
        </div>

        <div>
            <h4>Trending Now:</h4>
            <p>Discover the most talked-about stories and trending topics in real-time. NewsQuik keeps you in the loop with what's capturing the world's attention.</p>
        </div>

        </div>
        <div className="footer-content">
          <p>&copy; 2024 NewsQuik. All rights reserved.</p>
          <p>Developed by <a href="https://joshigaurav.site/" target="_blank" rel="noopener noreferrer">Gaurav Joshi</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
