import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="user-list">
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}> {/* Tạo đường dẫn động */}
            <h2>{user.first_name} {user.last_name}</h2>
            <p className="">{user.email}</p>
            <img src={user.avatar} alt={user.first_name} />
          </Link>
        </div>
      ))}
    </div>
      <div className="per-page">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UserList;