import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] flex p-4 my-5 rounded-lg">
      <button className="btn btn-secondary">Latest</button>
      <Marquee speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
