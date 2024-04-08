import { FormInputs, Logo, SubmitBtn } from '../components';
import {
  Form,
  Link,
  redirect,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const searchParams = new URLSearchParams(window.location.search);

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

export const action = async ({ request }) => {
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const formData = await request.formData();
  const { password } = Object.fromEntries(formData);
  const data = { token, email, password };
  console.log(password);
  console.log(token);
  console.log(email);

  try {
    await customFetch.post('/auth/reset', data);
    toast.success('Password reset successfully, login');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ResetPassword = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-4 capitalize'>
          reset password
        </h4>

        <FormInputs type='password' label=' new password' name='password' />
        <div className='my-4'>
          <SubmitBtn text='reset password' />
        </div>
      </Form>
    </section>
  );
};
export default ResetPassword;

// import { FormInputs, Logo, SubmitBtn } from '../components';
// import {
//   Form,
//   Link,
//   redirect,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';
// import customFetch from '../utils/customFetch';
// import { toast } from 'react-toastify';

// const searchParams = new URLSearchParams(window.location.search);

// // function useQuery() {
// //   return new URLSearchParams(useLocation().search);
// // }

// export const action = async ({ request }) => {
//   const email = searchParams.get('email');
//   const token = searchParams.get('token');

//   const formData = await request.formData();
//   const { password } = Object.fromEntries(formData);
//   const data = { token, email, password };
//   console.log(password);
//   console.log(token);
//   console.log(email);

//   try {
//     await customFetch.post('/auth/reset', data);
//     toast.success('Password reset successfully, login');
//     return redirect('/login');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };
// const ResetPassword = () => {
//   return (
//     <section className='h-screen grid place-items-center'>
//       <Form
//         method='post'
//         className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary'
//       >
//         <Logo />
//         <h4 className='text-center text-3xl font-bold mt-4 capitalize'>
//           reset password
//         </h4>

//         <FormInputs type='password' label=' new password' name='password' />
//         <div className='my-4'>
//           <SubmitBtn text='reset password' />
//         </div>
//       </Form>
//     </section>
//   );
// };
// export default ResetPassword;
