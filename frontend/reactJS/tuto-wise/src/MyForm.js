import React, {useState } from 'react'
import './essai/MyForm.css';


function MyForm() {
  const [user, setUser] = useState({});
  
  const [users, setUsers] = useState(
    [
      {nom:"Ahmed", prenom:"Guido", age:20, ville:"Koumassi"},
      {nom:"Diallo", prenom:"Kouadio", age:22, ville:"Ouagadougou"},
      {nom:"Siméon", prenom:"Gango", age:25, ville:"Ouagadougou"}
    ]
  );
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // let person = JSON.parse(JSON.stringify(user));
    setUsers([...users, user]);
    console.log(users)
  }

  
let userElements = users.map((user, index) =>{
  console.log(index, user)
  return <>
    <tr key={index}>
      <td>{index}</td>
      <td>{user.nom}</td>
      <td>{user.prenom}</td>
      <td>{user.age}</td>
      <td>{user.ville}</td>
    </tr> 
  </>
});

  return <>
    <form onSubmit={handleSubmit}>
      <h1>Formulaire</h1>
      <div className='myForm'>  
        <div className='column'>
          <div className='row'>
            <label htmlFor='nom'>Nom:</label>
            <input 
              type="text" 
              name="nom" 
              value={user.nom || ""} 
              onChange={handleChange}
            />
          </div>
          <div className='row'>
            <label htmlFor='prenom'>Prenom:</label>
            <input 
              type="text" 
              name="prenom" 
              value={user.prenom || ""} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className='column'>
          <div className='row'>
            <label htmlFor='age'>Age:</label>
            <input 
              type="text" 
              name="age" 
              value={user.age || ""} 
              onChange={handleChange} 
            />
          </div>
          <div className='row'>
            <label htmlFor='ville'>Ville:</label>
            <input 
              type="text" 
              name="ville" 
              value={user.ville || ""} 
              onChange={handleChange} 
            />
          </div>
        </div>
      </div>
      <button type="submit">Envoyer</button>
    </form>

    <h1>Liste des utilisateurs</h1>

    <div className="users">
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Age</th>
          <th>Ville</th>
        </tr>
      </thead>
      <tbody>
        {userElements}
      </tbody>
      <tfoot>
        
      </tfoot>
    </table>
    </div>;

  </>
}

export default MyForm