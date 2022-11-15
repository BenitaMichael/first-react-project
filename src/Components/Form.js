export default function Form(){
    return(
        <div>
            <form action="">
                    <div>
                    <input type="email" placeholder="Email" />
                    </div>
                    <div>
                    <input type="password" placeholder="Password" />
                    </div>
                    <div>
                    <button className="create">Create Your Free Account</button>
                    </div>
                    <hr />
                    <button className="google">Sign Up with Google</button>
                </form>
        </div>
    )
}