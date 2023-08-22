function Airplay ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 17L3 17L3 4L21 4L21 17L18 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.62188 19.0672L11.5008 14.7488C11.7383 14.3926 12.2617 14.3926 12.4992 14.7488L15.3781 19.0672C15.6439 19.4659 15.3581 20 14.8789 20H9.12111C8.64189 20 8.35606 19.4659 8.62188 19.0672Z" stroke="currentColor" stroke-width="1.5"/>
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

export {  Airplay };

