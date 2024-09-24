import React, { useState, useEffect } from 'react'; 
import './GalleriesTable.css'; // Custom styles for the table
import { fetchGalleries } from '../api/api'; // Nhập hàm gọi API

const GalleriesTable = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ title: '', tags: '' });

  useEffect(() => {
    const getData = async () => {
      try {
        const galleries = await fetchGalleries();
        setData(galleries);
      } catch (error) {
        console.error('Failed to fetch galleries:', error);
      }
    };

    getData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    console.log('Edit item with id', id);
  };

  return (
    <div className="gallery-container">
      <div className="controls">
        <button className="add-btn">Add new</button>
        <input
          type="text"
          placeholder="Title"
          value={filter.title}
          onChange={(e) => setFilter({ ...filter, title: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Tags"
          value={filter.tags}
          onChange={(e) => setFilter({ ...filter, tags: e.target.value })}
          className="input-field"
        />
      </div>

      <table className="gallery-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.tags.join(', ')}</td> {/* Chuyển mảng tags thành chuỗi */}
              <td>
                <button onClick={() => handleEdit(item.id)} className="action-btn">✏️</button>
                <button onClick={() => handleDelete(item.id)} className="action-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">Phần phân trang</div>
    </div>
  );
};

export default GalleriesTable;
