function Movie ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8.01L7.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8.01L17.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12.01L7.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12.01L17.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 16.01L7.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16.01L17.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 2H3.6C3.26863 2 3 2.26863 3 2.6V21.4C3 21.7314 3.26863 22 3.6 22H7M7 2V4M7 2H17M17 2H20.4C20.7314 2 21 2.26863 21 2.6V21.4C21 21.7314 20.7314 22 20.4 22H17M17 2V4M17 22V20M17 22H7M7 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Movie };

