const Dropdown = ({ submenus }: any) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu: any, i: number) => {
        return (
          <li key={i} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default Dropdown;
