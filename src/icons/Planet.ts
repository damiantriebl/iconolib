function Planet ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
<path d="M17.4995 6.34835C19.7975 5.80967 21.4447 5.87208 21.8376 6.66002C22.5686 8.12616 18.6797 11.5491 13.1515 14.3053C7.62327 17.0616 2.5492 18.1074 1.81821 16.6413C1.4263 15.8553 2.36234 14.5067 4.16701 13.0001" stroke="currentColor" stroke-width="1.5"/>
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

export {  Planet };

