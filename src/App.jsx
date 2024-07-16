import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='flex flex-col gap-8 items-center p-12'>
      <nav className='flex justify-between gap-6 place-items-center ax-w-[1200px] p-8'>
        <h1 className='text-green-500 text-3xl font-bold uppercase'>
          Kenki Saloons
        </h1>
        <ul className='flex justify-evenly gap-3 [a_&]:hover:scale-105 [a_&]:text-blue-500 [a_&]:font-bold'>
          <li className=''>
            <a href='/'>Home |</a>
          </li>
          <li className=''>
            <a href='staff'>Staff |</a>
          </li>
          <li className=''>
            <a href='services'>Services |</a>
          </li>
          <li className=''>
            <a href='booking'>Booking |</a>
          </li>
          <li className=''>
            <a href='admin'>Admin |</a>
          </li>
        </ul>
      </nav>
      <main className=''>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
