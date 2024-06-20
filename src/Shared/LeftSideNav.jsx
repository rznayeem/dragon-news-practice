import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('../../public/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="sticky top-0 absolute">
      <h3 className="font-semibold text-xl mb-5">All Category</h3>
      <div className="bg-[#F3F3F3] font-semibold text-xl text-center py-4 rounded-md">
        <h3>National News</h3>
      </div>
      <div>
        {categories.map(category => (
          <Link
            className="block mt-[30px] pl-12 text-[#9F9F9F] text-xl font-medium"
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
