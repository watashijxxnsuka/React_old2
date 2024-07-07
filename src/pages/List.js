import React from 'react';

const User = ({userData}) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    {email: 'joon@gmail.com', name:'한서준'},
    {email: 'hoon@gmail.com', name:'한승훈'},
    {email: 'min@gmail.com', name:'한시우'},
    {email: 'sia@gmail.com', name:'한시아'}
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <User userData={user} />)}
      </tbody>
    </table>
  );
}

export default UserList;