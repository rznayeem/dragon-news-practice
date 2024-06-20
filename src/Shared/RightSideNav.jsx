import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const RightSideNav = () => {
  return (
    <div className="sticky top-0 absolute">
      <h3 className="font-semibold text-xl mb-5">Login With</h3>
      <button className="btn btn-outline btn-info w-full mb-5">
        <FaGoogle />
        Login With Google
      </button>
      <button className="btn btn-outline w-full">
        <FaGithub />
        Login With Github
      </button>
    </div>
  );
};

export default RightSideNav;
