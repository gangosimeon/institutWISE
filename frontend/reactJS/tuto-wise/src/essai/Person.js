import React from 'react';
import './person.css';


function Person(){
  const nom="Siméon";
  const prenom="Gango";
  const age=22;
  const ville="Ouagadougou";
  return <>
  <div className="person">
  <table>
    <tr>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Age</th>
      <th>Ville</th>
    </tr>
    <tr>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{age}</td>
      <td>{ville}</td>
    </tr>
  </table>
  </div>
  </>
}
export default Person