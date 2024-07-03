// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Añadir 'cjs' a las extensiones de archivos de recursos
defaultConfig.resolver.assetExts.push('cjs');

// Asegurarse de que Watchman esté habilitado
defaultConfig.watch = true;

module.exports = defaultConfig;
