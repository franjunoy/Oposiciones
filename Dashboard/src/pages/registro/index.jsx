import { useState } from 'react';
import EmailInput from '@/componentes/reusableComponents/EmailInput';
import PasswordInput from '@/componentes/reusableComponents/PasswordInput';
import TextInput from '@/componentes/reusableComponents/TextInput';
import TextInputWithIcon from '@/componentes/reusableComponents/TextInputWithIcon';
import Button from '@/componentes/reusableComponents/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '@/Firebase/FirebaseConfig';
import { registerRequest } from '@/peticiones/auth';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/redux/reducer/userReducer';
import { useRouter } from 'next/router';

const LoginPage = () => {
  //
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    if (user) {
      registerRequest({
        success: (v) => {
          localStorage.setItem('Token', v.payload.token), router.push('/home');
        },
        error: (e) => console.log(e),
        loading: (l) => console.log('cargando', l),
        email: email,
        name: name,
      });
    }
  };

  const placeHolder = 'Nombre';
  const iconNameInput = (
    <svg
      width='22'
      height='21'
      viewBox='0 0 22 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 0C9.5 0 8.32812 0.552083 7.48438 1.65625C6.64062 2.76042 6.21875 4.17188 6.21875 5.89062C6.20833 8.02604 6.89583 9.71875 8.28125 10.9688C8.45833 11.1354 8.52083 11.349 8.46875 11.6094L8.10938 12.3594C7.99479 12.6094 7.82552 12.8047 7.60156 12.9453C7.3776 13.0859 6.90625 13.2865 6.1875 13.5469C6.15625 13.5573 5.4974 13.7708 4.21094 14.1875C2.92448 14.6042 2.23958 14.8333 2.15625 14.875C1.28125 15.2396 0.708333 15.6198 0.4375 16.0156C0.145833 16.6719 0 18.3333 0 21H22C22 18.3333 21.8542 16.6719 21.5625 16.0156C21.2917 15.6198 20.7188 15.2396 19.8438 14.875C19.7604 14.8333 19.0755 14.6042 17.7891 14.1875C16.5026 13.7708 15.8438 13.5573 15.8125 13.5469C15.0938 13.2865 14.6224 13.0859 14.3984 12.9453C14.1745 12.8047 14.0052 12.6094 13.8906 12.3594L13.5312 11.6094C13.4792 11.349 13.5417 11.1354 13.7188 10.9688C15.1042 9.71875 15.7917 8.02604 15.7812 5.89062C15.7812 4.17188 15.3594 2.76042 14.5156 1.65625C13.6719 0.552083 12.5 0 11 0Z'
        fill='#5A6ACF'
      />
    </svg>
  );
  const iconPasswordInput = (
    <svg
      width='22'
      height='23'
      viewBox='0 0 22 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 0C7.20913 0 4.125 2.57945 4.125 5.75V9.2H2.75C1.23337 9.2 0 10.2315 0 11.5V20.7C0 21.9685 1.23337 23 2.75 23H19.25C20.7666 23 22 21.9685 22 20.7V11.5C22 10.2315 20.7666 9.2 19.25 9.2H17.875V5.75C17.875 2.57945 14.7909 0 11 0ZM19.25 11.5L19.2528 20.7H2.75V11.5H19.25ZM6.875 9.2V5.75C6.875 3.8479 8.72575 2.3 11 2.3C13.2743 2.3 15.125 3.8479 15.125 5.75V9.2H6.875Z'
        fill='#5A6ACF'
      />
    </svg>
  );
  const customStyle = {
    width: 'w-2/6',
  };

  return (
    <div className='flex justify-center items-center w-full bg-gradient-to-r from-blue-200 to-teal-100 h-screen min-h-full font-primary '>
      <section className='  flex flex-col justify-center  items-center w-full max-w-xl gap-4 bg-white p-4 m-5  md:gap-6'>
        <header className='flex w-full justify-center text-indigo-600 font-semibold  text-lg'>
          <h3>Registrarse</h3>
        </header>

        <main className='w-full  flex justify-center items-center'>
          <form className='flex flex-col  items-center justify-center gap-8  md:w-4/6'>
            <EmailInput
              setValue={setEmail}
              value={email}
              icon={iconNameInput}
            />

            <PasswordInput
              setValue={setPassword}
              value={password}
              icon={iconPasswordInput}
            />

            <TextInputWithIcon
              setValue={setName}
              value={name}
              placeholder={placeHolder}
              icon={iconNameInput}
            />
          </form>
        </main>
        <footer className='flex w-full items-start justify-between mb-5 max-w-sm mt-2'>
          <div className='flex flex-col items-start justify-center w-2/4 gap-3 mt-2 '>
            <p className='text-base w-full'>¿Tienes Cuenta?</p>
            <button onClick={() => router.push('/login')}>Login</button>
          </div>

          <Button
            descripcion={'Registrarte'}
            action={() => handleRegister()}
            customStyle='text-sm max-w-40 text-indigo-600 border-2 border-indigo-800 pt-2 pb-2 pl-4 pr-4 w-1'
          />
        </footer>
      </section>
    </div>
  );
};

export default LoginPage;
