export default function Gallery(){
    return(
        <div className="gallery">
        <h2>Build skills. Get inspired. Empower yourself. It's all here.</h2>
        
        <div className="image-gallery">

            <div className="card">
                <img src="Images/Cash_flow_guide 1.png" alt="" />
                <div className="card-text">
                    <h4>The complete guide to cash flow for small businesses</h4>
                    <p>This guide covers the ins and outs of cash flow to help you build a financial plan to keep capital circulating through your business.</p>
                </div>
            </div>

            <div className="card">
                <img src="Images/fearless-accounting-guide_2x 2.png" alt="" />
                <div className="card-text">
                    <h4>The complete guide to cash flow for small businesses</h4>
                    <p>Accounting doesn’t have to be scary. Our guide has oages of easy-to-follow tips and lessons to help you run your business with confidence.</p>
                </div>
            </div>

            <div className="card">
                <img src="Images/guide-getting-paid-resource 1.png" alt="" />
                <div className="card-text">
                    <h4>The complete guide to cash flow for small businesses</h4>
                    <p>This guide covers the ins and outs of cash flow to help you build a financial plan to keep capital circulating through your business.</p>
                </div>
            </div>

        </div>

        <button className="more">More from our blog</button>

        <hr/>
        <div className="questions">
            <h4>Frequently Asked Questions</h4>
            <img src="Images/plus.png" alt="" />
        </div>
        <hr/>
        </div>
        )
}