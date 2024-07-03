import { useSelector } from 'react-redux';

const Header = ({ handleShowNavMenu }) => {
  const  user  = useSelector((state) => state.userReducer?.user);

  const firstLetter = user?.name?.split('')[0];

  return (
    <header className='w-full flex justify-between bg-white items-center p-2 border-b-2 border-gray-600/20 font-primary h-20 px-8  '>
      <div className='flex justify-center items-center gap-3'>
        <div className='flex justify-center items-center h-8 w-8 rounded-full bg-indigo-600  text-white '>
          {firstLetter}
        </div>
        <h2 className='flex gap-2 font-semibold '>{user?.name}</h2>
      </div>

      <div className='flex gap-4'>
        <button className='flex flex-row gap-3 justify-center items-center'>
          <img src='/notification_bell.svg' alt='' />
          <p className='notificaciones font-light'>Notificaciones</p>
        </button>
        <button className='h-6 w-6 md:hidden ' onClick={handleShowNavMenu}>
          <img
            src='/menu2.svg'
            alt='Menú'
            aria-label='Botón menú'
            className='max-w-full'
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
