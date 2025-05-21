import { useState, useEffect, useCallback } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const generateRandomUser = useCallback(async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1');
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setUsers((prevUsers) => [...prevUsers, data.results[0]]);
      }
    } catch (error) {
      console.error("Error al generar usuario aleatorio:", error);
    }
  }, []);

  const addUser = useCallback((user) => {
    const newUser = {
      login: { uuid: Date.now().toString() },
      name: { 
        title: 'Mr', 
        first: user.firstName, 
        last: user.lastName 
      },
      email: `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@example.com`,
      phone: '(555) 123-4567',
      location: {
        city: 'Ciudad Ejemplo',
        country: 'País Ejemplo'
      },
      picture: {
        large: '/api/placeholder/128/128',
        medium: '/api/placeholder/96/96',
        thumbnail: '/api/placeholder/48/48'
      }
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  const deleteUser = useCallback((uuid) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.login.uuid !== uuid));
  }, []);

  const editUser = useCallback((uuid, updatedUser) => {
    setUsers((prevUsers) => 
      prevUsers.map(user => 
        user.login.uuid === uuid ? { ...user, ...updatedUser } : user
      )
    );
  }, []);

  return { users, addUser, deleteUser, editUser, generateRandomUser };
};

export default useUsers;