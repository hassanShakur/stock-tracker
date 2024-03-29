import { TbMenuDeep } from 'react-icons/tb';
import UserView from './UserView';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className='fixed top-0 left-0 w-screen h-20 sm:h-[10vh] min-h-20 flex justify-between items-center px-6 sm:px-8 md:px-12 xl:px-20 py-5 shadow-sm md:shadow-lg backdrop-blur-md bg-solid-200/75 md:bg-white z-20'>
      <div className='text-xl font-bold flex gap-4 items-center'>
        <TbMenuDeep
          className='md:hidden cursor-pointer text-2xl'
          onClick={toggleSidebar}
        />
        <h1>Stock Tracker</h1>
      </div>

      <UserView />
    </header>
  );
};

export default Header;
