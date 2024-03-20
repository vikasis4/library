'use client';

import StyledButton from "@/package/ui/StyledButton";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();


  return (
    <div className="h-screen flex flex-col gap-20 justify-center place-items-center bg-gray-400">

      <h1 className="text-6xl border-b-4 rounded-sm pb-2 absolute top-10">Central Library</h1>
      <h1 className="text-2xl">Select One Option To Continue With</h1>

      <div className=" flex flex-row gap-20 justify-center place-items-center">
        <StyledButton txt="Vendor" fxn={() => router.push('/auth/Vendor')} />
        <StyledButton txt="Admin" fxn={() => router.push('/auth/Admin')} />
        <StyledButton txt="User" fxn={() => router.push('/auth/User')} />
      </div>

    </div>
  );
}
