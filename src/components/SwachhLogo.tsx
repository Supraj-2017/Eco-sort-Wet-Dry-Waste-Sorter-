import React from "react";

interface SwachhLogoProps {
  className?: string;
  size?: number; // width and height in px
}

export const SwachhLogo: React.FC<SwachhLogoProps> = ({
  className = "",
  size = 180,
}) => {
  return (
    <div 
      className={`relative select-none flex items-center justify-center transition-all duration-300 hover:scale-[1.03] ${className}`}
      style={{ width: size, height: size }}
      id="swachh-vector-logo"
    >
      <svg
        viewBox="0 0 512 512"
        width="100%"
        height="100%"
        className="drop-shadow-lg filter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic/glassy squircle clip path to avoid any white corners */}
          <clipPath id="squircleClip">
            <rect x="8" y="8" width="496" height="496" rx="120" ry="120" />
          </clipPath>

          {/* Saffron gradient */}
          <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFA040" />
            <stop offset="100%" stopColor="#FF8000" />
          </linearGradient>

          {/* White gradient with slight grey shadow at base */}
          <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F0F2F5" />
          </linearGradient>

          {/* Emerald green gradient */}
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1BC20A" />
            <stop offset="100%" stopColor="#0E7E04" />
          </linearGradient>

          {/* Wet waste bin gradient */}
          <linearGradient id="wetWasteBinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>

          {/* Dry waste bin gradient */}
          <linearGradient id="dryWasteBinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Bezel inner glow gradient */}
          <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#E2E8F0" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#cbd5e1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Outer squircle base for the glossy metallic rim (gives depth without white corners) */}
        <rect 
          x="8" 
          y="8" 
          width="496" 
          height="496" 
          rx="120" 
          ry="120" 
          fill="url(#bezelGrad)" 
          stroke="#475569" 
          strokeWidth="3.5"
          strokeOpacity="0.25"
        />

        {/* Content group clipped to inner squircle */}
        <g clipPath="url(#squircleClip)">
          {/* TRICOLOR BACKGROUND STRIPES (matching the provided photo's wave flag look) */}
          <rect x="0" y="0" width="512" height="155" fill="url(#saffronGrad)" />
          <rect x="0" y="152" width="512" height="175" fill="url(#whiteGrad)" />
          <rect x="0" y="322" width="512" height="190" fill="url(#greenGrad)" />

          {/* INNER WHITE HIGHLIGHT GLOW FOR THE GLASSY FEEL */}
          <path 
            d="M 30,30 Q 256,60 482,30 Q 450,150 256,120 Q 62,150 30,30 Z" 
            fill="white" 
            fillOpacity="0.12" 
          />

          {/* 1. NATIONAL SYMBOL - ASHOKA CHAKRA (Middle top) - REMOVED AS REQUESTED */}

          {/* 2. SWACHH BHARAT SPECTACLES (outlined in solid deep carbon) */}
          <g id="spectacles-group" transform="translate(0, 10)">
            
            {/* Left temple bar curved */}
            <path 
              d="M 148 238 Q 120 220 85 242" 
              fill="none" 
              stroke="#111" 
              strokeWidth="6" 
              strokeLinecap="round" 
            />

            {/* Left Lens Hoop */}
            <circle cx="188" cy="245" r="45" fill="white" stroke="#111" strokeWidth="8" />
            <text 
              x="188" 
              y="253" 
              textAnchor="middle" 
              fill="#111" 
              fontSize="24" 
              fontWeight="900" 
              fontFamily='"Yatra One", "Cinzel", "Inter", sans-serif'
            >
              स्वच्छ
            </text>

            {/* Connecting Bridge (with small tricolor stripes details) */}
            <path 
              d="M 233 241 Q 256 220 279 241" 
              fill="none" 
              stroke="#111" 
              strokeWidth="8" 
              strokeLinecap="round" 
            />
            {/* Small flag colors inside bridge */}
            <line x1="242" y1="237" x2="270" y2="237" stroke="#FF9933" strokeWidth="2.5" />
            <line x1="242" y1="241" x2="270" y2="241" stroke="#E2E8F0" strokeWidth="2.5" />
            <line x1="242" y1="245" x2="270" y2="245" stroke="#138808" strokeWidth="2.5" />

            {/* Right Lens Hoop */}
            <circle cx="324" cy="245" r="45" fill="white" stroke="#111" strokeWidth="8" />
            <text 
              x="324" 
              y="253" 
              textAnchor="middle" 
              fill="#111" 
              fontSize="24" 
              fontWeight="900" 
              fontFamily='"Yatra One", "Cinzel", "Inter", sans-serif'
            >
              भारत
            </text>

            {/* Right temple bar curved */}
            <path 
              d="M 369 238 Q 397 220 427 242" 
              fill="none" 
              stroke="#111" 
              strokeWidth="6" 
              strokeLinecap="round" 
            />

            {/* Subtext 'SWACHH BHARAT ABHIYAN' */}
            <text 
              x="256" 
              y="310" 
              textAnchor="middle" 
              fill="#111" 
              fontSize="13.5" 
              fontWeight="900" 
              letterSpacing="2.5"
              fontFamily='"Inter", sans-serif'
            >
              SWACHH BHARAT ABHIYAN
            </text>
          </g>

          {/* 3. INTERCONNECTED WASTE BINS (exact match for the icon in the user's graphic) */}
          <g id="two-bins-group" transform="translate(0, 15)">
            
            {/* LEFT BIN (WET WASTE - Green) */}
            <g transform="translate(142, 318)" id="wet-waste-bin-group">
              {/* Outer Glow */}
              <rect x="-2" y="-2" width="112" height="124" rx="16" fill="#138808" fillOpacity="0.2" filter="blur(4px)" />
              {/* Bin Body */}
              <rect x="0" y="0" width="108" height="120" rx="14" fill="url(#wetWasteBinGrad)" stroke="#FFFFFF" strokeWidth="3" />
              {/* Lid Line */}
              <rect x="-4" y="0" width="116" height="10" rx="4" fill="#14532D" />
              {/* Droplet & Veg icon */}
              <circle cx="54" cy="45" r="21" fill="#14532D" fillOpacity="0.4" />
              
              {/* Water Droplet SVG Path */}
              <path 
                d="M 54,32 C 48,39 46,43 46,47 C 46,51.5 49.5,55 54,55 C 58.5,55 62,51.5 62,47 C 62,43 60,39 54,32 Z" 
                fill="#FFFFFF" 
              />
              {/* Label "WET" */}
              <text 
                x="54" 
                y="84" 
                textAnchor="middle" 
                fill="#FFFFFF" 
                fontSize="14" 
                fontWeight="900" 
                letterSpacing="1"
                fontFamily='"Inter", sans-serif'
              >
                WET
              </text>
              {/* Label "WASTE" */}
              <text 
                x="54" 
                y="101" 
                textAnchor="middle" 
                fill="#DCFCE7" 
                fontSize="11" 
                fontWeight="800" 
                letterSpacing="0.5"
                fontFamily='"Inter", sans-serif'
              >
                WASTE
              </text>
            </g>

            {/* INTERLOCKING MIDDLE SYMBOL representing connection */}
            <path 
              d="M 252,360 Q 256,364 260,360 Q 256,380 252,400 Q 256,404 260,400" 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="4" 
              strokeLinejoin="round" 
              strokeLinecap="round"
              strokeDasharray="6 4"
              strokeOpacity="0.8"
            />

            {/* RIGHT BIN (DRY WASTE - Blue) */}
            <g transform="translate(262, 318)" id="dry-waste-bin-group">
              {/* Outer Glow */}
              <rect x="-2" y="-2" width="112" height="124" rx="16" fill="#1D4ED8" fillOpacity="0.2" filter="blur(4px)" />
              {/* Bin Body */}
              <rect x="0" y="0" width="108" height="120" rx="14" fill="url(#dryWasteBinGrad)" stroke="#FFFFFF" strokeWidth="3" />
              {/* Lid Line */}
              <rect x="-4" y="0" width="116" height="10" rx="4" fill="#1E3A8A" />
              {/* Recycling Icon circular background */}
              <circle cx="54" cy="45" r="21" fill="#1E3A8A" fillOpacity="0.4" />
              
              {/* Multi-Arrow Recycle Path */}
              <g transform="translate(42, 33) scale(0.65)" stroke="#FFFFFF" strokeWidth="3" fill="none">
                <path d="M 18,5 L 29,15 L 18,25 M 29,15 L 7,15 Q 4,15 4,18 L 4,24" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 18,25 A 9,9 0 0,1 12,28" strokeLinecap="round" />
              </g>
              <g transform="translate(54, 45) scale(0.5) rotate(120)">
                <circle cx="0" cy="0" r="10" fill="none" stroke="white" strokeWidth="4" strokeDasharray="18 10" />
                <polygon points="6,-6 14,0 6,6" fill="white" />
              </g>

              {/* Label "DRY" */}
              <text 
                x="54" 
                y="84" 
                textAnchor="middle" 
                fill="#FFFFFF" 
                fontSize="14" 
                fontWeight="900" 
                letterSpacing="1"
                fontFamily='"Inter", sans-serif'
              >
                DRY
              </text>
              {/* Label "WASTE" */}
              <text 
                x="54" 
                y="101" 
                textAnchor="middle" 
                fill="#DBEAFE" 
                fontSize="11" 
                fontWeight="800" 
                letterSpacing="0.5"
                fontFamily='"Inter", sans-serif'
              >
                WASTE
              </text>
            </g>

          </g>

          {/* SPARKLING ADORNMENTS FROM THE PHOTO ACCENTS */}
          {/* Saffron side stars */}
          <polygon points="56,120 60,128 68,129 62,135 64,143 56,138 48,143 50,135 44,129 52,128" fill="#FFC933" fillOpacity="0.4" />
          {/* Green side leaves */}
          <path d="M 460,370 C 470,365 470,355 460,350 C 450,355 450,365 460,370 Z" fill="#DCFCE7" fillOpacity="0.3" />
          <path d="M 470,365 C 478,362 478,354 470,350 C 462,354 462,362 470,365 Z" fill="#BBF7D0" fillOpacity="0.3" />

        </g>

        {/* Glossy 3D edge flare reflections and outer border */}
        <rect 
          x="8" 
          y="8" 
          width="496" 
          height="496" 
          rx="120" 
          ry="120" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="3" 
          strokeOpacity="0.6" 
        />
        
        {/* Sleek outer drop shadow overlay */}
        <rect 
          x="10" 
          y="10" 
          width="492" 
          height="492" 
          rx="118" 
          ry="118" 
          fill="none" 
          stroke="#475569" 
          strokeWidth="1.5" 
          strokeOpacity="0.1" 
        />
      </svg>
    </div>
  );
};
