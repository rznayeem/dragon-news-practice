import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const News = ({ aNews }) => {
  const { _id, author, title, details, image_url } = aNews;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="space-y-4 mb-10"
      data-aos="zoom-out-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="flex justify-between p-4 bg-[#F3F3F3]">
        <div className="flex items-center gap-2">
          <img className="w-10 rounded-full" src={author.img} alt="" />
          <div className="">
            <h3>{author.name}</h3>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>logo</div>
      </div>
      <h2>{title}</h2>
      <img src={image_url} alt="" />
      <p>{details.slice(0, 200)}</p>
    </div>
  );
};

News.propTypes = {
  aNews: PropTypes.shape({
    _id: PropTypes.any,
    auhtor: PropTypes.any,
    author: PropTypes.shape({
      img: PropTypes.any,
      name: PropTypes.any,
      published_date: PropTypes.any,
    }),
    details: PropTypes.shape({
      slice: PropTypes.func,
    }),
    image_url: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default News;
