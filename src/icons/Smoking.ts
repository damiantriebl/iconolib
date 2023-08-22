function Smoking ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 16C18 15 17 14 15 14C14.6978 14 14.355 14 14.0002 14C12.3434 14 11 12.6569 11 11V8.5C11 7.11929 12.1193 6 13.5 6V6H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 16C22 11.5 20 10.5 18 10C20 9.5 22 9 22 6C22 3 19.5 2 18 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="19" width="12" height="3" rx="0.6" stroke="currentColor" stroke-width="1.5"/>
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

export {  Smoking };

