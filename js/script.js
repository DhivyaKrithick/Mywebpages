$("form").validate({
	rules: {
		fullname: {
			required: true
			
			
		},
		password: {
			required: true
		},
		
	},
// Custom message for error
	messages: {
		fullname: {
			required: "You must enter your fullname"
		}
	},
	
	highlight: function(element, errorClass) {
		$(element).closest(".form-group").addClass("has-error");
	},
	unhighlight: function(element, errorClass) {
		$(element).closest(".form-group").removeClass("has-error");
	},
	errorPlacement: function (error, element) {
		error.appendTo(element.parent().next());
	},
	errorPlacement: function (error, element) {
		if(element.attr("type") == "checkbox") {
			element.closest(".form-group").children(0).prepend(error);
		}
		else
			error.insertAfter(element);
	}
});
$(".myLoginForm").validate({
	rules: {
		email_Login: {
			required: true
			
			
		},
		password_login: {
			required: true
		},
		
	},
// Custom message for error
	messages: {
		email_Login: {
			required: "You must enter valid Email address"
		}
	},
	
	highlight: function(element, errorClass) {
		$(element).closest(".form-group").addClass("has-error");
	},
	unhighlight: function(element, errorClass) {
		$(element).closest(".form-group").removeClass("has-error");
	},
	errorPlacement: function (error, element) {
		error.appendTo(element.parent().next());
	},
	errorPlacement: function (error, element) {
		if(element.attr("type") == "checkbox") {
			element.closest(".form-group").children(0).prepend(error);
		}
		else
			error.insertAfter(element);
	}
});

$("#page_1").on('click',function(){
	alert("Coming Soon!!");
});
$("#page_2").on('click',function(){
	alert("Coming Soon!!");
});

$("#page_3").on('click',function(){
	alert("Coming Soon!!");
});

