import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "html",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfTowoff = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "html",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(
      fonter({
        formats: ["woff"],
      })
    )
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts));
};
//
export const fontsStyle = (params) => {
  let fontsFile = `${app.path.srcFolder}/styles/fonts.scss`;

  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;

        for (let i = 0; i < fontsFiles.length; i++) {
          let fontsFileName = fontsFiles[i].split(".")[0];

          if (newFileOnly != fontsFileName) {
            let fontName = fontsFileName.split("-")[0]
              ? fontsFileName.split("-")[0]
              : fontsFileName;
            let fontWeight = fontsFileName.split("-")[1]
              ? fontsFileName.split("-")[1]
              : fontsFileName;
            if (fontWeight.toLocaleLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLocaleLowerCase() === "extralight") {
              fontWeight = 200;
            } else if (fontWeight.toLocaleLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLocaleLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLocaleLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLocaleLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLocaleLowerCase() === "extrabold" ||
              fontWeight.toLocaleLowerCase() === "heavy"
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLocaleLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }

            fs.appendFile(
              fontsFile,
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontsFileName}.woff2") format("woff2"),
              url("../fonts//${fontsFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;}\r\n`,
              cb
            );
            newFileOnly = fontsFileName;
          } else {
            console.log("Файл шрифтов уже  существует");
          }
        }
      }
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
};
function cb() {}
