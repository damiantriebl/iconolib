function Airplane_helix ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9996 14.9995C13.6565 14.9995 14.9996 13.6564 14.9996 11.9995C14.9996 10.3427 13.6565 8.99951 11.9996 8.99951C10.3428 8.99951 8.99963 10.3427 8.99963 11.9995C8.99963 13.6564 10.3428 14.9995 11.9996 14.9995Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12 9 10.012 7.025 10 5C10.001 3.007 9.95 0.999 12 1C13.948 1.001 13.997 2.976 14 5C14.003 6.985 12 9 12 9Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 12 16.975 10.012 19 10C20.993 10.001 23.001 9.95 23 12C22.999 13.948 21.024 13.997 19 14C17.015 14.003 15 12 15 12Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 12 7.025 13.988 5 14C3.007 13.999 0.999 14.05 1 12C1.001 10.052 2.976 10.003 5 10C6.985 9.997 9 12 9 12Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12 15 13.988 16.975 14 19C13.999 20.993 14.05 23.001 12 23C10.052 22.999 10.003 21.024 10 19C9.997 17.015 12 15 12 15Z" stroke="currentColor" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Airplane_helix };

