import Link from 'next/link'
const Forgot = () => {
    return ( 
        <main>
		<div className="bg_color_2">
			<div className="container margin_60_35">
				<div id="login">
					<h1>Forgot your password?</h1>
					<div className="box_form">
						<form>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Your email address" />
							</div>
							<div className="form-group text-center add_top_10">
								<input className="btn_1 btn-block" type="submit" value="Forgot your password?" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
     );
}
 
export default Forgot;
