function Text_size ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7L3 5L17 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5L10 19M10 19H12M10 19H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 14L13 12H21V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12V19M17 19H15.5M17 19H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Text_size };

