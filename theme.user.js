// ==UserScript==
// @name          TFS 2015 Theme
// @namespace     
// @description	  A better user interface for TFS 2015 web access. Improves layout and design of UI elements.
// @author        stevu236@github.com 
// @run-at        document-start
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @noframes
// @include		  http://*:8080/tfs/*
// @include		  http://*.visualstudio.com/*
// @include		  https://*.visualstudio.com/*
// @version       2016.11.11.1124
// @resource	  stylesheet https://cdn.rawgit.com/stevu236/tfs2015theme/d45501a8ac012d06378e898ea522311544e2e9a4/styles/StyleSheet.min.css
// ==/UserScript==
(function() {
	var progressIndicators = `<div class="kart-loader">
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
		<div class="sheath">
			<div class="segment"></div>
		</div>
	</div>`;
	
	if (document.getElementsByClassName("Admin").length == 0) {
		var css = GM_getResourceText("stylesheet");
		
		if (typeof GM_addStyle != "undefined") {
			GM_addStyle(css);
		} else if (typeof PRO_addStyle != "undefined") {
			PRO_addStyle(css);
		} else if (typeof addStyle != "undefined") {
			addStyle(css);
		} else {
			var node = document.createElement("style");
			node.type = "text/css";
			node.appendChild(document.createTextNode(css));
			
			var heads = document.getElementsByTagName("head");
			
			if (heads.length > 0) {
				heads[0].appendChild(node); 
			} else {
				document.documentElement.appendChild(node);
			}
		}
		
		document.onready = function () {
			ABUI_VERSION = GM_info.script.version;
			
			console.log("TFS2015 theme version " + ABUI_VERSION);
			
			$.ajaxSetup({ cache: false });

			rebuildProgressIndicators();
		};
	}
	
	function rebuildProgressIndicators() {
		$(".pageProgressIndicator").html(progressIndicators);
	}
})();
