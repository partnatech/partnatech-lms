import { LoginForm } from "./_components/form"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="w-[540px] flex flex-col items-center gap-6">
        <Logo />

        <div className="bg-primary-base-dark p-6 rounded-lg border border-secondary-border w-full hover:border-primary-dark/20 transition-all">
          <div className="flex flex-col gap-2">
            <p className="text-center text-2xl font-semibold">Accelerate your Expertise</p>
            <p className="text-center text-secondary-content-dark">
              You’re one step closer to becoming expert with PartnaLearn
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="text-center text-sm text-secondary-content-dark">
          We use Google, LinkedIn to authorize your account and for no other purpose. Your contacts
          are not imported or messaged.
        </p>

        <p className="text-center text-sm text-secondary-content-dark">
          By creating an account, you agree to{" "}
          <strong className="text-primary">Terms and Conditions</strong>
        </p>
      </div>
    </div>
  )
}
