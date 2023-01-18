import {Formik, Form, Field, ErrorMessage} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import logo from "../../assets/img/logo.png";
import useLogin from "../../hooks/auth/useLogin";

export default function Login(setIsAuthanticated: any, authanticated: boolean) {
  const initialValues = {
    email: "",
    pin: "",
  };

  const navigate = useNavigate();
  const login = async (values: any) => {
    const data = await useLogin(values, navigate);
    if (data as any) {
      navigate("/Transactions");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    pin: Yup.string().required("Required"),
  });

  return (
    <div
      className='flex justify-center items-center h-screen bg-blue-400'
      style={{
        backgroundImage: "url('https://www.mycdm.ma/static/media/Blue-BG-Holmarcom.21e85005.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className='flex flex-col justify-center items-center rounded-md p-8 w-1/2 border-dashed border-2 border-gray-100  
      '
      >
        <div className='flex flex-col justify-center items-center bg-white  shadow-md p-8 w-full'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
              login(values);
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
                      Email
                    </label>
                    <Field className='border border-gray-300 rounded-md p-2' type='email' name='email' placeholder='joe@doe.com' />
                    <small>
                      <ErrorMessage className='text-red-500 ' name='email' component='div' />
                    </small>
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <label className='text-gray-800' htmlFor='pin'>
                      pin
                    </label>
                    <Field className='border border-gray-300 rounded-md p-2' type='password' name='pin' placeholder='Dk#d2d9' />
                    <small>
                      <ErrorMessage className='text-red-500' name='pin' component='div' />
                    </small>
                  </div>
                </div>
                <div className='flex flex-col justify-end items-end w-full gap-4'>
                  <h1 className='text-sm text-gray-500'>
                    Don't have an account? &nbsp;
                    <Link to='/create-account' className='text-blue-500 hover:text-blue-700'>
                      Create one
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
