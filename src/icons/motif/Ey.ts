function Ey ({size='16', strokeWidth='1.5', stroke='currentColor', fill='none'}:{size:'16' | '24' | '32', strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 27.10.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 x="0px" y="0px" viewBox="0 0 24 24" overflow="visible" xml:space="preserve">
<path fill="#C4C4C4" d="M-0.02,17.98c0-1.84,0-3.68,0-5.52c0-0.37,0.05-0.43,0.43-0.43c2.09,0,4.19,0,6.28,0
	c0.24,0,0.39,0.1,0.5,0.29c0.44,0.74,0.89,1.48,1.33,2.23c0.13,0.22,0.04,0.35-0.25,0.35c-1.37,0-2.73,0.01-4.1,0
	c-0.27,0-0.4,0.05-0.38,0.35c0.03,0.37,0.03,0.74,0,1.1c-0.02,0.26,0.1,0.32,0.33,0.32c1.2,0,2.39,0,3.59,0
	c0.43,0,0.48,0.05,0.48,0.47c0,0.59,0,1.18,0,1.77c0,0.35-0.05,0.4-0.42,0.4c-1.21,0-2.41,0.01-3.62,0c-0.28,0-0.37,0.07-0.36,0.35
	c0.02,0.39,0.01,0.77,0,1.16c0,0.22,0.09,0.3,0.32,0.3c1.76-0.01,3.51,0,5.27,0c0.48,0,0.52,0.04,0.52,0.49c0,0.65,0,1.3,0,1.95
	C9.9,23.91,9.8,24,9.44,24c-3,0-6,0-9.01,0c-0.37,0-0.45-0.09-0.45-0.45C-0.02,21.69-0.02,19.83-0.02,17.98
	C-0.02,17.98-0.02,17.98-0.02,17.98z"/>
<path fill="#C4C4C4" d="M12.3,21.49c0-0.67,0-1.34,0-2c0-0.18-0.05-0.34-0.14-0.5c-0.32-0.53-0.64-1.07-0.96-1.6
	c-0.59-0.98-1.19-1.96-1.77-2.94c-0.41-0.68-0.8-1.37-1.2-2.05c-0.15-0.25-0.1-0.37,0.2-0.37c1.17-0.01,2.33,0,3.5-0.01
	c0.2,0,0.33,0.09,0.42,0.26c0.56,1.07,1.14,2.13,1.7,3.19c0.05,0.09,0.08,0.19,0.2,0.18c0.12-0.01,0.12-0.12,0.15-0.19
	c0.58-1.09,1.17-2.18,1.75-3.27c0.08-0.15,0.23-0.18,0.38-0.18c1.15,0,2.29,0,3.44,0c0.32,0,0.36,0.09,0.19,0.37
	c-0.48,0.8-0.96,1.6-1.44,2.4c-0.46,0.78-0.92,1.56-1.38,2.34c-0.37,0.61-0.74,1.23-1.1,1.84c-0.1,0.16-0.15,0.33-0.15,0.52
	c0.01,1.34,0,2.67,0,4.01c0,0.4-0.08,0.48-0.48,0.48c-0.96,0-1.92,0-2.87,0c-0.36,0-0.45-0.09-0.45-0.45
	C12.29,22.86,12.29,22.17,12.3,21.49C12.3,21.49,12.3,21.49,12.3,21.49z"/>
<path fill="#F5EB1A" d="M24,2.23c0,0.62-0.01,1.24,0,1.86c0,0.28-0.11,0.41-0.41,0.46c-1.73,0.29-3.45,0.59-5.18,0.89
	c-1.31,0.22-2.61,0.43-3.92,0.66c-1.63,0.28-3.25,0.57-4.88,0.85c-1.27,0.22-2.54,0.41-3.8,0.64C4.34,7.85,2.85,8.06,1.38,8.36
	C1.06,8.42,0.73,8.55,0.39,8.49C0.32,8.48,0.23,8.5,0.21,8.41C0.2,8.33,0.3,8.32,0.36,8.3c1.23-0.44,2.47-0.88,3.7-1.32
	C5.6,6.44,7.13,5.9,8.67,5.36c1.73-0.61,3.46-1.22,5.19-1.83c1.51-0.53,3.01-1.08,4.51-1.61c1.35-0.48,2.7-0.95,4.04-1.42
	c0.4-0.14,0.8-0.29,1.2-0.44c0.29-0.11,0.37-0.07,0.37,0.23C24,0.93,24,1.58,24,2.23C24,2.23,24,2.23,24,2.23z"/>
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

export { Ey };

