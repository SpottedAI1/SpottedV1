import React from "react";

const DynamicBlog = () => {
  const props = {
    title: "test blog",
    slug: "",
    except: "short summar",
    content: "full blog body",
    "image link":
      "https://drive.google.com/file/d/1V1rRBkCZed0he3cl08AL4cZ7R8JL82au/view?usp=sharing",
    date: "2025-03-25",
    category: "Product updates",
    seo_title: "",
    seo_description: "",
    location: "",
    Published: "yes",
  };

  return (
    <div className=" rounded-md ">
      <nav className="bg-[#f7f7f7] overflow-hidden hover:cursor-pointer">
        <div className="overflow-hidden rounded-[8px] md:h-[314px]">
          <img
            src={
              props["image link"].includes("drive.google.com")
                ? `https://drive.google.com/uc?export=view&id=${
                    props["image link"].split("/d/")[1].split("/")[0]
                  }`
                : props["image link"]
            }
            alt="image"
            className="w-full h-auto"
          />
        </div>
        <div className="px-3 pb-2">
          <p className="font-semibold text-[20px] mt-5 mb-3">{props.title}</p>

          <p className="text-medium text-[14px] text-[#636363] mb-8">
            {props.except}
          </p>

          <div className="flex justify-between items-center">
            <p className="text-[12px] font-medium">{props.category}</p>
            <p className="text-[12px] font-medium text-[#636363]">
              {props.date}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DynamicBlog;
