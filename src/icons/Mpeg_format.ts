function Mpeg_format ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6" stroke="currentColor" stroke-linecap="round"/>
<path d="M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18" stroke="currentColor" stroke-linecap="round"/>
<path d="M7.5 15V12M7.5 12V9H10.5L10.5 12H7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.5 15L1.5 9L3 12L4.5 9L4.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 9H13.5L13.5 15L16.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 9H19.5V15L22.5 15V12.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 12H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Mpeg_format };

