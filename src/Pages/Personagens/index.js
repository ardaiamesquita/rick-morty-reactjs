import React, {useEffect} from 'react';
import HeaderResponsive from "../../Componentes/HeaderResponsivo";
import api from '../../Api';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

function Personagens(){
    const [name,setName] = useState("");
    const [data, setData] = useState (null);
    useEffect(() => {
        //async function loadAll (){
         //   let res = await api.getPersonagemByName();
         //   setData(res.data)   
         //    console.log(res.data)
         //  }
       // }
       // loadAll();
       // console.log("Passando pelo useEfffect")
    }, []);
    
   function clickMouse (event) {
       event.preventeDefault();
       console.log("Escolhendo o nome:", name)
       let res = await api.getPersonagemByName(name);
   }


    return(
        <div>
            <HeaderResponsive/>
        <div className= "search-container">
            <form onSubmit={clickMouse}>
                <input onChange={(event)=>{
                    setName(event.target.value);
                }}/>
                <button type="subimit">
                <FontAwesomeIcon icon={faBars} size="lg/"/>
                </button>
            </form>
            </div>
        </div>
    );
}

export default Personagens;