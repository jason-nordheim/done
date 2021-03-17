import { NavLink } from "react-router-dom";
export function Layout(props) {
  return (
    <>
      <nav>
        <NavLink to="/" aria-label="Home" activeClassName="active">
          Home
        </NavLink>
      </nav>
      <main>{props.children}</main>
    </>
  );
}
