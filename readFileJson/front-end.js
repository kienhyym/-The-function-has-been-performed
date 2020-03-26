self.$el.find("#chonfile").bind('click', function () {
    $.ajax({
        url: self.getApp().serviceURL + "/api/v1/read_file_json",
        method: "POST",
        data: JSON.stringify({ "ok": "ok" }),
        contentType: "application/json",
        success: function (data) {
        }
    })
})