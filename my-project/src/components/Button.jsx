export default function Button({
  click,
  condition,
  isPrevButton,
  isNextButton,
}) {
  
  const buttonClasses = "rounded-lg py-2 px-3 bg-slate-500 border-2 border-slate-500 text-white hover:bg-transparent hover:text-slate-500 duration-500";
  if (condition) {
    return (
      <button className={buttonClasses} onClick={() => click()}>
        {isPrevButton ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-track-prev-filled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z"
              strokeWidth="0"
              fill="currentColor"
            />
            <path
              d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        ) : (
          isNextButton && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-player-track-next-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                strokeWidth="0"
                fill="currentColor"
              />
              <path
                d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
          )
        )}
      </button>
    );
  }
}
