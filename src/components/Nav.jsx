import { useState } from "react";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import HamburgerButton from "./HamburgerButton";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const defaultButtonStyle =
    "text-grey-600 text-lg font-semibold rounded-md px-2 hover:bg-background-dark transition-colors ease-in-out duration-300";
  const specialButtonStyle =
    "bg-primary hover:bg-secondary text-white rounded-md px-2 transition-colors ease-in-out duration-300";

  const drawerButtonStyle =
    "text-left font-semibold w-full text-text-body rounded-md px-2 hover:bg-background-dark transition-colors ease-in-out duration-300";
  const drawerSpecialButtonStyle =
    "text-left font-semibold w-full bg-primary hover:bg-secondary text-white rounded-md px-2 transition-colors ease-in-out duration-300";

  const buttons = ["Home", "Why us", "Subscribe"];

  const DrawerTitle = (
    <div className="flex justify-between items-center">
      <span>Menu</span>
      <CloseOutlined onClick={onClose} className="cursor-pointer" />
    </div>
  );

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-background-light">
      <div className="hidden lg:flex space-x-4">
        {buttons.map((label, index) => (
          <button
            key={index}
            className={
              label === "Get involved" ? specialButtonStyle : defaultButtonStyle
            }
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-[#39B2D4]">Meet</span>{" "}
            <span className="text-[#F461A4]">Amore</span>
          </h1>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="hidden lg:block bg-[#F461A4] text-white px-4 py-2 rounded-md">
          Login
        </button>
        <button className="hidden lg:block bg-[#39B2D4] text-white px-4 py-2 rounded-md">
          Signup
        </button>
      </div>
      <HamburgerButton onClick={showDrawer} />
      <Drawer
        title={DrawerTitle}
        placement="left"
        onClose={onClose}
        open={open}
        closable={false}
      >
        <div className="flex flex-col gap-4">
          {buttons.map((label, index) => (
            <button
              key={index}
              className={
                label === "Get involved"
                  ? drawerSpecialButtonStyle
                  : drawerButtonStyle
              }
            >
              {label}
            </button>
          ))}
        </div>
        <button className="hidden lg:block bg-secondary text-white px-4 py-2 rounded-md">
          Login
        </button>
        <button className="hidden lg:block bg-secondary text-white px-4 py-2 rounded-md">
          Signup
        </button>
      </Drawer>
    </nav>
  );
};

export default Nav;
