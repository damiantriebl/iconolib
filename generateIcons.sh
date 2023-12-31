#!/bin/bash

# Directory containing SVG files
SVG_FOLDER="./icons"

echo "Deleting existing icons folder..."
rm -rf "./src/icons"

echo "Creating icons folder..."
mkdir -p "./src/icons"

echo "Searching for SVG files in folder $SVG_FOLDER..."
rm -f "./src/index.ts"

# Iterate through SVG files in directory and subdirectories
find "$SVG_FOLDER" -type f -name "*.svg" | while read svgFile; do
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

  # Get subdirectory path relative to SVG_FOLDER
  subDir=$(dirname "${svgFile#$SVG_FOLDER/}")

  # Create subdirectory in ./src/icons if it doesn't exist
  if [[ -n "$subDir" && ! -d "./src/icons/$subDir" ]]; then
    mkdir -p "./src/icons/$subDir"
  fi

  # TypeScript file name to generate
  tsFileName="./src/icons/$subDir/${baseName}.ts"

  echo "Generating TypeScript file for SVG file $svgFile..."
  # TypeScript file content
  tsContent="function ${baseName} ({size='16', strokeWidth='1.5', stroke='currentColor', fill='none'}:{size:'16' | '24' | '32', strokeWidth:string, stroke:string, fill:string}) {
  const svgContent = \`$(cat "$svgFile")\`;

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

export { ${baseName} };
"
  # Create TypeScript file
  echo "$tsContent" > "$tsFileName"

  echo "File $tsFileName generated."

  # Add export statement to index.ts
  echo "export { ${baseName} } from './icons/${subDir}/${baseName}';" >> "./src/index.ts"
done

echo "TypeScript file generation process completed."