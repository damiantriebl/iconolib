function No_smoking ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11C18 10 17 9 15 9C14.6978 9 14.355 9 14.0002 9C12.3434 9 11 7.65685 11 6V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 11C22 5 18 5 18 5C18 5 22 6 22 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.6 18H18L15 15H2.6C2.26863 15 2 15.2686 2 15.6V17.4C2 17.7314 2.26863 18 2.6 18Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  No_smoking };

