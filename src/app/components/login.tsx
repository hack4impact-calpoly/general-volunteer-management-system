import Link from "next/link";
import Image from "next/image";
import passToggle from "../../../docs/images/toggle.png"

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[640px] h-[537px] bg-[#FEFEFE] border-[0.5px] border-[#C4C4C4] shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)]">
        <div className="m-auto left-1/2 right-1/2 text-left w-[436px]">
          <h1 className="font-medium text-[#011338] leading-[46.88px] text-[40px] mt-[70px] mb-[41.28px]">
            Login
          </h1>
          <form>
            <div className="mb-[8.27px]">
              <label
                className="font-medium text-[18px] leading-[21.33px]"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div>
              <input
                className="focus:outline-none focus:pl-[5px] focus:pr-[5px] focus:border-[2px] h-[55px] w-[100%] border border-[#8F8F8F]"
                type="email"
                required
              ></input>
            </div>
            <div className="mb-[8.27px] mt-[23px]">
              <label
                className="font-medium text-[18px] leading-[21.33px]"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div>
              <input
                className="focus:outline-none focus:pl-[5px] focus:pr-[5px] focus:border-[2px] h-[55px] w-[100%] border border-[#8F8F8F]"
                type="password"
                required
              ></input>
              <Image className="inline -ml-[10%] mb-[5px]" width={32} height={29} src={passToggle} alt=""/>
            </div>
            <p className="hover:text-[#314D89] font-medium text-[16px] leading-[18.96px] text-right mt-[10px] mb-[13.25px]">
              <Link href="/forgotPassword">Forgot password?</Link>
            </p>
            <div>
              <button
                className="hover:shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)] w-[100%] h-[55px] bg-[#314B89] text-[18px] text-white font-medium"
                type="submit"
              >
                Log in
              </button>
            </div>
            <p className="text-[16px] leading-[18.96px] font-normal text-center mt-[39.12px]">
              Don&apos;t have an account?{" "}
              <Link className="hover:text-[#314D89] font-medium" href="/createAccount">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
