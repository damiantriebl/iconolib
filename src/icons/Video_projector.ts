function Video_projector ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 19H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 16.4V7.6C2 7.26863 2.26863 7 2.6 7H21.4C21.7314 7 22 7.26863 22 7.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="currentColor"/>
<path d="M5 10.01L5.01 9.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.01L8.01 9.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10.01L11.01 9.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 14.01L5.01 13.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14.01L8.01 13.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 14.01L11.01 13.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Video_projector };

