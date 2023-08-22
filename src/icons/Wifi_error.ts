function Wifi_error ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18.51L12.01 18.4989" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7C8 2.5 16 2.5 22 7" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 11C9 8 15 8 19 11" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 14.5C10.7504 13.1 13.2498 13.0996 15.5001 14.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1213 21.364L19.2426 19.2427M21.364 17.1214L19.2426 19.2427M19.2426 19.2427L17.1213 17.1214M19.2426 19.2427L21.364 21.364" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Wifi_error };

