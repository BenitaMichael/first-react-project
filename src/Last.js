import Form from "./Components/Form"

export default function Last(){
    return(
        <div className="last">
            <div className="text">
                <h1>Everything you need to <br/>confidently run your <br/>business</h1>
            </div>
            <div className="form">
                <Form/>
                <p> By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    )
}