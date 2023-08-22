function Potion ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3.99996L14 3.99997V6.56773C14 6.82599 14.1709 7.05522 14.4125 7.14658C22.9367 10.3708 20.9066 22 15 22L9.00001 22C3.09346 22 1.06328 10.3708 9.58754 7.14658C9.8291 7.05521 10 6.82598 10 6.56772V3.99996Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10L18 10" stroke="currentColor"/>
<path d="M9 2H15" stroke="currentColor" stroke-linecap="round"/>
<path d="M11.6667 13L10 16H14L12.3333 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Potion };

