function ___FILEBASENAME___() {
	this.resultCallback = null; // Function
}

___FILEBASENAME___.ComposeResultType = {
Cancelled:0,
Saved:1,
Sent:2,
Failed:3,
NotSent:4
}



// showEmailComposer : all args optional

___FILEBASENAME___.prototype.showEmailComposer = function(subject,body,toRecipients,ccRecipients,bccRecipients,bIsHTML) {
	var args = {};
	if(toRecipients)
		args.toRecipients = toRecipients;
	if(ccRecipients)
		args.ccRecipients = ccRecipients;
	if(bccRecipients)
		args.bccRecipients = bccRecipients;
	if(subject)
		args.subject = subject;
	if(body)
		args.body = body;
	if(bIsHTML)
		args.bIsHTML = bIsHTML;
	
	cordova.exec(null, null, "___FILEBASENAME___", "showEmailComposer", [args]);
}

// this will be forever known as the orch-func -jm
___FILEBASENAME___.prototype.showEmailComposerWithCB = function(cbFunction,subject,body,toRecipients,ccRecipients,bccRecipients,bIsHTML) {
	this.resultCallback = cbFunction;
	this.showEmailComposer.apply(this,[subject,body,toRecipients,ccRecipients,bccRecipients,bIsHTML]);
}

___FILEBASENAME___.prototype._didFinishWithResult = function(res) {
	this.resultCallback(res);
}



cordova.addConstructor(function()  {
					   if(!window.plugins)
					   {
					   window.plugins = {};
					   }
					   
					   // shim to work in 1.5 and 1.6
					   if (!window.Cordova) {
					   window.Cordova = cordova;
					   };
					   
					   window.plugins.___FILEBASENAME___ = new ___FILEBASENAME___();
					   });
