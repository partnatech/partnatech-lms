import Image from "next/image"
import { LoginForm } from "./_components/form"
import { Suspense } from "react"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    // <div className="flex min-h-full flex-1">
    //   <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    //     <div className="mx-auto w-full max-w-sm lg:w-96">
    //       <Logo />
    //       <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Sign in to Your Account
    //       </h2>
    //     </div>
    //     <Suspense>
    //       <LoginForm />
    //     </Suspense>
    //   </div>
    // </div>
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="w-[540px] flex flex-col items-center gap-6">
        <Logo />

        <div className="bg-background-primary p-6 rounded-lg border border-line-secondary w-full hover:border-primary/20 transition-all">
          <div className="flex flex-col gap-2">
            <p className="text-center text-2xl font-semibold">Accelerate your Expertise</p>
            <p className="text-center text-typography-secondary">
              You’re one step closer to becoming expert with PartnaLearn
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="text-center text-sm text-typography-secondary">
          We use Google, LinkedIn to authorize your account and for no other purpose. Your contacts
          are not imported or messaged.
        </p>

        <p className="text-center text-sm text-typography-secondary">
          By creating an account, you agree to{" "}
          <strong className="text-primary">Terms and Conditions</strong>
        </p>
      </div>
    </div>
  )
}
