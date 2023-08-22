function Vegan ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 11.0625C12.5294 13.6507 10.0588 20 10.0588 20C10.0588 20 6.52941 11.0625 3 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4962 5.57712L20.9222 10.001C21.1985 12.8709 19.0467 15.4261 16.1769 15.7025C13.3609 15.9736 10.81 13.9153 10.5388 11.0994C10.2677 8.28339 12.3306 5.7808 15.1466 5.50966L19.8634 5.05548C20.1822 5.02478 20.4655 5.25833 20.4962 5.57712Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Vegan };

