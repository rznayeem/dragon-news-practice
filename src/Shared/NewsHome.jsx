import { useEffect, useState } from 'react';
import News from './News';

const NewsHome = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('news.json')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="max-h-screen">
      <h3 className="font-semibold text-xl mb-5">Dragon News Home</h3>
      <div>
        {news.map(aNews => (
          <News key={aNews._id} aNews={aNews}></News>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
