function Basketball_alt ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.7357 20.1916C22.2597 17.0238 23.3592 10.7884 20.1914 6.2643C17.0237 1.74025 10.7882 0.640771 6.26415 3.80855C1.7401 6.97632 0.640621 13.2118 3.8084 17.7358C6.97617 22.2599 13.2116 23.3594 17.7357 20.1916Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.7357 20.1916L6.26416 3.80853" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5774 5.47348C15.8066 11.3693 11.069 14.6867 3.27527 16.8884" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0597 2.05625C13.4732 7.29607 16.4517 11.55 21.7065 14.4052" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.29333 9.59491C7.0757 11.7757 10.0544 16.0294 10.9402 21.9439" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" stroke-width="1.5" fill="white"/>
</clipPath>
</defs>
</svg>`;


 const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = svgDocument.documentElement;

  if (svgElement instanceof SVGElement) {
    svgElement.setAttribute('stroke-width', strokeWidth);
    svgElement.setAttribute('stroke', stroke);
    svgElement.setAttribute('fill', fill);
    return svgElement;
  }

  throw new Error('Failed to create SVG element.');
};

export {  Basketball_alt };

