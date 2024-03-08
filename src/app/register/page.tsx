import Image from "next/image";
import { RegisterForm } from "./_components/form";
import { Suspense } from "react";
import { Logo } from "@/components/logo";

export default function RegisterPage() {
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
           <Logo />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register New Account
            </h2>
          </div>
          <Suspense>
            <RegisterForm />
          </Suspense>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            src={"/images/auth.jpg"}
            alt="Partnatech"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}
