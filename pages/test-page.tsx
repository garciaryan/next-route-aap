import Link from "next/link";

function TestPage() {
  return (
    <div className="container px-[5%] my-10">
      <h1>Test Page - No data</h1>
      <Link href="/posts" className="hover:text-red-400">To the blog!</Link>
    </div>
  )
}

export default TestPage;