function Add_selection ({size='16', strokeWidth='1.5', stroke='currentColor', fill='none'}:{size:'16' | '24' | '32', strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12H12M16 12H12M12 12V8M12 12V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 4H4V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 4H20V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 20H4V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20H20V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = svgDocument.documentElement;

  if (svgElement instanceof SVGElement) {
    // Set size attribute on the <svg> element
    const sizePx = size === '16' ? '16' : size === '24' ? '24' : '32';
    svgElement.setAttribute('width', sizePx);
    svgElement.setAttribute('height', sizePx);

    // Set fill attribute on the <svg> element
    svgElement.setAttribute('fill', fill);

    // Set stroke attribute on all path elements
    const pathElements = svgElement.querySelectorAll('path');
    for (let i = 0; i < pathElements.length; i++) {
      const pathElement = pathElements[i];
      pathElement.setAttribute('stroke-width', strokeWidth);
      pathElement.setAttribute('stroke', stroke);
    }

    return svgElement;
  }

  throw new Error('Failed to create SVG element.');
};

export { Add_selection };

