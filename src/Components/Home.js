import Navbar from "./Navbar";
import Form from './Form'

export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="hero-page">
                <div className="hero-text">
                <h1>Award-winning financial software<br />designed for entrepreneurs</h1>
                <Form />
                <p> By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
            </div>
            </div>
        </div>
    )
}