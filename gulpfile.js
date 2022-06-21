import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { server } from "./gulp/tasks/server.js";
import { plugins } from "./gulp/config/plugins.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { script } from "./gulp/tasks/script.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfTowoff, fontsStyle } from "./gulp/tasks/fonts.js";

global.app = {
  path,
  gulp,
  plugins,
};

// watch

function watcher() {
  gulp.watch(path.watch.src, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, script);
  gulp.watch(path.watch.images, images);
}

// const fonts = gulp.series(otfToTtf, ttfTowoff, fontsStyle);

const mainTasks = gulp.series(
  // fonts,
  gulp.parallel(copy, html, scss, script, images)
);

const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);
