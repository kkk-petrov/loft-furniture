import React from 'react';

import './Category.css';
// import icon from '../../../images/icons/kitchen-icon.svg';

const Category = ({ items }) => {
  return items.map((category) => {
    return (
      <li className="category__list-item category">
        {category.icon ? (
          <div className="category__icon">{category.icon ? category.icon : ''}</div>
        ) : (
          ''
        )}

        <div className={category.color ? 'category__title ' + category.color : 'category__title'}>
          {category.title}
        </div>
        <ul className="category__dropdown"></ul>
      </li>
    );
  });
};

// const Category = (props) => {
//   return (
//     <li className="category__list-item category">
//       {/* <img alt="icon" src={icon} className="category__icon"></img> */}
//       <div className="category__icon">{props.icon}</div>
//       <div className="category__title">{props.title}</div>
//       <ul className="category__dropdown">
//         <li className="category__dropdown-item">
//           <a href="qqq" className="category__dropdown-link">
//             Kuxni1
//           </a>
//         </li>
//       </ul>
//     </li>
//   );
// };

export default Category;
