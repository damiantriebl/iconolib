function Vertical_merge ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V10M12 10L15.5 6.5M12 10L8.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V14M12 14L15.5 17.5M12 14L8.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14L21 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10L21 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Vertical_merge };

