function Unjoin_3d ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 7L9 12H15L12.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8388 20.8391H17.3033M20.8388 20.8391V17.3035M20.8388 20.8391L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.76777 2.76788H6.3033M2.76777 2.76788V6.30341M2.76777 2.76788L6.60657 6.60693" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Unjoin_3d };

