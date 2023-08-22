function Walking ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4409 9.12717L11.0322 14.7618L15.9626 21.1008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3278 18.2835L8.21484 21.1008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.21484 13.3532C8.21484 9.40889 11.0323 9.12714 12.4409 9.12717L13.8494 9.12714C14.0842 10.301 15.1172 12.7897 17.3711 13.3531" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 7C14.1046 7 15 6.10457 15 5C15 3.89543 14.1046 3 13 3C11.8954 3 11 3.89543 11 5C11 6.10457 11.8954 7 13 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Walking };
