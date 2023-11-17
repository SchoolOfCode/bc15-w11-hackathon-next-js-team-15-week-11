import Image from "next/image";
import Link from "next/link";

export default function CustomButton({ url, left, right }) {
  //   const direction = () => {
  //     if (left) {
  //       return (
  //         <>
  //           <Link href={url}>
  //             <Image src="/left-polygon.png" width={50} height={50} />
  //           </Link>
  //         </>
  //       );
  //     } else if (right) {
  //       return (
  //         <Link href={url}>
  //           <Image src="/right-polygon.png" width={50} height={50} />
  //         </Link>
  //       );
  //     }
  //   };

  return (
    <div class="w-10">
      {left && (
        <Link href={url}>
          <Image src="/left-polygon.png" width={50} height={50} />
        </Link>
      )}

      {right && (
        <Link href={url}>
          <Image src="/right-polygon.png" width={50} height={50} />
        </Link>
      )}
    </div>
  );
}



test("when button is clicked, it leads to the url it's intended to go to", () => {

  //render

  //locate
    //fireclick the button
  //assert


});