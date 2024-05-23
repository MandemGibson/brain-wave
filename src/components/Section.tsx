import { ReactNode } from "react";
import SectionSvg from "../assets/svg/SectionSvg";

type SectionProps = {
  className: string;
  id: string;
  crosses: boolean;
  crossesOffset: string;
  customPaddings: boolean;
  children: ReactNode;
};

const Section = ({ className, ...rest }: SectionProps) => {
  return (
    <div
      id={rest.id}
      className={`relative ${
        rest.customPaddings ||
        `py-10
    lg:py-16 xl:py-20 ${rest.crosses ? "lg:py-32 xl:py-40" : ""}`
      } ${className || ""}`}
    >
      {rest.children}

      <div
        className="hidden absolute top-0 left-5 w-0.25
      h-full bg-stroke-1 pointer-events-none md:block
      lg:left-7.5 xl:left-10"
      />

      <div
        className="hidden absolute top-0 right-5 w-0.25
      h-full bg-stroke-1 pointer-events-none md:block
      lg:right-7.5 xl:right-10"
      />

      {rest.crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5
        right-7.5 h-0.25 bg-stroke-1 
        ${rest.crossesOffset && rest.crossesOffset} pointer-events-none
        lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={rest.crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
