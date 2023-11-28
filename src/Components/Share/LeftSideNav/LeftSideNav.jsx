import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftSideNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-2">All Categories</h2>
      <div className="space-y-6">
        {categories.map((categoriy) => (
          <NavLink
            className="block ml-4 text-xl font-semibold"
            key={categoriy.id}
            to={`/category/${categoriy.id}`}
          >
            {categoriy.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
