function Depth ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 4L19 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16.01L3.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0098 16.01L20.9998 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0098 12.01L19.9998 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8.01L5.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0098 8.01L18.9998 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V17M12 7L10.5 8.5M12 7L13.5 8.5M12 17L9 14M12 17L15 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Depth };
