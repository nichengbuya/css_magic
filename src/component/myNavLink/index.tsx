import { NavLink, NavLinkProps } from "react-router-dom";
import './style.scss';
export default function MyNavLink(props:NavLinkProps){
    return(
        <NavLink activeClassName="link-active" className="link" {...props} />
    )
}