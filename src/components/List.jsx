const List = (props) => {
  const Icon = props.icon;
  const name = props.name; // vea yor domlai pi icon 1 1 
  return (
    <div className='feature'>
      <button><Icon size={20} /></button>
      <button>{name}</button>
    </div>
  );
};
export default List