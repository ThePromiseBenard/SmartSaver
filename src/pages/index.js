import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="h-screen flex items-center justify-center text-white bg-black/70 text-center">
      <div className="max-w-7xl space-y-8">
        <div className="space-y-2">
          <p className="font-medium text-2xl">Our Website is</p>
          <h1 className="font-bold text-6xl uppercase">coming soon</h1>
        </div>

        <p className="text-lg max-w-xl mx-auto">
          Our website is under construction but we are ready to go! Want to know
          more about usor just to say hello? Drop us your email details and we
          will get back as soon as possible.
        </p>

        <p className="text-lg px-64">
          Then to access our old website click here:{" "}
          <Link className=" text-smartOrange" href="https://save.smartsaver.ng">
            save.smartsaver.ng
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ComingSoon;
