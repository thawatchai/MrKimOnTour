function submitContactForm() {
    var postData = {};
    postData.email   = $("#email").val();
    postData.subject = $("#subject").val();
    postData.content = $("#content").val();

    $("#spinner").removeClass("hidden");
    $("#contact-form-button").addClass("hidden");
    if (postData.email.length > 0 && postData.subject.length > 0 && postData.content.length > 0) {
        $.post("/api?action=contact", postData, function(data, status) {
            if (status === "success") {
                $(".alert-warning").addClass("hidden");
                $(".alert-success").removeClass("hidden");
            }
        });
    } else {
        $(".alert-warning").removeClass("hidden");
        $(".alert-success").addClass("hidden");
    }
    $("#spinner").addClass("hidden");
    $("#contact-form-button").removeClass("hidden");
    return false;
}

$(document).ready(function() {
    $("#contact-form-button").click(submitContactForm);
});
