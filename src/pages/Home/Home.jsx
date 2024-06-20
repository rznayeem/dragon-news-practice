import BreakingNews from '../../Shared/BreakingNews';
import Header from '../../Shared/Header';
import LeftSideNav from '../../Shared/LeftSideNav';
import Nav from '../../Shared/Nav';
import NewsHome from '../../Shared/NewsHome';
import RightSideNav from '../../Shared/RightSideNav';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Nav></Nav>
      <section className="grid grid-cols-4 gap-6 relative">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <NewsHome></NewsHome>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </section>
    </div>
  );
};

export default Home;
