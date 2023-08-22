function Cut_solid_with_curve ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.52844 7.29346L9 10.3332" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L20 2M12 12L12 10C12 6.45478 14.3061 3.44817 17.5 2.39838" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12L20 12M12 22L12 20C12 16.4548 14.3061 13.4482 17.5 12.3984" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22L3.30861 17.1715C3.11813 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L15 3.66667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.9999L3.52842 7.29346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13.5L15 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Cut_solid_with_curve };

