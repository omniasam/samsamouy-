"use client";

interface SectionTitleProps {
  label?: string; // optional light background
  title: string | string[];
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function TitleV2({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const textAlign = align === "left" ? "text-left" : "text-center";
  const justify = align === "left" ? "items-start" : "items-center";
  const labelPosition = align === "left" ? "left-0" : "left-1/2 -translate-x-1/2";

  const renderTitle = () => {
    if (Array.isArray(title)) {
      return (
        <div className="space-y-1">
          {title.map((line, idx) => (
            <div key={idx} className="leading-tight break-words ">
              <span
                className={idx === 0 ? "text-mainColor" : "text-darkblue"}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return <span className="break-words">{title}</span>;
  };

  return (
    <div
      className={`relative flex flex-col ${justify} ${textAlign} ${className} py-12 px-4 sm:px-0`}
    >
      {/* Background label number (optional) */}
      {label && (
        <span
          className={`absolute top-[-10px]   ${labelPosition} text-darkblue font-extrabold 
            text-[50px] sm:text-[80px] lg:text-[120px] opacity-10 z-0 leading-none`}
        >
          {label}
        </span>
      )}

      {/* Title */}
     <h2
  className={`relative z-10 text-3xl sm:text-4xl md:text-5xl 
  lg:text-6xl font-bold text-darkblue`}
>

        {renderTitle()}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="relative z-10 mt-[30px]  text-gray-600 text-base sm:text-lg max-w-xl">
          {subtitle}
        </p>
      )}

      {/* Hover Accent Bar */}
    <div
  className={`group mt-3 h-[2px] w-16 bg-mainColor rounded-full 
    transition-all duration-300 ease-in-out 
   hover:w-[100px]
    ${align === "center" ? "mx-auto" : "ml-0"}
  `}
/>

    </div>
  );
}
