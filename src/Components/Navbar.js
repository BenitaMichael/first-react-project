export default function Navbar (){
    return(
        <div className="nav">
            <h2 className="logo">dime</h2>
           <ul className="nav-links">
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">More</a></li>
           </ul>
           <div className="button-links">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up for free</button>
           </div>
        </div>
    )
}