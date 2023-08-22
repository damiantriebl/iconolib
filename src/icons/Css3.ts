function Css3 ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7H16.5L15.5 17L12 18L8.5 17L8.25 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11.5H7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Css3 };
