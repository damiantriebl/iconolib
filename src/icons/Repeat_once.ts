function Repeat_once ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17H8C6.33333 17 3 16 3 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 7H16C17.6667 7 21 8 21 12C21 13.4943 20.5348 14.57 19.865 15.3312" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 14.5L17 17L14.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 8V5V3L2 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Repeat_once };

