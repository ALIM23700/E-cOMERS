import React, { useState } from 'react';

const Admin = ({ items, handleAddItem, handleRemoveItem }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    price: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleAdd = () => {
    if (newItem.title && newItem.price && newItem.image) {
      handleAddItem(newItem);
      setNewItem({ title: '', price: '', image: '' }); // Clear the form after adding
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <div className="add-item-form mb-5">
        <input
          type="text"
          name="title"
          placeholder="Item Name"
          value={newItem.title}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="price"
          placeholder="Item Price"
          value={newItem.price}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newItem.image}
          onChange={handleInputChange}
          className="input-field"
        />
        <button
          onClick={handleAdd}
          className="mt-3 bg-blue-500 text-white rounded px-6 py-2"
        >
          Add Item
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-3">Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item-card flex justify-between mb-3">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded mr-3"
              />
              <span>{item.title}</span>
            </div>
            <button
              onClick={() => handleRemoveItem(item.title)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
