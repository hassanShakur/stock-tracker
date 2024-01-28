import { TbMenuDeep } from 'react-icons/tb';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className='fixed top-0 left-0 w-screen h-[10vh] flex justify-between items-center px-8 md:px-12 xl:px-20 py-5 shadow-sm md:shadow-lg'>
      <div className='text-xl font-bold flex gap-4 items-center'>
        <TbMenuDeep
          className='md:hidden cursor-pointer text-2xl'
          onClick={toggleSidebar}
        />
        <h1>Stock Tracker</h1>
      </div>

      {/* a small dropdown to manage accounts */}
      <div className='flex items-center space-x-2'>
        <div className='text-sm font-medium'>John Doe</div>
        <div className='w-10 h-10 rounded-full bg-gray-300'></div>
      </div>
    </header>
  );
};

export default Header;