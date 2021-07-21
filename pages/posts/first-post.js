import Link from "next/link";


const firstPost = (props) => {
  console.log({props});
  return (
    <>
      <pre>{JSON.stringify(props, null, 10)}</pre>
      <h1 className="text-8xl">First Post</h1>
      <h2 className="text-4xl">
        Read{" "}
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default firstPost;
