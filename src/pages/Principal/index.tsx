import React, { useEffect, useState } from 'react';
import './style.css';
import { Card, CardProps } from '../../components/index';

type ProfileResponse = {
  name: string,
  avatar_url: string
}

type User = {
  name: string,
  avatar: string
}

export function Principal() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    // fetch("https://api.github.com/users/IsraelKilday")
    //   .then(response => response.json())
    //   .then(data => {
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url
    //     })
    //   })
    //===> Fazendo agora com async await;
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/IsraelKilday");
      const data = await response.json() as ProfileResponse

      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type='text'
        placeholder='Digite seu nome'
        onChange={e => setStudentName(e.target.value)}
      />
      <button
        type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />
        ))
      }
    </div>
  )
}

