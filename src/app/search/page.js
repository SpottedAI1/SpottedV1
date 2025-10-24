import React from "react";
import SideBar from "@/components/SideBar";
import SearchClient from "@/components/afterSearch/SearchClient";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const prompt = (typeof params?.get === 'function' ? params.get('q') : params?.q) ?? "";
  console.log('SearchPage received params:', params);
  console.log('SearchPage extracted prompt:', prompt);
  return (
    <main className="min-h-screen flex bg-gray-50">
      <SideBar />
      <SearchClient prompt={prompt} />
    </main>
  );
}


