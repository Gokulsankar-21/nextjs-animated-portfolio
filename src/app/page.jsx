import Image from "next/image";
const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12  lg:px-24 xl:px-28 ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src={"/hero.png"} fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 justify-center items-center py-3 sm:p-0">
        {/* TITLE */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESC */}
        <p className="lg:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4 ">
          <button className="p-4 text-white bg-black rounded-lg ring-1 ring-black">
            View My Work
            
          </button>
          <button className="p-4 text-black rounded-lg ring-1 ring-black ">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
