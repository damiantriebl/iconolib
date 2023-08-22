function Dogecoin_circle ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16.4021L10 7.59836C10 7.26698 10.2679 6.99903 10.5992 6.9943C13.09 6.95876 16.5 6.9218 16.5 12.0001C16.5 17.0784 13.09 17.0416 10.5992 17.0061C10.2679 17.0014 10 16.7334 10 16.4021Z" stroke="currentColor"/>
<path d="M8 12L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Dogecoin_circle };
