function Gitlab_full ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0573 2.54429C17.1158 2.36426 17.3684 2.35862 17.4348 2.53587L20.5488 10.8457L21.9467 14.5766C21.9782 14.6607 21.9497 14.7555 21.8771 14.8084L12.1177 21.9143C12.0476 21.9654 11.9524 21.9654 11.8823 21.9143L2.1229 14.8084C2.05027 14.7555 2.02182 14.6607 2.05334 14.5766L3.45095 10.8462L3.61783 10.3963L6.56249 2.53587C6.62889 2.35863 6.88149 2.36422 6.93999 2.54422L9.40952 10.1431C9.4363 10.2255 9.51309 10.2813 9.59973 10.2813H14.4002C14.4868 10.2813 14.5637 10.2255 14.5904 10.143L17.0573 2.54429Z" stroke="currentColor" stroke-width="1.5"/>
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

export {  Gitlab_full };

