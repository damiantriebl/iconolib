function Card_issue ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 9V7C22 5.89543 21.1046 5 20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H12M22 9H6M22 9V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9995 16.05C20.3643 15.402 19.4791 15 18.5 15C16.567 15 15 16.567 15 18.5C15 19.4539 15.3816 20.3187 16.0005 20.95M20.9995 16.05C21.6184 16.6813 22 17.5461 22 18.5C22 20.433 20.433 22 18.5 22C17.5209 22 16.6357 21.598 16.0005 20.95M20.9995 16.05L16.0005 20.95" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Card_issue };

