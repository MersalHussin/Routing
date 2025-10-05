        //** condation  -redireactPath - children ***

import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

    interface IProps{
        isAllowd: boolean;
        redireactPath: string;
        children: ReactNode;
        }

        const PrtectedRoute = ({isAllowd,redireactPath , children}:IProps) => {

            //** TODO Replace && State
           if(!isAllowd){
            return <Navigate to={redireactPath}/>
           }else{
            return children
           }
        }
        
        export default PrtectedRoute;
        