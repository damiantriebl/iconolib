function Numbered_list_right ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 7L20.5 3L19 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 14L19 14L20.9047 11.0371C20.9669 10.9403 21.0021 10.8268 20.9771 10.7145C20.9193 10.4557 20.716 10 20 10C19 10 19 10.8889 19 10.8889C19 10.8889 19 10.8889 19 10.8889L19 11.1111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 19L20 19C20.5523 19 21 19.4477 21 20V20C21 20.5523 20.5523 21 20 21L19 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 17L21 17L19.5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12L15 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19L15 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Numbered_list_right };
