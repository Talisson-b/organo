import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time'
import Rodape from './components/Rodape'


function App() {

  const times = [
    {
      nome:'Programação', 
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:'Front-end', 
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {

      nome:'Data Science', 
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome:'Devops', 
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    },
    {
      nome:'UX Design', 
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome:'Mobile', 
      corPrimaria: '#ffba05',
      corSecundaria: '#fff509'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  // eslint-disable-next-line no-unused-vars
  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
       times={times.map(time => time.nome)}/>


     {times.map(time => <Time key={time.nome} 
     nome={time.nome} 
     corPrimaria={time.corPrimaria}
     corSecundaria={time.corSecundaria}
     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
     />)}
     <Rodape />
      


     
    </>
  )
}

export default App
