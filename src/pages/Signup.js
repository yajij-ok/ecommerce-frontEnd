import React from 'react'
import Meta from '../component/meta'
import BreadCrumb from '../component/breadCrumb'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { registerUser } from '../features/user/userSlice';

const signUpSchema = yup.object({
  firstname: yup.string().required("First name is required."),
  lastname: yup.string().required("Last name is required."),
  email: yup.string().nullable().required().email("Email should be valid."),
  password: yup.string().required("password is required.")
});

const SignUp = () => {

  const dispatch = useDispatch();

        const formik = useFormik({
     
          initialValues: {
     
            firstname: '',
     
            lastname: '',
     
            email: '',
            password: ''
     
          },
          validationSchema: signUpSchema,
          onSubmit: (values) => {
     
          dispatch(registerUser(values));
     
          },
     
        });
  return (
 <>
     <Meta title ="Sign Up" />
   <BreadCrumb title="signUp" />
   <div className="signUp-wrapper py-3 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
            <div className="login-container">
        <div class="card">
            <div class="card-header">
                <h3>Sign Up</h3>
            </div>
            <div class="card-body">
                <form action="" onSubmit={formik.handleSubmit}>
                <div class="form-floating mb-3">
               <input type="text" class="form-control" name="firstname" id="floatingInput" placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange("firstname")} onBlur={formik.handleBlur("firstname")}/>
               <label for="floatingInput">First Name</label>
               </div>

              <div className="error">
                 <p className="text-danger">
                 {formik.touched.firstname && formik.errors.firstname}
                 </p>
              </div>
                    <div class="form-group pb-2">
                        <label for="lastname">Last Name:</label>
                        <input type="text" id="" name="lastname" class="form-control" value={formik.values.lastname} onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur("lastname")} required />
                    </div>
                    <div className="error">
                    <p className="text-danger">
                   {formik.touched.lastname && formik.errors.lastname}
                   </p>
                   </div>
                    <div class="form-group pb-2">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" class="form-control" value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} required />
                    </div>
                    <div className="error">
                    <p className="text-danger">
                   {formik.touched.email && formik.errors.email}
                   </p>     
                   </div>
                    <div class="form-group pb-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary login-btn my-3 pb-2">Sign Up</button>
                
                </form>
            </div>
            </div>
    </div>
            </div>
        </div>
    </div>
   </div>
 </>
  )
}

export default SignUp