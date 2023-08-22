function Music_note_add ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10H19M22 10H19M19 10V7M19 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 16V19C7 20.1046 6.10457 21 5 21H4C2.89543 21 2 20.1046 2 19V18C2 16.8954 2.89543 16 4 16H7ZM7 16V8M7 8V4L12 3V7L7 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Music_note_add };

