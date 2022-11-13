import Link from "next/link";

export default function BackToPortFolio(props: { link: string; text: string }) {
  return (
    <div className="fixed top-0 right-0 m-0">
      <Link href={props.link}>
        <button className="bg-red-800 text-white rounded-l-full p-5 shadow shadow-red-500 bg-opacity-80 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          {props.text}
        </button>
      </Link>
    </div>
  );
}
