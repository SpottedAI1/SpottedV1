import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex text-gray-900">
      <SideBar />
      <div className="w-full pt-[50px] bg-white p-8 ">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Integrations
          </h1>
          <p className="text-lg text-[#6b7280] mb-6 text-[16px]">
            Connect your tools to streamline your recruitment workflow.
          </p>
        </section>
        <section className="border border-[#e5e7eb] p-[24px] rounded-[10px]">
          <div className="flex justify-between">
            <section className="flex gap-4">
              <div>
                <nav className="p-[10px] bg-[#f3f4f6] rounded-lg">
                  <Image
                    src="/calendarBlue.svg"
                    alt="calendar"
                    width={22}
                    height={22}
                  />{" "}
                </nav>
              </div>
              <nav className="flex flex-col">
                <p className="font-bold text-[18px]">Calendar Meeting Link</p>
                <p className="text-[#6b7280] text-[12px]">
                  Add your booking link for automated interview scheduling
                </p>
              </nav>
            </section>
            <section className=" flex  items-center">
              <div className="bg-[#fef3c7] flex items-centers gap-2 px-[15px] rounded-2xl py-[5px]">
                <Image src="/clock.svg" alt="clock" width={14} height={14} />
                <p className="text-[11px] text-[#f59e0b] pb-0">Not Connected</p>
              </div>
            </section>
          </div>
          <p className="text-[#374151] mt-3 text-[14px] font-bold">
            Calendar Link
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="https://calendy.com/your-name"
              className="border border-[#d1d5db] mt-1 rounded-[6px] px-[5px] w-full py-[10px] pl-[42px] placeholder: text-[#9ca3af]"
            />
            <Image
              src="/link.svg"
              width={24}
              height={24}
              alt="link image"
              className="absolute bottom-2.5 left-2.5"
            />
          </div>
          <p className="text-[12px] text-[#6b7280] mt-3">
            This link will be automatically included in your outreach emails to
            candidates.
          </p>
        </section>
        <section className="mt-8 border border-[#e5e7eb] p-[24px] rounded-[10px]">
          <div className="flex justify-between">
            <section className="flex gap-4">
              <div>
                <nav className="p-[10px] bg-[#f3f4f6] rounded-lg">
                  <Image
                    src="/mailBlue.svg"
                    alt="calendar"
                    width={22}
                    height={22}
                  />{" "}
                </nav>
              </div>
              <nav className="flex flex-col">
                <p className="font-bold text-[18px]">Outbound Email Account</p>
                <p className="text-[#6b7280] text-[12px]">
                  Connect your email to send automated outreach messages
                </p>
              </nav>
            </section>
            <section className=" flex  items-center">
              <div className="bg-[#fef3c7] flex items-centers gap-2 px-[15px] rounded-2xl py-[5px]">
                <Image src="/clock.svg" alt="clock" width={14} height={14} />
                <p className="text-[11px] text-[#f59e0b] pb-0">Not Connected</p>
              </div>
            </section>
          </div>
          <p className="text-[#374151] mt-3 text-[14px] font-bold">
            Choose your email provider
          </p>
          <div className="flex gap-6 mt-2.5">
            <button className="w-full border-[2px] border-[#e5e7eb] rounded-[8px] py-[10px] text-[13px]  flex items-center justify-center gap-2 mb-[8px] hover:cursor-pointer font-semibold text-gray-800">
              <Image src="/google.svg" alt="google" width={18} height={18} />
              <div className="flex flex-col items-start">
                <p>Continue with Google</p>
                <p className="text-[10px] text-[#6b7280]">
                  Gmail, Google Workspace
                </p>
              </div>
            </button>
            <button className="w-full border-[2px] border-[#e5e7eb] rounded-[8px] py-[10px] text-[13px]  flex items-center justify-center gap-2 mb-[8px] hover:cursor-pointer font-semibold text-gray-800">
              <Image src="/microsoft.svg" alt="google" width={18} height={18} />
              <div className="flex flex-col items-start">
                <p>Continue with Microsoft</p>
                <p className="text-[10px] text-[#6b7280]">
                  Outlook, Office 365
                </p>
              </div>{" "}
            </button>
          </div>
        </section>
        <section className="mt-15 flex justify-center flex-col items-center gap-4 mb-5">
          <p className="font-semibold">Your data is secure</p>
          <section className="flex gap-8 ">
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/shield.svg"
                alt="lock"
                width={24}
                height={24}
                className="ml-2"
              />
              <p className="text-[#6b7280] text-[12px]">GDPR Complaint</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/lock.svg"
                alt="lock"
                width={24}
                height={24}
                className="ml-2"
              />
              <p className="text-[#6b7280] text-[12px]">End-to-End Encrypted</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/verified.svg"
                alt="lock"
                width={24}
                height={24}
                className="ml-2"
              />
              <p className="text-[#6b7280] text-[12px]">No Data Sharing</p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
