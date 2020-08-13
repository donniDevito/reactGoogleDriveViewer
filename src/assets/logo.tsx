import React from 'react';

const logoSVG = {
  width: 527.42,
  height: 94.15,
  textPath:
    'M0 91.14h5.39l9.69-26.93H52.9l9.81 26.93h13.88L44.16 2.82H32.07zm33.87-78.87L51.1 59.42H16.87zm59.11-4.66h48.23L91.19 86.35v4.79h66.66v-4.79h-51.1l50.14-78.74V2.82h-63.9v4.79zm120.99 84.48c24.41 0 33.87-9.81 33.87-34.7V2.82h-5.62v54.93c0 20.22-6.34 28.24-25.73 28.24-18.19 0-23.81-8.26-23.81-28.24V2.82h-13.52v54.81c-.01 23.81 11.36 34.46 34.81 34.46zm107.58-.95h14.36L314.13 54.4c13.4-3.11 21.42-11.61 21.42-25.49 0-18.31-13.52-26.09-34.59-26.09h-31.23v88.32h13.04V55.72h17.59zm-38.77-40.33V7.61h17.23c16.04 0 22.02 5.51 22.02 21.3 0 16.16-5.98 21.9-21.3 21.9zm98.49 40.33h13.4V57.39l30.88-54.57h-6.22l-27.29 48.11-27.17-48.11H349.8l31.47 55.05z',
  imagePath:
    'M443.04 45.27h84.38c-.41-12.49-5.03-21.57-11.21-28.17zm-6.55-1.35l76.87-29.59C499.5 1.97 480.41 0 480.41 0zm.02 6.32l43.91 43.91s19.14-1.91 33-14.3zm6.52-1.36l73.22 28.19c6.17-6.6 10.76-15.69 11.17-28.19z',
};

const colors = {
  'ci-blue': {
    100: '#C1D9F5',
    300: '#004882',
    500: '#001e36',
    700: '#000F1C',
    900: '#000305',
  },
  'ci-gold': {
    100: '#FFE4B4',
    300: '#F5BC5B',
    500: '#cc9d4b',
    700: '#8C6C34',
    900: '#4D3B1C',
  },
};
interface LogoProps {
  className?: string;
  textColor?: string;
  imageColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  className,
  textColor = colors['ci-blue'][500],
  imageColor = colors['ci-gold'][500],
}: LogoProps): JSX.Element => (
  <svg
    className={className}
    width={logoSVG.width}
    height={logoSVG.height}
    viewBox={`0 0 ${logoSVG.width} ${logoSVG.height}`}
  >
    <path className="logo__textPath" d={logoSVG.textPath} fill={textColor} />
    <path className="logo__imagePath" d={logoSVG.imagePath} fill={imageColor} />
  </svg>
);

export default Logo;
