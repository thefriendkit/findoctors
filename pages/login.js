import Link from 'next/link'
const Login = () => {
    return ( 
        <main>
		<div className="bg_color_2">
			<div className="container margin_60_35">
				<div id="login">
					<h1>Please login to Findoctor!</h1>
					<div className="box_form">
						<form>
							<a href="#0" className="social_bt facebook">Login with Facebook</a>
							<a href="#0" className="social_bt google">Login with Google</a>
							<a href="#0" className="social_bt linkedin">Login with Linkedin</a>
							<div className="divider"><span>Or</span></div>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Your email address" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Your password" name="password" id="password" />
							</div>
                            <Link href="/forgot"><a><small>Forgot password?</small></a></Link>
							<div className="form-group text-center add_top_20">
								<input className="btn_1 medium" type="submit" value="Login" />
							</div>
						</form>
					</div>
					<p className="text-center link_bright">Do not have an account yet? <Link href="/register-patient"><a><strong>Register now!</strong></a></Link></p>
				</div>
			</div>
		</div>
	</main>
     );
}
 
export default Login;