function Light_bulb_on ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 2L20 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 2L4 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16L20 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16L4 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 3C7.9997 3 5.95186 4.95029 5.99985 8C6.02324 9.48689 6.4997 10.5 7.49985 11.5C8.5 12.5 9 13 8.99985 15H14.9998C15 13.0001 15.5 12.5 16.4997 11.5001L16.4998 11.5C17.4997 10.5 17.9765 9.48689 17.9998 8C18.0478 4.95029 16 3 11.9998 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Light_bulb_on };

