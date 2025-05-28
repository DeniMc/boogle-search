export const dynamic = 'force-dynamic';
import React, { Suspense } from "react";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  const query = searchParams?.searchTerm || "default";
  await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate loading delay

  let results = null;

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}&start=${startIndex}`
    );

    if (!response.ok) {
      throw new Error("Ah you've messed up there, Ted.");
    }

    const data = await response.json();
    results = data;
  } catch (error) {
    console.error("Search error:", error.message);
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Ah Feck Ted</h1>
        <p className="text-lg">They're a bunch of cowboys</p>
        <Link href="/" className="text-blue-500 mt-4">Home</Link>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for "{query}"
        </h1>
        <p className="text-lg mb-4">
          Is there anything to be said for another mass?
        </p>
        <Link href="/" className="text-blue-500">Home</Link>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="text-center py-10">Loading results…</div>}>
      <WebSearchResults results={results} />
    </Suspense>
  );
}

