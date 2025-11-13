import Link from "next/link";

const page = () => {
  return (
    <>
      [{" "}
      <Link
        href="https://x.com/ohellrae"
        target="_blank"
        className="underline text-blue-500 font-medium"
      >
        here
      </Link>{" "}
      ] i am
    </>
  );
};

export default page;
