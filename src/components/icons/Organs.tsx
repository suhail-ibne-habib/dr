import { cn } from "@/lib/cn";

type OrganProps = {
  className?: string;
  uid: string;
};

export function Brain({ className, uid }: OrganProps) {
  return (
    <svg viewBox="0 0 220 200" className={cn("w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-brain`} x1="20%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#9ff0c8" />
          <stop offset="45%" stopColor="#3ec9b4" />
          <stop offset="100%" stopColor="#1f7fa8" />
        </linearGradient>
        <radialGradient id={`${uid}-brain-shine`} cx="35%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>
      <ellipse cx="110" cy="168" rx="62" ry="10" fill="#0a2540" opacity="0.08" />
      <path
        d="M48 96c-10-28 8-62 48-68 12-18 42-22 62-8 22-10 52 2 54 32 16 8 22 32 10 52-2 28-18 48-42 56-20 18-52 18-74 4-28 6-54-16-58-48-8-4-12-12-10-20z"
        fill={`url(#${uid}-brain)`}
      />
      <path
        d="M110 36c2 18 2 42 0 128"
        stroke="#0a2540"
        strokeOpacity="0.18"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M70 70c18 6 28-8 48-6M62 98c22 4 30-10 52-6M78 128c16 6 26-4 40-2M138 68c16-8 32 0 40 10M146 100c18-4 30 6 36 16M140 130c14 2 26-2 34 8"
        stroke="#e8fff6"
        strokeOpacity="0.45"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="86" cy="72" rx="28" ry="18" fill={`url(#${uid}-brain-shine)`} />
    </svg>
  );
}

export function Liver({ className, uid }: OrganProps) {
  return (
    <svg viewBox="0 0 220 200" className={cn("w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-liver`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#8ef0c2" />
          <stop offset="40%" stopColor="#2db8a8" />
          <stop offset="100%" stopColor="#1a6f9a" />
        </linearGradient>
        <radialGradient id={`${uid}-liver-shine`} cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="110" cy="170" rx="58" ry="10" fill="#0a2540" opacity="0.08" />
      <path
        d="M36 92c8-40 46-62 96-54 38 6 70 22 78 52 6 24-8 46-34 56-18 8-20 22-8 34-22 8-48 4-62-10-16 12-42 10-58-6-22-20-22-46-12-72z"
        fill={`url(#${uid}-liver)`}
      />
      <path
        d="M86 70c18 22 22 48 14 78"
        stroke="#e9fff7"
        strokeOpacity="0.35"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M118 78c8 20 6 44-4 66M148 88c6 16 4 34-6 50"
        stroke="#0a2540"
        strokeOpacity="0.12"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="92" cy="84" rx="36" ry="20" fill={`url(#${uid}-liver-shine)`} />
    </svg>
  );
}

export function Heart({ className, uid }: OrganProps) {
  return (
    <svg viewBox="0 0 220 200" className={cn("w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-heart`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#9be7ff" />
          <stop offset="45%" stopColor="#3aa0d8" />
          <stop offset="100%" stopColor="#1d5f9a" />
        </linearGradient>
        <radialGradient id={`${uid}-heart-shine`} cx="35%" cy="25%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="110" cy="172" rx="50" ry="9" fill="#0a2540" opacity="0.08" />
      <path
        d="M110 168c-46-32-70-58-70-92 0-24 18-40 40-40 14 0 24 6 30 16 6-10 16-16 30-16 22 0 40 16 40 40 0 34-24 60-70 92z"
        fill={`url(#${uid}-heart)`}
      />
      <path
        d="M110 70c0 18 8 32 8 50"
        stroke="#eaf6ff"
        strokeOpacity="0.45"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="92" cy="82" rx="24" ry="16" fill={`url(#${uid}-heart-shine)`} />
    </svg>
  );
}

export function Kidney({ className, uid }: OrganProps) {
  return (
    <svg viewBox="0 0 220 200" className={cn("w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-kidney`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#8fd4ff" />
          <stop offset="50%" stopColor="#3b8fd4" />
          <stop offset="100%" stopColor="#1d4f88" />
        </linearGradient>
        <radialGradient id={`${uid}-kidney-shine`} cx="32%" cy="28%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="110" cy="172" rx="52" ry="9" fill="#061526" opacity="0.18" />
      <path
        d="M78 46c32-18 70-8 80 28 8 28-4 48-28 58 20 14 24 38 8 56-22 24-62 20-78-6-18-28-8-62 10-78-14-16-12-42 8-58z"
        fill={`url(#${uid}-kidney)`}
      />
      <path
        d="M118 92c12 8 18 22 14 36"
        stroke="#dff3ff"
        strokeOpacity="0.4"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="104" cy="78" rx="22" ry="16" fill={`url(#${uid}-kidney-shine)`} />
    </svg>
  );
}

export function Lungs({ className, uid }: OrganProps) {
  return (
    <svg viewBox="0 0 360 340" className={cn("w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`${uid}-l`} x1="10%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#b9ecff" />
          <stop offset="40%" stopColor="#4eb6e6" />
          <stop offset="100%" stopColor="#1d6ca8" />
        </linearGradient>
        <linearGradient id={`${uid}-r`} x1="20%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#c5f3ff" />
          <stop offset="42%" stopColor="#3aa4d8" />
          <stop offset="100%" stopColor="#185f9a" />
        </linearGradient>
        <linearGradient id={`${uid}-tree`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#d9ff8a" />
          <stop offset="100%" stopColor="#2db38a" />
        </linearGradient>
        <radialGradient id={`${uid}-shine`} cx="30%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-glow`} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="180" cy="318" rx="110" ry="14" fill="#0a2540" opacity="0.1" />
      <path
        d="M168 58c-8 8-14 24-16 46-38-8-86 10-102 58-16 48-4 102 34 128 24 16 52 12 66-6 10-14 14-40 16-70 2-28 4-62 2-90-14-18-10-48 0-66z"
        fill={`url(#${uid}-l)`}
        filter={`url(#${uid}-glow)`}
      />
      <path
        d="M192 58c8 8 14 24 16 46 38-8 86 10 102 58 16 48 4 102-34 128-24 16-52 12-66-6-10-14-14-40-16-70-2-28-4-62-2-90 14-18 10-48 0-66z"
        fill={`url(#${uid}-r)`}
        filter={`url(#${uid}-glow)`}
      />
      <g
        stroke={`url(#${uid}-tree)`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      >
        <path d="M180 46v96" />
        <path d="M180 90c-22 10-34 28-40 52" />
        <path d="M180 90c22 10 34 28 40 52" />
        <path d="M148 128c-18 8-28 24-32 42" />
        <path d="M212 128c18 8 28 24 32 42" />
        <path d="M142 154c-16 18-18 40-14 58" />
        <path d="M218 154c16 18 18 40 14 58" />
        <path d="M180 118c-10 22-10 48-6 70" />
        <path d="M180 118c10 22 10 48 6 70" />
      </g>
      <ellipse cx="120" cy="110" rx="36" ry="24" fill={`url(#${uid}-shine)`} />
      <ellipse cx="250" cy="118" rx="30" ry="20" fill={`url(#${uid}-shine)`} />
    </svg>
  );
}

const organs = {
  brain: Brain,
  liver: Liver,
  heart: Heart,
  kidney: Kidney,
  lungs: Lungs,
};

export function Organ({
  name,
  className,
}: {
  name: keyof typeof organs;
  className?: string;
}) {
  const Svg = organs[name];
  return <Svg className={className} uid={name} />;
}
