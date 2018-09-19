const path = require('path')
const gulp = require('gulp')

const rename = require('gulp-rename')

const sass = require('gulp-sass')

const minHtml = require('gulp-htmlmin')
const injectHtml = require('gulp-inject-stringified-html')


const distDir = './dist/'

gulp.task('src:copy', () => {
  return gulp.src([
    // './src/*',
    './src/!(components)**/*.+(html|css)'
  ])
  .pipe(rename((filePath) => {
    filePath.dirname = path.parse(filePath.dirname).dir
  }))
  .pipe(gulp.dest(distDir))
})

gulp.task('src:sass', () => {
  return gulp.src([
    // './src/*.scss',
    './src/!(components|*.scss)**/*.scss',
  ])
  .pipe(sass())
  .pipe(rename(filePath => {
    // console.log(filePath)
    filePath.dirname = path.parse(filePath.dirname).dir
  }))
  .pipe(gulp.dest(distDir))
})

gulp.task('src:build', ['src:copy', 'src:sass'])
/**
  @desc
  @name COMPONENTS related tasks
*/

gulp.task('components:markup-minify', () => {
  return gulp.src('./src/components/*_src.html')
  .pipe(minHtml({collapseWhitespace: true}))
  .pipe(rename(filePath => {
    // console.log(filePath)
    filePath.basename = filePath.basename.slice(0, filePath.basename.length - 4)
  }))
  .pipe(gulp.dest('./src/components/'))
})

gulp.task('components:markup-inject', () => {
  return gulp.src('./src/components/*_src.js')
  .pipe(injectHtml())
  .pipe(rename(filePath => {
    // console.log(filePath)
    filePath.basename = filePath.basename.slice(0, filePath.basename.length - 4)
  }))
  .pipe(gulp.dest('./src/components/'))
})
