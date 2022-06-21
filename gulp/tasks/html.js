import webpHtmlNoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import rigger from 'gulp-rigger';

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      // .pipe(
      //   versionNumber({
      //     value: "%DT%",
      //     append: {
      //       key: "_v",
      //       cover: 0,
      //       to: ["js"],
      //     },
      //     output: {
      //       file: "gulp/version.json",
      //     },
      //   })
      // )
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "html",
            message: "Error <%= error.message %>",
          })
        )
      )
      // .pipe(webpHtmlNoSvg())
      .pipe(rigger())
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
