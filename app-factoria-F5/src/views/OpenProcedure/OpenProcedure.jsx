import { useEffect, useState } from 'react';
import './openProcedure.css';
import axios from 'axios';
import NavbarAppAtom from '../../components/atoms/NavbarAppAtom/NavbarAppAtom';
import UserCardList from '../../components/molecules/UserCardsList';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';
//import imagen

function OpenProcedure() {
  const baseUrl="http://localhost/app-factoria-F5/";
  const [data, setData]=useState([]);

  const getRequest=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      //console.log(response.data);
      setData(response.data);
    })
  }

  useEffect(()=>{
    getRequest();
  },[])

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
  return (
    <>
    <NavbarAppAtom></NavbarAppAtom>
    <img src={}></img>
    <h2>{bootcamp.courseName}</h2>
    <div>
      <table>
        <thead>
          <tr>
            <th>Inicia</th>
            <th>Finaliza</th>
          </tr>
        </thead>
        <tbody>
          {data.map(botcamp=>(
            <tr key={bootcamp.BootcampID}>
              <td>{bootcamp.StartDate}</td>
              <td>{bootcamp.EndDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
        <h3>Stack</h3>
        <p key={stack.StackID}>{stack.StackName}</p>
    </div>

    <div>
        <h3>Descripción</h3>
        <p key={bootcamp.bootcampID}>{bootcamp.courseDescription}</p>
    </div>

    <div>
        <h3>Coders</h3>
        <UserCardList></UserCardList>
        
    </div>
    <ButtonAtom label={'Cerrar Selección'} color={'orange'}></ButtonAtom>

    </>
    )
}

export default OpenProcedure;
/*USER CARD LIST <p key={applicants.UserID}>{users.LastName}</p>
        <p key={applicants.UserID}>{users.FirstName}</p>*/