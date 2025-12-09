import FAQ from "@/components/landingPage/FAQ";
import Script from "next/script";

export default function FAQPage() {
  return (
    <main className=" bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Spotted AI and how is it different from LinkedIn or an ATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spotted AI is a human-guided AI recruiting platform that automates candidate sourcing, shortlisting, and outreach. Unlike LinkedIn, job boards, or a traditional ATS that only show search results or store applicants, the platform actively finds relevant profiles, learns from recruiter feedback, and automatically books interviews. Your ATS remains the system of record, while Spotted AI acts as the intelligent sourcing and outreach layer."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Spotted AI agent learn what “good” looks like for each role?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For each role, recruiters start with a natural-language brief describing the ideal candidate. The system then shows five highly relevant profiles for quick approval or rejection. This feedback trains the AI on exact preferences such as skills, background, seniority, and quality signals. After this human-guided learning loop, the agent independently shortlists and runs outreach while continuously improving with new feedback."
      }
    },
    {
      "@type": "Question",
      "name": "Where does Spotted AI get candidate data from, and is it compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spotted AI works with lawfully obtained, publicly available and partner-authorized professional data used strictly for recruitment purposes. The platform is designed with privacy, consent, and opt-out mechanisms in mind, and supports alignment with GDPR, CCPA, and internal data-handling policies for enterprise customers."
      }
    },
    {
      "@type": "Question",
      "name": "Which roles and locations does Spotted AI work best for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The platform is built for hiring knowledge workers across engineering, product, design, data, sales, marketing, and operations. It performs especially well in global hiring markets such as San Francisco, New York, Austin, Seattle, London, and other major tech hubs where professional hiring data is widely available."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need complex integrations to get value from Spotted AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Teams can start using Spotted AI immediately without changing their existing hiring stack. Recruiters can create a role, train the agent using the five-profile review, and let it shortlist and run outreach. ATS and CRM integrations can be added later for syncing candidates and interviews but are not required to generate value."
      }
    },
    {
      "@type": "Question",
      "name": "How is pricing structured, and what are unlock credits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is based on active hiring roles and automation usage rather than seats alone. Each plan includes recruiter access and a pool of unlock credits that reveal full candidate profiles and verified contact details. This model keeps costs predictable and directly tied to real hiring output such as qualified candidates and booked interviews."
      }
    }
  ]
}
          `,
        }}
      />
      <div className="text-gray-900 py-20">
        <FAQ />
      </div>
    </main>
  );
}
