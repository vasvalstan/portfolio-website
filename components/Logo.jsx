import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-[28px] font-normal">
      127.0.0.1<span className="text-accent text-4xl"></span>
    </Link>
  );
};

export default Logo;
