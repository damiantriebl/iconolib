function Loft_3d ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17C13 17 11 22.9999 2 22.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 1C13 1 11 6.9999 2 6.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.5V7.5M12 16.5L14.5 14M12 16.5L9.5 14M12 7.5L14.5 10M12 7.5L9.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Loft_3d };

