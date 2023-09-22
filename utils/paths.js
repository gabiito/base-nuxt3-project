// pathUtils.js
import path from 'path'

function getComponentPath(componentName) {
  // Determine the root directory of your project
  const rootDir = process.server ? path.resolve(__dirname, '..') : ''

  // Define the relative path to the components folder
  const componentsFolder = path.join(rootDir, 'components')

  // Construct the full path to the component
  const componentPath = path.join(componentsFolder, componentName)

  // Convert the path to a platform-specific path (necessary for Windows)
  return path.normalize(componentPath)
}

export { getComponentPath }
