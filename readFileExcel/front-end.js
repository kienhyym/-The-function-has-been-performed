var file = null;
// Import data excel
self.$el.find("#chonfile").bind('click',function (){
    var http = new XMLHttpRequest();
    var fd = new FormData();
    fd.append('file', this.files[0]);
    http.open('POST', '/api/v1/link_file_upload');
    http.upload.addEventListener('progress', function (evt) {
        if (evt.lengthComputable) {
            var percent = evt.loaded / evt.total;
            percent = parseInt(percent * 100);
        }
    }, false);
    http.addEventListener('error', function () {
    }, false);

    http.onreadystatechange = function () {
        if (http.status === 200) {
            if (http.readyState === 4) {
                var data_file = JSON.parse(http.responseText), link, p, t;
                console.log('aaaaaaaaaaaaaaaaa', JSON.parse(this.responseText));

            }
        } else {
            self.getApp().notify("Không thể tải tệp tin lên máy chủ");
        }
    };
    http.send(fd);
});