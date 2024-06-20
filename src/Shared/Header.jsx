import headerImg from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto mb-5" src={headerImg} alt="" />
      <p className="mb-2">Journalism Without Fear or Favour</p>
      {moment().format('dddd, MMMM DD, YYYY')}
    </div>
  );
};

export default Header;
