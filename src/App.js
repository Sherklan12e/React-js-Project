// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/curso/');
        setData(response.data.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Mis Tarjetas</h1>
      <CardList data={data} />
    </div>
  );
}

export default App;
