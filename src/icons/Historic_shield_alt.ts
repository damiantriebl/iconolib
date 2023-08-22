function Historic_shield_alt ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7317 21.8658L6.21115 19.1056C4.85601 18.428 4 17.043 4 15.5279V2.6C4 2.26863 4.26863 2 4.6 2H19.4C19.7314 2 20 2.26863 20 2.6V15.5279C20 17.043 19.144 18.428 17.7889 19.1056L12.2683 21.8658C12.0994 21.9503 11.9006 21.9503 11.7317 21.8658Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 10H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Historic_shield_alt };

