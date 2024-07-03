import React, { useState } from 'react';
import Button from '@/componentes/reusableComponents/Button';
import EmailInput from '@/componentes/reusableComponents/EmailInput';
import PasswordInput from '@/componentes/reusableComponents/PasswordInput';
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '@/Firebase/FirebaseConfig';
import { setUsers } from '@/redux/reducer/userReducer';
import { loginRequest } from '@/peticiones/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async () => {
  
    let user = await signInWithEmailAndPassword(auth, email, password)
      
      if (user) {        
        loginRequest({
        email: email,
        success: (v) => {
          localStorage.setItem("Token", v.payload.token),
          dispatch(setUsers(v.payload.user))
          router.push("/home") 
        },
        error: (e) => console.log(e),
        loading: (l) => console.log('cargando', l),
        
      }).catch((eerr) => console.log(eerr))
      
    }
   
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-tr from-blue-500  via-blue-300 to-teal-300 '>
      <div className='w-full sm:w-[600px] h-auto p-8 border border-gray-300  bg-white opacity-100'>
        <div className='mb-4'>
          <h1 className='text-3xl font-semibold text-center mb-4 font-poppins text-[18px] leading-[23px] tracking-[0.5px] text-[#5A6ACF]'>
            INICIAR SESIÓN
          </h1>
        </div>
        <div className='contenedorBotones flex flex-col gap-3  '>

          <EmailInput setValue={setEmail} label='' value={email} />
          <PasswordInput setValue={setPassword} title='' value={password} />
          
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col items-start mt-4'>
            <button className='w-29 h-15 rounded mb-2 focus:outline-none focus:border-gray-700'>
              ¿No tenes cuenta?
            </button>
            <button className='w-29 h-15 underline focus:outline-none focus:border-gray-700 '
            onClick={()=> router.push('/registro')}>
              Register
            </button>
          </div>
          <div className='mt-4'>
            <Button action={() => handleSubmit()}
              variant='secondary-alt'
              className='w-[130px] h-[45px] p-2 gap-2 rounded-l border-t border-r border-b border-gray-300'
            > 
              <span className='w-[110px] h-[35px] font-inter text-xs font-normal leading-[15.73px] tracking-[0.02em] text-center text-[#5A6ACF] flex justify-center items-center'>
                Iniciar Sesión
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
