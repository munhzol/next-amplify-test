import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>This is a page</h1>
      <img src="./database.svg" alt="chart" width={24} height={24} />

      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};

export default Page;
