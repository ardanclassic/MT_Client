import React from 'react';
import { Form, Button, Card, Col, Spinner, Alert } from 'react-bootstrap';
import { DatePickerField } from './Helpers';
import './styles.scss';

const form = ({formik, process, errMessage, load}) => {
	const { handleSubmit, handleChange, handleBlur, 
			values, errors, setFieldValue, touched } = formik;

	const showError = (touched, error) => {
		let show = null;
		if (touched && error) {
			show = <Form.Control.Feedback type="invalid">{ error }</Form.Control.Feedback>
		}
		return show
	}

	const setFormGroup = (dtVal, dtTouch, dtError, nameTxt, holder) => {
		return (
			<Form.Group>
				<Form.Control id={nameTxt} name={nameTxt} type="text" placeholder={holder}
					onBlur={handleBlur} onChange={handleChange} value={dtVal} 
					disabled={ process === true ? true : false }
					isInvalid={ dtTouch && dtError ? true : false } />
				{ showError(dtTouch, dtError) }
			</Form.Group>
		)
	}

	const showAlert = () => {
		if (errMessage) {
			return <Alert variant="danger">{ errMessage }</Alert>
		}
	}
			
    return (
		<React.Fragment>
			<Card body>
				{ showAlert() }
				<h1 className={ process === true ? 'disabled' : '' }>Registration</h1>
				<Form onSubmit={handleSubmit}>
					{ setFormGroup(values.phone, touched.phone, errors.phone, 'phone', 'Mobile Number') }
					{ setFormGroup(values.firstName, touched.firstName, errors.firstName, 'firstName', 'First Name') }
					{ setFormGroup(values.lastName, touched.lastName, errors.lastName, 'lastName', 'Last Name') }

					<Form.Row>
						<Form.Group as={Col} md="5">
							<DatePickerField name="birthdate" value={values.birthdate} 
								onChange={setFieldValue} active={process} />
						</Form.Group>

						<div className="gender">
							<Form.Check type="radio" name="gender" label="Male"
								id="male" value='male'
								disabled={ process === true ? true : false }
								onChange={ handleChange }
								checked={values.gender === "male"}
							/>
						</div>

						<div className="gender">
							<Form.Check type="radio" name="gender" label="Female"
								id="female" value='female'
								disabled={ process === true ? true : false }
								onChange={ handleChange }
								checked={values.gender === "female"}
							/>
						</div>
					</Form.Row>

					{ setFormGroup(values.email, touched.email, errors.email, 'email', 'Email') }

					<Button type="submit" size="lg" block
						disabled={ process === true ? true : false } >
						{ load === true ? <Spinner animation="grow" /> : "Register" }
					</Button>
				</Form>
			</Card>
		</React.Fragment>
    )
}

export default form;