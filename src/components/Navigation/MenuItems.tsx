import Dropdown from "./Dropdown";

const MenuItems = ({ items }: any) => {
  return (
    <li className="menu-items position-relative text-white fs-14">
      {items.submenu ? (
        <>
          <button className="menu-unlink d-flex align-items-center border-0 cursor-pointer bg-transparent text-white w-100 fs-18">{items.title}</button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a className="menu-links d-block fs-18 text-white" href={items.url}>
          {items.title}
        </a>
      )}
    </li>
  );
};
export default MenuItems;