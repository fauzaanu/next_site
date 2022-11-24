import * as React from "react";
function logo(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <div id="svg-animation">
      <svg data-name="Layer 1" viewBox="0 0 500 500" {...props}>
        <defs>
          <clipPath id="prefix__b">
            <path
              className="prefix__svg-elem-1"
              fill="none"
              d="M27.58-69.71h507.4v520.15H27.58z"
            />
          </clipPath>
        </defs>
        <path
          className="prefix__svg-elem-2"
          d="M370.07 126.31l-119-1.73a79 79 0 00-78.34 62.3l-43.11 199.57c-2.87 13.28-22.74 10.47-21.63-3.07 4.26-52.16 51.37-135.53 269.31-213.81 23.33-8.38 17.57-42.9-7.23-43.26z"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={5}
          fill="none"
        />
      </svg>
    </div>
  );
}
const Memologo = React.memo(logo);
export default Memologo;
