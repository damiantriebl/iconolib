function Fingerprint_error_circle ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16V11.3615C7 10.8518 7.10026 10.3624 7.28451 9.90769M17 14V12.8154M9.22222 7.73446C10.0167 7.27055 10.9721 7 12 7C14.2795 7 16.2027 8.33062 16.8046 10.15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17V14.8235M14 17V11.8529C14 10.8296 13.1046 10 12 10C10.8954 10 10 10.8296 10 11.8529V12.6471" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.0452 21.8396 14.053 21.5422 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1213 22.364L19.2427 20.2427M19.2427 20.2427L21.364 18.1213M19.2427 20.2427L17.1213 18.1213M19.2427 20.2427L21.364 22.364" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Fingerprint_error_circle };

