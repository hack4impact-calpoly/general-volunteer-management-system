import Link from "next/link";
import style from "@styles/login.module.css";
import Image from "next/image";

export default function login() {
  return (
    <div className={style.container}>
      <div className={style.logIn}>
        <div className={style.content}>
          <h1><strong>Login</strong></h1>
          <form>
            <div className={style.label}>
              <label htmlFor="email"><strong>Email</strong></label>
            </div>
            <div>
              <input type="email" required></input>
            </div>
            <div className={style.label}>
              <label htmlFor="password"><strong>Password</strong></label>
            </div>
            <div>
              <input type="password" required></input>
              <Image className={style.passwordToggle} src="/togglePass.png" alt=""></Image>
            </div>
            <p className={style.forgotPass}>
              <Link href="/forgotPassword">
                <strong>Forgot password?</strong>
              </Link>
            </p>
            <div>
              <button type="submit">Log in</button>
            </div>
            <p className={style.signUp}>
              Don&apos;t have an account?{" "}
              <Link href="/createAccount" className={style.createAcc}>
                <strong>Create Account</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
