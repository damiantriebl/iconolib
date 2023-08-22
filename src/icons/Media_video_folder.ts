function Media_video_folder ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.6V20.4C22 20.7314 21.7314 21 21.4 21H13.6C13.2686 21 13 20.7314 13 20.4V12.6C13 12.2686 13.2686 12 13.6 12H21.4C21.7314 12 22 12.2686 22 12.6Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.918 14.5737C16.5184 14.324 16 14.6113 16 15.0825V17.9175C16 18.3887 16.5184 18.676 16.918 18.4263L19.1859 17.0088C19.5619 16.7738 19.5619 16.2262 19.1859 15.9912L16.918 14.5737Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10V3.6C2 3.26863 2.26863 3 2.6 3H8.77805C8.92127 3 9.05977 3.05124 9.16852 3.14445L12.3315 5.85555C12.4402 5.94876 12.5787 6 12.722 6H21.4C21.7314 6 22 6.26863 22 6.6V9M2 10V18.4C2 18.7314 2.26863 19 2.6 19H10M2 10H10" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
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

export {  Media_video_folder };

