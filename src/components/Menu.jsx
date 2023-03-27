import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { motion } from "framer-motion";

const GET_MENU_ITEMS = gql`
  query {
    menuItems {
      data {
        id
        attributes {
          title
          url
        }
      }
    }
  }
`;

const Menu = () => {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  const [expandedItems, setExpandedItems] = useState([]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <nav>
      <ul>
        {data.menuItems.data.map((item) => (
          <LinkComp item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

function LinkComp({ item }) {
  const destination = item.attributes.url.startsWith("/")
    ? item.attributes.url
    : `/${item.attributes.url}`;

  const location = useLocation();
  if (location.pathname !== destination) {
    return (
      <motion.div
        layout
        animate={{ opacity: 1 }}
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 1 },
        }}
        exit={{ opacity: 0 }}
      >
        <Link to={destination}>{item.attributes.title}</Link>
      </motion.div>
    );
  }

  return null;
}
