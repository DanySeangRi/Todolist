import { NavLink } from "react-router-dom";
const List = (props) => {
  const Icon = props.icon;
  const name = props.name; 
  const to = props.to // vea yor domlai pi icon 1 1 

  return (
    <NavLink to={to}
      className='feature'>
      <button ><Icon size={20} /></button>
      <button>{name}</button>
    </NavLink>
  );
};
export default List