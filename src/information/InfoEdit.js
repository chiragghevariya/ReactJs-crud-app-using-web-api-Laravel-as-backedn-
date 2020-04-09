import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoEditComponent from './component/InfoEditComponent';
import { useParams } from "react-router-dom";

export default function InfoEdit(props){
  
  const  useParamsD = useParams();
  return (
      <InfoEditComponent parameter={useParamsD} />
    );
}


