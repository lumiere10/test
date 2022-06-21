import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/`,
  },
  src: {
    html: `${srcFolder}/files/*.html`,
    scss: `${srcFolder}/styles/*.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/files/img/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/files/img/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/files/**/*.html`,
    scss: `${srcFolder}/styles/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/files/img/**/*.{jpg, jpeg, png, gif, webp}`,
    src: `${srcFolder}/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
