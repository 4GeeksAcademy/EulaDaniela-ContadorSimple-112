import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch} from '@fortawesome/free-solid-svg-icons';

function SecondsCounter(props) {
 return(
        <div className="text-center bg-dark m-auto mt-5 col-6 d-flex align-items-center justify-content-center" style={{height:'100px', fontSize:'30px'}} >
         
            <div className="badge badge-dark" style={{margin: '10px', border:'2px solid'}}><FontAwesomeIcon icon={faStopwatch} style={{ color: "white" }} /></div>
            <div className="badge badge-dark" style={{margin: '10px'}}>{props.digito6}</div>
            <div className="badge badge-dark" style={{margin: '10px'}}>{props.digito5}</div>
            <div className="badge badge-dark" style={{margin: '10px'}}>{props.digito4}</div>
            <div className="badge badge-dark" style={{margin: '10px'}}>{props.digito3}</div>
            <div className="badge badge-dark" style={{margin: '10px'}}>{props.digito2}</div>
            <div className="badge badge-dark" style={{margin: '10px'}}>{props.digito1}</div>
            
            
        </div>
 ) 

}

export default SecondsCounter;
