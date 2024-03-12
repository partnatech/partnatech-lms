import Image from "next/image";
import { LoginForm } from "./_components/form";
import { Suspense } from "react";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Logo />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to Your Account
            </h2>
          </div>
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            src={"/images/auth.jpg"}
            alt="Partnatech"
            layout="fill"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
