function Google_home ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7083 17C19.1334 15.4077 20 13.3051 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.6655 20 16.0604 18.8412 17.7083 17ZM17.7083 17H19.5C20.8807 17 22 18.1193 22 19.5V19.5C22 20.8807 20.8807 22 19.5 22H17" stroke="currentColor" stroke-linecap="round"/>
<path d="M11 11.01L11.01 10.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.01L8.01 10.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11.01L14.01 10.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Google_home };

