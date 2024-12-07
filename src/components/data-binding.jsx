import React from 'react';
import { useState } from "react";

/*
//const [getter, setter] = useState(initialValue);
//const [name, setName] = useState('John');
//setName("David");  // Valid

export function DataBinding() {
    const [categories, setCategories] = useState(["All", "Electronics", "Footwear"]);
    return (
        <div className="container-fluid">
            <h2>Data Types</h2>
            <ul>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ul>
        </div>
    );
}


/*
//Example (Select Dropdown with Nested Data):
//<label for="username">Username:</label>
//<input type="text" id="username" name="username">

export function DataBinding() {
    var menu = [
        { Category: "Electronics", Products: ["TV", "Mobile"] },
        { Category: "Footwear", Products: ["Boots", "Sneakers"] }
    ];

    return (
        <div className="container-fluid">
            <h2>Data Types</h2>
            <ol>
                {
                    menu.map(item =>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product => <li key={product}>{product}</li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    menu.map(item =>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product => <option key={product}>{product}</option>)
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}


/*
//Nested Iteration
For more complex structures, such as arrays of objects that contain arrays, you can use nested map() calls to iterate over the inner arrays.


export function DataBinding() {
  var menu = [
      { Category: "Electronics", Products: ["TV", "Mobile"] },
      { Category: "Footwear", Products: ["Boots", "Sneakers"] }
  ];

  return (
      <div className="container-fluid">
          <h2>Data Types</h2>
          <ol>
              {
                  menu.map(item =>
                      <li key={item.Category}>
                          {item.Category}
                          <ul>
                              {
                                  item.Products.map(product => <li key={product}>{product}</li>)
                              }
                          </ul>
                      </li>
                  )
              }
          </ol>
      </div>
  )
}


/*
//Array of Objects Binding
Arrays can hold multiple objects. You can use the map() method to iterate over each object in the array.

export function DataBinding() {
  var products = [
      { Name: "TV", Price: 45000 },
      { Name: "Mobile", Price: 12000 }
  ];

  return (
      <div className="container-fluid">
          <h2>Data Types</h2>
          <table className="table table-hover">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      products.map(product =>
                          <tr key={product.Name}>
                              <td>{product.Name}</td>
                              <td>{product.Price}</td>
                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
  )
}

/*
//Objects in JavaScript are collections of key-value pairs. The key is typically a string, and the value can be any type.
export function DataBinding() {
  var product = {
      Name: "Samsung TV",
      Price: 45600.44,
      Stock: true
  }

  return (
      <div className="container-fluid">
          <h2>Data Types</h2>
          <ol>
              {
                  Object.keys(product).map(key => 
                      <li key={key}>{key}: {product[key]}</li>
                  )
              }
          </ol>
      </div>
  )
}

/*
export function DataBinding() {
    var product = {
        Name: "Samsung TV",
        Price: 45600.44,
        Stock: true
    };

    return (
        <div className="container-fluid">
            <h2>Data Types</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product["Price"]}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock === true) ? "Available" : "Out of Stock"}</dd>
            </dl>
        </div>
    );
}


/*
export function DataBinding() {
  const categories = ["All", "Electronics", "Fashion", "Footwear"];

  return (
    <div className="container-fluid">
      <h2>Data Types</h2>
      <ul>
        {categories.map(category => <li >{category}</li>)}
      </ul>
    </div>
  );
}
*/
//categories.map(category => <li> {category} </li>)  // valid

// export function DataBinding() {
//   const categories = ["All", "Electronics", "Fashion", "Footwear"];

//   return (
//     <div className="container-fluid">
//       <h2>Data Types</h2>

//       {/* List view */}
//       <ol>
//         {categories.map((category) => (
//           <li key={category}>{category}</li>
//         ))}
//       </ol>

//       {/* Dropdown list */}
//       <select>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//       <br />

//       {/* Checkbox list */}
//       <ul className="list-unstyled">
//         {categories.map((category) => (
//           <li key={category}>
//             <input type="checkbox" id={category} />
//             <label htmlFor={category}>{category}</label>
//           </li>
//         ))}
//       </ul>
//       <br />

//       {/* Navigation buttons */}
//       <nav className="p-2 border d-flex justify-content-between border-1 border-dark">
//         {categories.map((category) => (
//           <a className="btn btn-dark" key={category} href="#">
//             {category}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// }

