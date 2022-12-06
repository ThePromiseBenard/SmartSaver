import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className=" bg-black/70">
      <div className="h-screen w-full flex container mx-auto flex-col gap-10 items-center justify-center text-white  text-center px-4 ">
        <div className="max-w-7xl space-y-8">
          <div className="space-y-2">
            <p className="font-medium text-2xl">Our Website is</p>
            <h1 className="font-bold text-6xl uppercase">coming soon</h1>
          </div>

          <p className="text-lg max-w-xl mx-auto">
            Our website is under construction but we are ready to go! Want to
            know more about usor just to say hello? Drop us your email details
            and we will get back as soon as possible.
          </p>

          <p className="text-lg">
            Then to access our old website click here:{" "}
            <Link
              className=" text-smartOrange"
              href="https://save.smartsaver.ng"
            >
              save.smartsaver.ng
            </Link>
          </p>
        </div>

        <form className=" flex flex-col lg:flex-row w-full lg:w-[80%] gap-3 justify-between">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full lg:w-[40%] py-4 px-2 text-black"
          ></input>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full py-4 lg:w-[40%] px-2 text-black"
          ></input>
          <button
            type="submit"
            className="w-full lg:w-[20%] py-4 px-2 bg-smartOrange font-bold text-lg capitalize"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ComingSoon;
