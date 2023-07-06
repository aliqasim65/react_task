import React, { useState } from 'react';
import './App.css';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Ali Qasim', phoneNumber: '03452501255' },
    { id: 2, name: 'Owais Anis', phoneNumber: '03002244876' },
    { id: 3, name: 'Muhammad Fayzan', phoneNumber: '03478945186' },
    { id: 4, name: 'Saad Ali', phoneNumber: '03242447689' },
    { id: 5, name: 'Ali Amini', phoneNumber: '03057655441' },
    { id: 6, name: 'Talha Khan', phoneNumber: '03004586941' },
  ]);

  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    phoneNumber: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };

  const handleAdd = () => {
    setData([...data, newItem]);
    setNewItem({ id: '', name: '', phoneNumber: '' });
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setNewItem(data[index]);
  };

  const handleUpdate = () => {
    const updatedData = [...data];
    updatedData[editIndex] = newItem;
    setData(updatedData);
    setNewItem({ id: '', name: '', phoneNumber: '' });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((item, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        <div className='align'>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={newItem.id}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={newItem.phoneNumber}
          onChange={handleInputChange}
        />
      </div>

      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add New Member</button>
      )}
      </div>
    </div>
  );
};

export default Table;
