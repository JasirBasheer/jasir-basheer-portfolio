import Image from "next/image";

export function Hero() {
  return (
    <div className="w-full ">
      {/* <div className="sm:pt-14 pt-6 pb-5">
        <Image
          src="/heroimage.png"
          className="rounded-2xl w-full h-auto max-h-[13rem] object-cover"
          width={500}
          height={500}
          alt="Picture of the author"
      />{" "}
      </div> */}

      <h4 className="text-[1.3rem] font-poppins font-normal">
        Hi, I&apos;m{" "}
        <span className="font-poppins text-[#0EA5E9]">Jasir Basheer</span>
      </h4>

      <h1 className="sm:text-[2.6rem] text-[2rem] font-custom font-medium">
        I make <span className="text-[#16A34A]">full-stack</span> products that
        people <span className="text-[#F472B6]">love.</span>
      </h1>
      <p className="mt-4 font-poppins font-normal text-[rgb(148,163,184)] text-[1.1rem]">
        Developer, Founder, fetla Certified Hacker, OPS Contributor, Designer
        and Student. I play, read, write and travel for fun.
      </p>
    </div>
  );
}
