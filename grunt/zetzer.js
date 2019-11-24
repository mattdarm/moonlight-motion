module.exports = {
  build: {
    options: {
      env: {
        env: 'build'
      },
      partials: '<%= config.srcFolder %>/components',
      templates: '<%= config.srcFolder %>/layouts',
      dot_template_settings: {
        strip: false
      }
    },
    files: [{
      expand: true,
      cwd: '<%= config.srcFolder %>/pages',
      src: '**/*.html',
      dest: '<%= config.buildFolder %>',
      ext: '.html'
    }]
  }
}