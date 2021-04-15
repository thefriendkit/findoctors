import Link from 'next/link'
const Navbar = () => {
    return (  
        <header className="header_sticky">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-6">
					<div id="logo_home">
						<h1><a href="/" title="Findoctor">Findoctor</a></h1>
					</div>
				</div>
				<nav className="col-lg-9 col-6">
					<a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
					<ul id="top_access">
						<li><Link href="/login"><a><i className="pe-7s-user"></i></a></Link></li>
						<li><Link href="/register-patient"><a><i className="pe-7s-add-user"></i></a></Link></li>
					</ul>
					<div className="main-menu">
						<ul>
							<li className="submenu">
								<a href="#0" className="show-submenu">Home<i className="icon-down-open-mini"></i></a>
								<ul>
									<li><a href="/login">Login</a></li>
									<li><a href="/list">List</a></li>
									<li><a href="/details">Detail Page</a></li>
									<li><a href="/booking">Booking Page</a></li>
									<li><a href="/register-doctor">Register Doctor</a></li>
                                    <li><a href="/register-patient">Register Patient</a></li>
									<li><a href="/review">Submit review</a></li>
								</ul>
							</li>
						</ul>					
					</div>
				</nav>
			</div>
		</div>
	</header>

    );
}
 
export default Navbar;