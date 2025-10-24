import React from "react";
import SideBar from "@/components/SideBar";
import SimilarCandidatesClient from "@/components/afterSearch/SimilarCandidatesClient";

export default async function SimilarCandidatesPage({ searchParams }) {
  const params = await searchParams;
  const selectedCandidates = params?.candidates ? JSON.parse(decodeURIComponent(params.candidates)) : [];
  
  return (
    <main className="min-h-screen flex bg-gray-50">
      <SideBar />
      <SimilarCandidatesClient selectedCandidates={selectedCandidates} />
    </main>
  );
}
