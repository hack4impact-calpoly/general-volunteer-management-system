import style from './success.module.css'

export default function SuccessComponent() {
    return (
    <div className={style.box}>
        <h1 className={style.title}>Success!</h1>
        <h3 className={style.message}>You have successfully signed up for an account.</h3>
        <button className={style.login}>Back to Login</button>
    </div>
    );
  }