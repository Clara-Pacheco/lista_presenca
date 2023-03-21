import React, { useState, useEffect } from 'react'
import './styles.css'

import { Card } from '../../components/Card/'

export function Home() {
 
  const [studentName, setStudentName] = useState('')

  // Nesse estado, iremos armazenar os estudantes da lista de 
  // presença

  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    
  setStudents(prevState =>[...prevState, newStudent])
  /* Adicionamos o conteúdo do estado anterior, ao novo 
  conteúdo do estado -  o estado muda a medida que um novo
  estudante é adicionado ao array students - 
  na imutabilidade, não substituímos um valor, o alteramos por
  inteiro. */

  /* Temos que usar o spread operator, para pegar o conteúdo
  existente previamente no array 'students', e despejá-los
  no novo array, que será formado com o novo conteúdo do estado,
  quando um novo estudante for adicionado ao array. Sem o spread operator,
  ele pegará o array existente previamente, e irá
  colocá-lo dentro do novo array que será formado com o novo estudante
  adicionado a lista, ou seja, teremos um array dentro de array, e não é
  o que queremos - queremos todos os nomes dos estudantes presentes
  em um único array. */
  }

  /*
  Toda vez que chamarmos a função 'handleAddStudent', iremos
  criar um novo objeto que terá 2 propriedades:
  o nome do estudante, que será pego do estado - studentName,
  que está armazenando o conteúdo atual do campo de input;
  e o time, que será pego do horário atual, pegando hora,
  minuto e segundo, 2 dígitos para cada;

  Depois de montado o objeto, ele é adicionado ao estado
  setStudents e esse novo objeto student passa a fazer parte
  do array students
  */

  useEffect(()=>{
    fetch('https://api.github.com/users/Clara-Pacheco')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  },[students])

  // Nesse exemplo, o useEffect será dependente
  // da listagem de estudantes; toda vez que mudar essa listagem,
  // o que for colocado dentro do corpo do useEffect será executado;



  return (
    <div className='container'>
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt='Foto de Perfil'/>
      </div>
    </header>
    
    <input
     type='text'
     placeholder="Digite o nome..."
     onChange={(e) => setStudentName(e.target.value)}  />
    <button
     type="button"
     onClick={handleAddStudent}>Adicionar</button>

    {
      students.map(student => <Card key={student.time} name={student.name} time={student.time} />)
      

    }
    </div>
  )
}

// Quando usamos {} dentro da sintaxe jsx, ou seja, dentro de
// um retorno, é porque queremos usar o conteúdo de uma variável;
// no caso, queremos usar o conteúdo de um estado, o que não deixa 
// de ser uma variável;

// como a variável 'students' é uma lista, podemos usar o método
// de array map() para escanear cada item da lista e exibir, para
// cada item, um cartão;
