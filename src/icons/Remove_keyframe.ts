function Remove_keyframe ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 5H19H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8189 14.3287L11.4948 20.3183C10.6992 21.2134 9.30076 21.2134 8.50518 20.3183L3.18109 14.3287C2.50752 13.571 2.50752 12.429 3.18109 11.6713L8.50518 5.68167C9.30076 4.78664 10.6992 4.78664 11.4948 5.68167L16.8189 11.6713C17.4925 12.429 17.4925 13.571 16.8189 14.3287Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Remove_keyframe };

