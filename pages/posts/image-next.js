import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/images/profil.jpg"


const imageNext = () => {
 
  return (
    <>
      <h1 className="text-4xl">Image dans next JS</h1>
      <h2 className="text-2xl">
        Read{" "}
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p></p>
      <Image
        src={profilePic} // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio

        alt="Image profil"
       
      />
    </>
  );
};

export default imageNext;
