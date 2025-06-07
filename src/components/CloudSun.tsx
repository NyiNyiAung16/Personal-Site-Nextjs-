export default function SunLight({ onClick }: { onClick?: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-cloud-sun-icon lucide-cloud-sun cursor-pointer hover:scale-110 duration-200"
      onClick={onClick}
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

// Add this to your global CSS (e.g., globals.css or tailwind.config.js if using Tailwind's keyframes)
// @layer utilities {
//   @keyframes cloudsun-enter {
//     0% { opacity: 0; transform: scale(0.8) translateY(-10px); }
//     100% { opacity: 1; transform: scale(1) translateY(0); }
//   }
//   .animate-cloudsun-enter {
//     animation: cloudsun-enter 0.5s cubic-bezier(0.4,0,0.2,1);
//   }
// }
