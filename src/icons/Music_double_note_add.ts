function Music_double_note_add ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6.5H20M23 6.5H20M20 6.5V3.5M20 6.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15.9999V4.99992L14 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 14V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19H13C14.1046 19 15 18.1046 15 17V14H12C10.8954 14 10 14.8954 10 16V17C10 18.1046 10.8954 19 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21H4C5.10457 21 6 20.1046 6 19V16H3C1.89543 16 1 16.8954 1 18V19C1 20.1046 1.89543 21 3 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Music_double_note_add };

