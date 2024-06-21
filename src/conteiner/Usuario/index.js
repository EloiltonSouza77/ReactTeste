import React, {useState, useRef, useEffect} from "react";
import axios from "axios"
import "../Usuario/styles.css"

import usuario from "../../Assetes/usuario.svg";
import lixeira from "../../Assetes/lixeira.svg";
import seta2 from "../../Assetes/seta2.svg";




function Usuario() {




    //const users = [];
    const [users, setUsers] = useState([]); // isso é um arry vazio
      //Criando um estado para armazenar valores do input.  
      const inputName = useRef();
      const inputIdade  = useRef();
    

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
      
    
     async function deleteu(userId) {
      await axios.delete(`http://localhost:3001/nodeTest/${userId}`);
     const novousuario = users.filter( user => user.id !== userId );
     setUsers(novousuario)
    
     }

      return (
        <div>
        <img className='doisH' src={usuario} alt="imagem de titulo"/>
        
          <section>
          <h1 className="use"> Usuário! </h1>
        
          <ul>
            { users.map((users) => ( 
            
            <li key={users.id}> 
             <p> {users.name} - {users.idade} </p>    
              <button onClick={() => deleteu(users.id)} > <img className='lixeira' src={lixeira} alt=" imagem de butao delete" /> </button>    
            </li>
          
            ))}
            
            </ul>
           
            <button className="cadast" onClick={() => { window.location.href = '/'; }}> Voltar <img className='seta2' src={seta2} alt="imagem da ceta do botao"/> </button>
              
            </section>
        </div>
      );
    }
    
    export default Usuario;
    
    
    