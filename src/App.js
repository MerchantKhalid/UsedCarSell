
import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Router/Routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
        <ToastContainer />
    </div>
  );
}

export default App;
