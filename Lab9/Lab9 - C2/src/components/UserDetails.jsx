import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();
      setUserDetails(data.data);
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  };

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <h2>{userDetails.first_name} {userDetails.last_name}</h2>
        <p className="">{userDetails.email}</p>
        <img src={userDetails.avatar} alt={userDetails.first_name} />
      </div>
    </div>
  );
}

export default UserDetail;
