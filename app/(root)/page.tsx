import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1 className="head-text">Home</h1>
      <UserButton afterMultiSessionSingleSignOutUrl="/" />
    </main>
  )
}