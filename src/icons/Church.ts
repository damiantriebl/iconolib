function Church ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L4.282 10.8237C4.10657 10.9334 4 11.1257 4 11.3325V21.4C4 21.7314 4.26863 22 4.6 22H12M12 6L19.718 10.8237C19.8934 10.9334 20 11.1257 20 11.3325V21.4C20 21.7314 19.7314 22 19.4 22H12M12 6V4M12 2V4M10 4H12M12 4H14M12 22V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17.01L16.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13.01L16.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13.01L12.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13.01L8.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 17.01L8.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Church };

