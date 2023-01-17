import {Formik, Form, Field, ErrorMessage} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import logo from "../../assets/img/logo.png";
import useSignup from "../../hooks/auth/useSignup";

export default function Signup() {
  const initialValues = {
    name: "",
    email: "",
    pin: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    pin: Yup.string().required("Required"),
    confirmPin: Yup.string().oneOf([Yup.ref("pin"), null], "Passwords must match"),
  });

  return (
    <div
      className='flex justify-center items-center h-screen bg-blue-400 mt-10'
      style={{
        backgroundImage: "url('https://www.mycdm.ma/static/media/Blue-BG-Holmarcom.21e85005.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='flex flex-col justify-center items-center rounded-md p-8 lg:w-1/2 border-dashed border-2 border-gray-100'>
        <div className='flex flex-col justify-center items-center bg-white  shadow-md p-8 w-full'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
              useSignup(values);
              setSubmitting(false);
            }}
          >
            {({isSubmitting}) => (
              <Form className='flex flex-col justify-center items-center gap-5 w-full'>
                <div className='flex flex-col justify-center items-center w-full'>
                  <img src={logo} alt='CMD' className='w-32' />
                  <hr className='w-full border border-gray-200' />
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-4'>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='text-gray-800' htmlFor='email'>
                      Full Name
                    </label>
                    <Field className='border border-gray-300 rounded-md p-2' type='text' name='name' placeholder='joe doe' />
                    <small>
                      <ErrorMessage className='text-red-500 ' name='name' component='div' />
                    </small>
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                    <label className='text-gray-800' htmlFor='email'>
                      Email
                    </label>
                    <Field className='border border-gray-300 rounded-md p-2' type='email' name='email' placeholder='joe@doe.com' />
                    <small>
                      <ErrorMessage className='text-red-500 ' name='email' component='div' />
                    </small>
                  </div>
                  <div className='flex  justify-between items-center flex-col md:flex-row w-full gap-2 '>
                    <div className='flex flex-col w-full gap-1'>
                      <label className='text-gray-800' htmlFor='pin'>
                        Pin
                      </label>
                      <Field className='border border-gray-300 rounded-md p-2' type='password' name='pin' placeholder='Dk#d2d9' />
                      <small>
                        <ErrorMessage className='text-red-500' name='pin' component='div' />
                      </small>
                    </div>
                    <div className='flex flex-col w-full gap-1'>
                      <label className='text-gray-800' htmlFor='pin'>
                        Confirm Pin
                      </label>
                      <Field className='border border-gray-300 rounded-md p-2' type='password' name='confirmPin' placeholder='Dk#d2d9' />
                      <small>
                        <ErrorMessage className='text-red-500' name='confirmPin' component='div' />
                      </small>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-end items-end w-full gap-4'>
                  <h1 className='text-sm text-gray-500'>
                    Already have an account?{" "}
                    <Link to='/sign-in' className='text-blue-500 hover:text-blue-700'>
                      Login
                    </Link>
                  </h1>
                </div>
                <button type='submit' disabled={isSubmitting} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Se connecter
                </button>
              </Form>
            )}
          </Formik>
        </div>{" "}
      </div>
    </div>
  );
}
