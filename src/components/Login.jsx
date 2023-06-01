import KotakTeks from "./KotakTeks"
import Tombol from "./Tombol"

function Login (){
    return (
        <div className="login">
            <label>Username:</label>
            <KotakTeks />
            <br />
            <br />
            <label>Password:</label>
            <KotakTeks />
            <br />
            <br />
            <Tombol />
        </div>

    )
}

export default Login;