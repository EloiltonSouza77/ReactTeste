import React, {useState, useRef, useEffect} from 'react';
import axios from "axios"
import "../Home/styles.css";
import doisH from "../../Assetes/doisH.svg";
 import seta2 from "../../Assetes/seta2.svg";




function App() {




//const users = [];
const [users, setUsers] = useState([]); // isso é um arry vazio
  //Criando um estado para armazenar valores do input.  
  const inputName = useRef();
  const inputIdade  = useRef();



  async function cadastrar(){   

    const {data: novousuariO} = await axios.post("http://localhost:3001/nodeTest",{
      name: inputName.current.value,
      idade: inputIdade.current.value 

    });

    console.log(novousuariO) 

    setUsers([...users, novousuariO]); 
    }

    useEffect(() => { // useFfect para inciar a pagina puxando todos os usuarios cadastrado no arry.

      async function efeUsers() {
      const {data: atualizar} = await axios.get("http://localhost:3001/nodeTest");

      setUsers(atualizar);
      }
      efeUsers()
    }, [users]);


   //setUsers([...users,{id: Math.random(), name: inputName.current.value, idade: inputIdade.current.value }]) /*... mais o arrey ele quarda cadatros dentro do arry. */
   //console.log(inputName.current.value);
   //console.log(inputIdade.current.value);
  
  return (
    <div>
    <img className='doisH' src={doisH} alt="imagem de titulo"/>
    
      <section>
      <h1 className="ola"> Ólá! </h1>
      <p> Nome </p>
      <input ref={inputName} placeholder="Digite seu nome" type="text" />
      <p> Idade </p>

    
      <input  ref={inputIdade} placeholder="Digite sua idade" type="text" />
       <a href='./Usuario' rel="noopener noreferrer" >
       <button className='B1' onClick={cadastrar} >Cadastrar <img className='ceta1' src={seta2} alt="imagem da ceta do botao"/> </button>
      </a>
        </section>
    </div>
  );
}

export default App;




