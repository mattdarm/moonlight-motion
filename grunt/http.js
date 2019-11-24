module.exports = {
    sheet1: {
        options: {
            url: 'https://spreadsheets.google.com/feeds/list/14p9lOe2wCM9CTHfJbRvwfHxVBqEBvZM_rE2TgGDebOE/od6/public/values?alt=json',
            method: 'GET',
            sourceField: 'form.js_code'
        },
        dest: '<%= config.srcFolder %>/app/data/sheet1.json',
        files: {
            '<%= config.srcFolder %>/app/data/sheet1.json': '<%= config.buildFolder %>/app/data/sheet1.json'
        }
    },
    sheet2: {
        options: {
            url: 'https://spreadsheets.google.com/feeds/list/14p9lOe2wCM9CTHfJbRvwfHxVBqEBvZM_rE2TgGDebOE/2/public/values?alt=json',
            method: 'GET',
            sourceField: 'form.js_code'
        },
        dest: '<%= config.srcFolder %>/app/data/sheet2.json',
        files: {
            '<%= config.srcFolder %>/app/data/sheet2.json': '<%= config.buildFolder %>/app/data/sheet2.json'
        }
    }
}