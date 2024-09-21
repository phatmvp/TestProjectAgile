import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  const posts = [
    { id: 1, title: "ABC", description: "Description", tags: "HTML, CSS" },
    {
      id: 2,
      title: "XYZ",
      description: "Description",
      tags: "JavaScript, React",
    },
    {
      id: 3,
      title: "123",
      description: "Description",
      tags: "Node.js, Express",
    },
    { id: 4, title: "DEF", description: "Description", tags: "Python, Django" },
    { id: 5, title: "GHI", description: "Description", tags: "Java, Spring" },
    { id: 6, title: "JKL", description: "Description", tags: "C#, .NET" },
  ];

  return (
    <div className="row">
      <h2 className="mb-4">Profile Posts</h2>
      <div className="col-2">
        <h2>Posts</h2>
        <h2>Profile</h2>
      </div>
      <div className="col-10">
        <div className="container">
          <button className="add-new">Add new</button>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.tags}</td>
                  <td>
                    <button className="btn btn-primary btn-sm mr-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Profile;
