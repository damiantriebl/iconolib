function Network_left ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="21" width="7" height="5" rx="0.6" transform="rotate(-90 2 21)" stroke="currentColor" stroke-width="1.5"/>
<rect x="17" y="15.5" width="7" height="5" rx="0.6" transform="rotate(-90 17 15.5)" stroke="currentColor" stroke-width="1.5"/>
<rect x="2" y="10" width="7" height="5" rx="0.6" transform="rotate(-90 2 10)" stroke="currentColor" stroke-width="1.5"/>
<path d="M7 17.5H10.5C11.6046 17.5 12.5 16.6046 12.5 15.5V8.5C12.5 7.39543 11.6046 6.5 10.5 6.5H7" stroke="currentColor" stroke-width="1.5"/>
<path d="M12.5 12H17" stroke="currentColor" stroke-width="1.5"/>
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

export {  Network_left };
