import React, {useRef} from 'react';
import '../styles/Login.scss'
import Logo from '@logos/logo_yard_sale.svg'
import { Link } from 'react-router-dom';

export const Login = () => {

 const form = useRef(null)

 const handleSubmit = (event) => {
	event.preventDefault()// previniendo el comportamiento default de html en el boton Log in(boton dentro del form)
	const formData = new FormData(form.current);
	const data = {
		username: formData.get('email'),
		password: formData.get('password')
	}
	console.log(data)
 }
 
  return (
    <div className="Login">
			<div className="Login-container">
				<img src={Logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="email" name="email" placeholder="user@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button onClick={handleSubmit} className="primary-button login-button" > Log in</button>
					<Link to="/password-recovery">Forgot my password</Link>
				</form>
				<button className="secondary-button signup-button" onClick={handleSubmit} >Sign up</button>
			</div>
		</div>
  )
}
