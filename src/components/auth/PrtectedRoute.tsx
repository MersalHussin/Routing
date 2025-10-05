        //** condation  -redireactPath - children ***

import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

    interface IProps{
        isAllowd: boolean;
        redireactPath: string;
        children: ReactNode;
        data?: unknown;
        }

        const PrtectedRoute = ({isAllowd,redireactPath , data,children}:IProps) => {

            //** TODO Replace && State
           if(!isAllowd){
            return <Navigate to={redireactPath} state={data}/>
           }else{
            return children
           }
        }
        
        export default PrtectedRoute;
        