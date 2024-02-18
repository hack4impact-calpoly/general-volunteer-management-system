import Link from "next/link";
import style from "@styles/login.module.css";
import Image from "next/image";

export default function login() {
  return (
    <div className={style.container}>
      <div className={style.logIn}>
        <div className={style.content}>
          <h1>Login</h1>
          <form>
            <div className={style.label}>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="email" required></input>
            </div>
            <div className={style.label}>
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <input type="password" required></input>
              <Image className={style.passwordToggle} src="/h4ishowpass.png" alt=""></Image>
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
              <Link href="/createAccount">
                <strong>Create Account</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
