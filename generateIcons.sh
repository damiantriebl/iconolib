#!/bin/bash

# Directory containing SVG files
SVG_FOLDER="./icons"

echo "Searching for SVG files in folder $SVG_FOLDER..."
rm -f "./src/index.ts"

# Iterate through SVG files in directory
for svgFile in $SVG_FOLDER/*.svg; do
  # Get base name of file without extension
  baseName=$(basename "$svgFile" .svg)

  # Check if base name is compatible with TypeScript
  if [[ ! "$baseName" =~ ^[a-zA-Z_$][a-zA-Z0-9_$]*$ ]]; then
    # If base name is not compatible, replace invalid characters with underscores
    baseName=$(echo "$baseName" | sed 's/[^a-zA-Z0-9_$]/_/g')
    echo "Base name $baseName is not compatible with TypeScript. Changed to $baseName. File: $svgFile."
  fi

  # Check if base name starts with a number or is "import"
  if [[ "$baseName" =~ ^[0-9] || "$baseName" == "import" || "$baseName" == "package" ]]; then
    # If base name starts with a number or is "import", add "icon_" prefix
    baseName="icon_$baseName"
    echo "Base name $baseName starts with a number or is 'import'. Changed to $baseName. File: $svgFile."
  fi

  # Convert first character of baseName to uppercase
  baseName="$(tr '[:lower:]' '[:upper:]' <<< ${baseName:0:1})${baseName:1}"

  # TypeScript file name to generate
  tsFileName="./src/icons/${baseName}.ts"

  echo "Generating TypeScript file for SVG file $svgFile..."

  # TypeScript file content
  tsContent="function ${baseName} ({strokeWidth='1.5', stroke='currentColor', fill='none'}:{strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = \`$(cat "$svgFile")\`;


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

export {  ${baseName} };
"

  # Create TypeScript file
  echo "$tsContent" > "$tsFileName"

  echo "File $tsFileName generated."

  # Add export statement to index.ts
  echo "export { ${baseName} } from './icons/${baseName}';" >> "./src/index.ts"
done

echo "TypeScript file generation process completed."