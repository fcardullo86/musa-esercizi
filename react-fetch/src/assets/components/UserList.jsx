import { useState, useEffect } from 'react';
import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false); 

      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        setIsError(true); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchUsers();
  }, []); 

  return (
    <div>
      <h2>Lista Utenti</h2>
      {isLoading && <p>Caricamento...</p>}

      {isError && (
        <p>
          Si è verificato un errore durante il caricamento degli utenti.
        </p>
      )}

      {!isLoading && !isError && (
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street} ${user.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
  );
};

export default UserList;