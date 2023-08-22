function Npm ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8L23 8V15L11 15V17L7.5 17V15L1 15V8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 8L7.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 8V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11V15" stroke="currentColor" stroke-linecap="round"/>
<path d="M5 11V15" stroke="currentColor" stroke-linecap="round"/>
<path d="M11 11V12" stroke="currentColor" stroke-linecap="round"/>
<path d="M20.5 11V15" stroke="currentColor" stroke-linecap="round"/>
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

export {  Npm };

