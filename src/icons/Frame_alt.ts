function Frame_alt ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3L6 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3L18 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6L21 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 9H14.4C14.7314 9 15 9.26863 15 9.6V14.4C15 14.7314 14.7314 15 14.4 15H9.6C9.26863 15 9 14.7314 9 14.4V9.6C9 9.26863 9.26863 9 9.6 9Z" fill="currentColor"/>
<path d="M3 18L21 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Frame_alt };

