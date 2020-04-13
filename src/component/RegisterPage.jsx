import React, { useState } from 'react';
import { useFormik } from 'formik';
import SetForm from './SetForm';
import { register, validator } from './Helpers';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupForm = () => {
	let [process, setProcess] = useState(false);
	let [error, setError] = useState(null);
	let [btnload, setBtnload] = useState(false);
	let [success, setSuccess] = useState(false);

	const formik = useFormik({
		initialValues: {
			phone: '',
			firstName: '',
			lastName: '',
			birthdate: '',
			gender: 'male',
			email: '',
		},
		validationSchema: validator,
		onSubmit: async (values) => {
			setProcess(true)
			setBtnload(true)
			setError(null)
			let signup = await register(values);
			if (signup) {
				if (signup.code !== 200) {
					setProcess(false)
					setBtnload(false)
					setError(signup.status)
				} else {
					setError(null)
					setBtnload(false)
					setSuccess(true)
				}
			}
		},
	});

	const setLogin = () => {
		if (success) {
			return <Button as={ Link } to="/login" size="lg" block>Login</Button>
		} else {
			return <h1>Footer</h1>;
		}
	}

	return (
		<Container>
			<SetForm formik={ formik } process={ process } errMessage={ error } load={ btnload } />
			<Jumbotron className={ process === true ? 'disabled' : '' }>
				{ setLogin() }
			</Jumbotron>
		</Container>
	);
};

export default SignupForm;