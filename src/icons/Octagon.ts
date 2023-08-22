function Octagon ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7704 1.09511C11.9174 1.03421 12.0826 1.03421 12.2296 1.09511L19.5486 4.12672C19.6956 4.18761 19.8124 4.30442 19.8733 4.45144L22.9049 11.7704C22.9658 11.9174 22.9658 12.0826 22.9049 12.2296L19.8733 19.5486C19.8124 19.6956 19.6956 19.8124 19.5486 19.8733L12.2296 22.9049C12.0826 22.9658 11.9174 22.9658 11.7704 22.9049L4.45144 19.8733C4.30442 19.8124 4.18761 19.6956 4.12672 19.5486L1.09511 12.2296C1.03421 12.0826 1.03421 11.9174 1.09511 11.7704L4.12672 4.45144C4.18761 4.30442 4.30442 4.18761 4.45144 4.12672L11.7704 1.09511Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Octagon };
