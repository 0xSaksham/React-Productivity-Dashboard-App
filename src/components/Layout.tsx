import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link> | 
        <Link to="/notes">Notes</Link> | 
        <Link to="/settings">Settings</Link> | 
        <Link to="/tasks">Task</Link>
      </nav>
      <Outlet />
    </>
  );
}
 