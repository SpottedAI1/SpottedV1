"use client";
import Image from "next/image";
import React, { useState } from "react";
import QnA from "./QnA";

const FAQ = () => {
  const [show, setShow] = useState(false);
  const questionsAndAnswers = [
    {
      question:
        "What is Spotted AI and how is it different from LinkedIn or an ATS?",
      answer: `Spotted AI is an AI hiring platform that automates candidate sourcing, shortlisting, and outreach.
                Unlike job boards, LinkedIn, or a traditional ATS, Spotted AI doesn’t just store candidates or show you search results—it actively finds relevant profiles, learns from your feedback, and then automatically reaches out and books interviews on your calendar. Your ATS remains the system of record; Spotted AI is the engine that fills it with qualified, interview-ready candidates.`,
    },
    {
      question:
        " How does the Spotted AI agent learn what “good” looks like for each role?",
      answer: `
              For every role, you start by writing a natural-language brief (e.g., “Senior Product Manager in Austin, B2B SaaS, PLG experience”). Spotted AI then shows you five highly relevant, similar profiles. You quickly approve or reject them, and the agent uses that feedback to learn your exact preferences—skills, background, seniority, and signals you care about. After this human-guided training loop, the agent starts shortlisting and running outreach on its own, continuously improving as more feedback comes in.`,
    },
    {
      question:
        "Where does Spotted AI get candidate data from, and is it compliant?",
      answer: `Spotted AI works on top of a large pool of publicly available and partner-provided professional data to help recruiters find relevant, verified profiles. The platform is designed with privacy and compliance in mind, and we focus on using professional information for legitimate recruitment purposes only. As you adopt Spotted AI, your legal team can map it to your existing processes for GDPR/CCPA and internal data-handling policies.`,
    },
    {
      question: "Which roles and locations does Spotted AI work best for?",
      answer: `Spotted AI is built for modern hiring teams recruiting knowledge-worker roles—including engineering, product, design, data, GTM, and operations. It works especially well for companies hiring globally with a focus on major tech hubs like San Francisco, New York, Austin, Seattle, and other high-density talent markets. As long as the role has a clear professional profile online, Spotted AI can help you find and engage the right candidates faster.`,
    },
    {
      question:
        "       Do we need complex integrations to get value from Spotted AI?",
      answer: `No. You can get value from Spotted AI on day one without changing your existing stack.
                Recruiters can start by:
                
                1.  Creating a role
                2. Training the agent with the 5 profile review
                3. Letting the agent shortlist and run outreach
                
                ATS/CRM integrations can be added later to sync candidates, stages, and interviews—but they’re not required to see faster sourcing and more interviews booked.`,
    },
    {
      question: "How is pricing structured, and what are “unlock credits”?",
      answer: `Spotted AI pricing is designed around hiring volume and automation, not seats alone.
                Each plan includes a number of active roles Recruiter seats A pool of “unlock credits” that let you reveal full candidate profiles and verified contact details.This model keeps pricing simple and predictable for hiring teams: you only pay for real, usable candidate data and automation that moves searches toward booked interviews.`,
    },
  ];
  return (
    <div className=" mb-50 px-15 flex gap-20">
      <section className="w-[66%] flex flex-col justify-between">
        <nav>
          <p className="font-geist-mono mb-2">/ FAQ</p>
          <p className="font-semibold text-[40px] leading-[46px] mb-5">
            Everything You Need to Know - Upfront
          </p>
          <p className="text-[16px]">
            From setup to support and pricing, here are quick answer to the most
            common questions we get from teams considering Spotted AI
          </p>
        </nav>
        <nav
          className="relative hover:cursor-pointer"
          onClick={() => setShow(true)}
        >
          <Image
            src="/LandingPage/youtube.svg"
            alt="bg"
            width={300}
            height={300}
            className="rounded-[8px] z-1"
          />
          <div className="absolute inset-0 text-white font-semibold z-10  left-22 flex gap-2 items-center ">
            <Image
              src="/LandingPage/play.svg"
              alt="bg"
              width={20}
              height={20}
            />
            <p className="text-[16px] font-medium">Watch Demo</p>
          </div>
        </nav>
      </section>
      {/* <section className="w-full">
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
        hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>What is spotted AI and how is it different from LinkedIn ?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
        
          <p>
            How does the Spotted AI agent learn what "good" looks like for each
            role?
          </p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>Where does Spotted AI get candidate from,and is it compliant?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>Which roles and locations does Spotted AI work best for?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>Do we need complex integrations to get value from Spotted AI?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
        <nav
          className="mb-2 bg-[#fafafa] rounded-[8px]  flex justify-between p-4 items-center 
         hover:cursor-pointer hover:px-6 transition-all duration-200
        "
        >
          <p>How is pricing structured, and what are "unlock credits"?</p>
          <div className="p-3 rounded-[6px] hover:cursor-pointer hover:bg-white border border-[#f2f2f2]">
            <Image
              src="/LandingPage/plus.svg"
              alt="cross"
              width={25}
              height={25}
            />
          </div>
        </nav>
      </section> */}
      <section className="w-full">
        {questionsAndAnswers.map((qna) => (
          <QnA key={qna.question} qna={qna} />
        ))}
      </section>
      {show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-black text-2xl z-50 hover:cursor-pointer"
            >
              ✕
            </button>

            {/* YOUTUBE IFRAME */}
            <iframe
              src="https://youtube.com/embed/ApMt8bRp1Fs?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
