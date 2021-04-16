const Review = () => {
    return ( 
        <main>
		<div id="breadcrumb">
			<div className="container">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Category</a></li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
		<div className="container margin_60_35">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="box_general_3 write_review">
						<h1>Write a review for Dr. Julia Smooths</h1>
						<div className="rating_submit">
							<div className="form-group">
							<label className="d-block">Overall rating</label>
							<span className="rating">
								<input type="radio" className="rating-input" id="5_star" name="rating-input" value="5 Stars"/><label htmlFor="5_star" className="rating-star" ></label>
								<input type="radio" className="rating-input" id="4_star" name="rating-input" value="4 Stars"/><label htmlFor="4_star" className="rating-star" ></label>
								<input type="radio" className="rating-input" id="3_star" name="rating-input" value="3 Stars"/><label htmlFor="3_star" className="rating-star" ></label>
								<input type="radio" className="rating-input" id="2_star" name="rating-input" value="2 Stars"/><label htmlFor="2_star" className="rating-star" ></label>
								<input type="radio" className="rating-input" id="1_star" name="rating-input" value="1 Star"/><label htmlFor="1_star" className="rating-star" ></label>
							</span>
							</div>
						</div>
						<div className="form-group">
							<label>Title of your review</label>
							<input className="form-control" type="text" placeholder="If you could say it in one sentence, what would you say?" />
						</div>
						<div className="form-group">
							<label>Your review</label>
							<textarea className="form-control" placeholder="Write your review here ..."></textarea>
						</div>
						<div className="form-group">
							<label>Add your photo (optional)</label>
							<div className="fileupload"><input type="file" name="fileupload" accept="image/*" /></div>
						</div>
						<hr/>
						<div className="form-group">
							<div className="checkboxes add_bottom_30 add_top_15">
								<label className="container_check">I accept <a href="#0">terms and conditions and general policy</a>
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</div>
						</div>
						<a href="#0" className="btn_1">Submit review</a>
					</div>
				</div>
			</div>
		</div>
	</main>

     );
}
 
export default Review;