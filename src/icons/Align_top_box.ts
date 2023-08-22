function Align_top_box ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16L4.01 15.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20L4.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 20L8.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20L12.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20L16.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20L20.01 19.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16L20.01 15.9889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12V4H20V12H4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Align_top_box };

