import { NavLink } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <span> | </span>
            <NavLink to="/meetings">Meetings</NavLink>
            <span> | </span>
            <NavLink to="/meetings/new">Add Meeting</NavLink>
        </div>
    );
}

export default Menu;
