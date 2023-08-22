function Mic_warning ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14L21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 22.01L21.01 21.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.5"/>
<path d="M3 10V11C3 14.866 6.13401 18 10 18V18V18C13.866 18 17 14.866 17 11V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18V22M10 22H7M10 22H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Mic_warning };
