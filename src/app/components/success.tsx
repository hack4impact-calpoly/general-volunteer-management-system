import style from '/styles/success.module.css'
import Link from "../../../node_modules/next/link";

export default function SuccessComponent() {
    return (
    <div className={style.box}>
        <h1 className={style.title}>Success!</h1>
        <h3 className={style.message}>You have successfully signed up for an account.</h3>
        <Link href="/pages/login"><button className={style.login}>Back to Login</button></Link>
    </div>
    );
  }