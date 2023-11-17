import Image from "next/image";
import Link from "next/link";

export default function CustomDirectionButton({ url, left, right }) {
  const direction = () => {
    if (left) {
      return (
        <>
          <Link href={url}>
            <Image src="/left-polygon.png" width={50} height={50} />
          </Link>
        </>
      );
    } else if (right) {
      return (
        <Link href={url}>
          <Image src="/right-polygon.png" width={50} height={50} />
        </Link>
      );
    }
  };

  return direction();
}
