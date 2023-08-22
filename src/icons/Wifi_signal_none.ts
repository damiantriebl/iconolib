function Wifi_signal_none ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.12636 8.32361C1.92567 8.06248 1.97135 7.71868 2.21158 7.53482C5.2903 5.17827 8.55286 4 11.9993 4C15.4457 4 18.7082 5.17827 21.7869 7.53482C22.0388 7.74708 22.0676 8.09272 21.8722 8.32367L12.4174 19.4967C12.3978 19.5199 12.3763 19.5414 12.3531 19.561C12.1222 19.7564 11.7765 19.7276 11.5811 19.4967L2.12636 8.32361Z" stroke="currentColor" stroke-width="1.5"/>
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

export {  Wifi_signal_none };

