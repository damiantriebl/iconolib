function Pacman ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 12L16.0111 12.01" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12L19.0111 12.01" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12L22.0111 12.01" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 17.5228 6.47715 22 12 22C15.2712 22 18.1755 20.4293 20 18.001L12 12L20 5.99902C18.1755 3.57069 15.2712 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Pacman };

