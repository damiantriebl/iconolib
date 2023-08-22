function Pine_tree ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L7 6.64286C7 6.64286 10.0424 7 12 7C13.9576 7 17 6.64286 17 6.64286L12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 7L5 10.9394C5 10.9394 7.625 12 12 12C16.375 12 19 10.9394 19 10.9394L15.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 11.5L3 15.5231C3 15.5231 5.7 18 12 18C18.3 18 21 15.5231 21 15.5231L17.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22L12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Pine_tree };

