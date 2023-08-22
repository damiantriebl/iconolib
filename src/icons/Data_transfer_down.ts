function Data_transfer_down ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20L17 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 15L17 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 4V20M7 20L4 17M7 20L10 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10V4M17 4L14 7M17 4L20 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Data_transfer_down };

