import { NavLink } from "react-router-dom";

const LearnAside = () => {
    return (
        <aside>
              <ul className="flex items-start justify-center gap-2 flex-col">
                <li> <NavLink to="quickstart">Quickstart</NavLink></li>
                <li> <NavLink to="thinking">Thinking</NavLink></li>
                <li> <NavLink to="installition">installition</NavLink></li>
          
        </ul>
        </aside>
    );
}

export default LearnAside;
