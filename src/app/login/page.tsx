import Image from "next/image";
import { LoginForm } from "./_components/form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="font-black hover:text-primary text-2xl transition-colors ease-linear duration-300">
            PartnaLearn
          </div>
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white p-6 shadow sm:rounded-lg sm:px-12">
          <Suspense>
            <LoginForm />
          </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
