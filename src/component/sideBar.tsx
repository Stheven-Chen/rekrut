import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HiMenuAlt3, HiOutlineNewspaper, HiOutlineLogout } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { logout } from '../reducers/userSlice';
import {useSelector} from 'react-redux';
import { RootState } from '../reducers/userSlice';

interface Content {
  content: any;
}

const Sidebar = (props: Content) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isInputAccordionOpen, setIsInputAccordionOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state:RootState)=>state.user)

  const handleLogout = () => {
    dispatch(
      logout({
        user: '',
        nama: '',
      })
    );
  };

  const handleInputAccordionToggle = () => {
    setIsInputAccordionOpen(!isInputAccordionOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menus = [
    { name: 'Dashboard', link: '/home', icon: MdOutlineDashboard },
    {
      name: 'Input',
      link: '/input/datadiri',
      icon: AiOutlineForm,
      isAccordion: false,
      isAccordionOpen: isInputAccordionOpen,
      onAccordionToggle: handleInputAccordionToggle,
      accordionContent: (
        <ul>
          <li className={`ml-2 py-4 whitespace-pre transform-gpu transition-transform duration-300 active:scale-90${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}>
            <NavLink to="/input/datadiri">- Data Diri</NavLink>
          </li>
          <li className={`ml-2 py-4 whitespace-pre transform-gpu transition-transform duration-300 active:scale-90${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}>
           <NavLink to='/input/pendidikan'>- Pendidikan</NavLink>  
          </li>
          <li className={`ml-2 py-4 whitespace-pre transform-gpu transition-transform duration-300 active:scale-90${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}>
            <NavLink to='/input/pengalaman'>- Pengalaman Kerja</NavLink>
          </li>
        </ul>
      ), 
    },
    { name: 'Result', link: '/result', icon: HiOutlineNewspaper },
    { name: 'Logout', link: '/', icon: HiOutlineLogout},
  ];

  return (
    <section className={`flex bg-[#89CFF0] ${isOpen ? 'flex-1' : 'flex-initial'}`}>
      <div className={`bg-[#cdcdcd] min-h-screen ${isOpen ? 'w-72' : 'w-16'} duration-500 font-Poppins text-dark px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => {
            setIsOpen(!isOpen)
            if(isOpen === false){
                setIsInputAccordionOpen(false)
            }
          }} />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <div className={`text-2xl font-bold mb-2 text-dark duration-500 ${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}>
            <img src="/assets/logo.svg" alt="Logo" />
          </div>
          <span className={`text-xl font-bold mb-2 text-dark duration-500 ${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}>
            {`Hello, ${user.nama.split(' ').slice(0, 2).join(' ')}`}
          </span>
          {menus?.map((menu, index: number) => {
            if (menu.isAccordion) {
              return (
                <React.Fragment key={index}>
                  <div className="flex items-center text-sm gap-3.5 font-medium cursor-pointer hover:bg-sky-500 rounded-md p-2 transform-gpu transition-transform duration-300 active:scale-90" onClick={menu.onAccordionToggle}>
                    <div>{React.createElement(menu.icon, { size: '20' })}</div>
                    <h2
                      style={{
                        transitionDelay: `${index + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}
                    >
                      {menu.name}
                    </h2>
                  </div>
                  {menu.isAccordionOpen && <div className="ml-6">{menu.accordionContent}</div>}
                </React.Fragment>
              );
            } else {
              return (
                <NavLink
                  key={index}
                  to={menu.link}
                  className={`flex items-center text-sm gap-3.5 font-medium hover:bg-sky-500 rounded-md p-2 transform-gpu transition-transform duration-300 active:scale-90 ${menu.name  === 'Logout' ? "mt-14" : ""}`}
                  onClick={() => {
                    if (menu.name === 'Logout') {
                      handleLogout();
                    }
                  }}
                >
                  <div>{React.createElement(menu.icon, { size: '20' })}</div>
                  <h2
                    style={{
                      transitionDelay: `${index + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${!isOpen ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}
                  >
                    {menu.name}
                  </h2>
                </NavLink>
              );
            }
          })}
        </div>
      </div>
      <div className={`mx-3 mt-10  whitespace-pre  w-full p-5 `}>{props.content}</div>
    </section>
  );
};

export default Sidebar;
