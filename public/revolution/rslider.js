/* Slider 1*/
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
		window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
		if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
		window.revapi1 = jQuery(window.revapi1);
		if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
		revapi1.revolutionInit({
				revapi:"revapi1",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:1140,
				gridheight:600,
				lazyType:"smart",
				spinner:"spinner0",
				perspectiveType:"local",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:767,
						left: {
							v_align:"bottom",
							h_offset:0
						},
						right: {
							h_align:"left",
							v_align:"bottom",
							h_offset:70
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 2*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider21"] = {once: RS_MODULES.modules["revslider21"]!==undefined ? RS_MODULES.modules["revslider21"].once : undefined, init:function() {
		window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
		if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
		window.revapi2 = jQuery(window.revapi2);
		if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
		revapi2.revolutionInit({
				revapi:"revapi2",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,1240,480",
				gridwidth:"1170,1170,1170,480",
				gridheight:"750,750,750,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspectiveType:"local",
				responsiveLevels:"1240,1240,1240,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:767,
						left: {
							container:"layergrid",
							h_align:"right",
							v_align:"bottom",
							h_offset:60
						},
						right: {
							container:"layergrid",
							v_align:"bottom",
							h_offset:0
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 3*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider31"] = {once: RS_MODULES.modules["revslider31"]!==undefined ? RS_MODULES.modules["revslider31"].once : undefined, init:function() {
		window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
		if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
		window.revapi3 = jQuery(window.revapi3);
		if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_4_1"); return;}
		revapi3.revolutionInit({
				revapi:"revapi3",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,1240,480",
				gridwidth:"1230,1230,1230,480",
				gridheight:"870,870,870,500",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"870,768,960,500",
				responsiveLevels:"1240,1240,1240,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:767,
						left: {
							container:"layergrid",
							h_align:"right",
							v_align:"bottom",
							h_offset:90
						},
						right: {
							container:"layergrid",
							v_align:"bottom",
							h_offset:30
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 4*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider41"] = {once: RS_MODULES.modules["revslider41"]!==undefined ? RS_MODULES.modules["revslider41"].once : undefined, init:function() {
		window.revapi4 = window.revapi4===undefined || window.revapi4===null || window.revapi4.length===0  ? document.getElementById("rev_slider_4_1") : window.revapi4;
		if(window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length==0) { window.revapi4initTry = window.revapi4initTry ===undefined ? 0 : window.revapi4initTry+1; if (window.revapi4initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider41"].init()}); return;}
		window.revapi4 = jQuery(window.revapi4);
		if(window.revapi4.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_4_1"); return;}
		revapi4.revolutionInit({
				revapi:"revapi4",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"700,500,400,300",
				lazyType:"smart",
				perspective:600,
				perspectiveType:"global",
				editorheight:"700,500,400,300",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"",
						style:"persephone",
						hide_onmobile:true,
						hide_under:"1024px",
						h_align:"right",
						v_align:"center",
						h_offset:30,
						v_offset:0,
						direction:"vertical"
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 5*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider51"] = {once: RS_MODULES.modules["revslider51"]!==undefined ? RS_MODULES.modules["revslider51"].once : undefined, init:function() {
		window.revapi5 = window.revapi5===undefined || window.revapi5===null || window.revapi5.length===0  ? document.getElementById("rev_slider_5_1") : window.revapi5;
		if(window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length==0) { window.revapi5initTry = window.revapi5initTry ===undefined ? 0 : window.revapi5initTry+1; if (window.revapi5initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider51"].init()}); return;}
		window.revapi5 = jQuery(window.revapi5);
		if(window.revapi5.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_5_1"); return;}
		revapi5.revolutionInit({
				revapi:"revapi5",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1240,1024,778,480",
				gridheight:"710,650,500,300",
				lazyType:"smart",
				perspective:600,
				perspectiveType:"local",
				editorheight:"710,650,500,300",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"custom",
						hide_onmobile:true,
						hide_under:"1200px",
						left: {
							container:"layergrid",
							v_align:"bottom",
							h_offset:-100
						},
						right: {
							container:"layergrid",
							h_align:"left",
							v_align:"bottom",
							h_offset:-30
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 6*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider61"] = {once: RS_MODULES.modules["revslider61"]!==undefined ? RS_MODULES.modules["revslider61"].once : undefined, init:function() {
		window.revapi6 = window.revapi6===undefined || window.revapi6===null || window.revapi6.length===0  ? document.getElementById("rev_slider_6_1") : window.revapi6;
		if(window.revapi6 === null || window.revapi6 === undefined || window.revapi6.length==0) { window.revapi6initTry = window.revapi6initTry ===undefined ? 0 : window.revapi6initTry+1; if (window.revapi6initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider61"].init()}); return;}
		window.revapi6 = jQuery(window.revapi6);
		if(window.revapi6.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_6_1"); return;}
		revapi6.revolutionInit({
				revapi:"revapi6",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"930,500,380,250",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"930,500,380,250",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					onHoverStop:false
				},
				parallax: {
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
					type:"mouse"
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 7*/ 
	var	tpj = jQuery;
		if(window.RS_MODULES === undefined) window.RS_MODULES = {};
		if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider71"] = {once: RS_MODULES.modules["revslider71"]!==undefined ? RS_MODULES.modules["revslider71"].once : undefined, init:function() {
			window.revapi7 = window.revapi7===undefined || window.revapi7===null || window.revapi7.length===0  ? document.getElementById("rev_slider_7_1") : window.revapi7;
			if(window.revapi7 === null || window.revapi7 === undefined || window.revapi7.length==0) { window.revapi7initTry = window.revapi7initTry ===undefined ? 0 : window.revapi7initTry+1; if (window.revapi7initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider71"].init()}); return;}
			window.revapi7 = jQuery(window.revapi7);
			if(window.revapi7.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_7_1"); return;}
			revapi7.revolutionInit({
					revapi:"revapi7",
					DPR:"dpr",
					sliderLayout:"fullwidth",
					visibilityLevels:"1240,1024,778,480",
					gridwidth:"1400,1024,778,480",
					gridheight:"930,700,600,450",
					lazyType:"smart",
					perspective:600,
					perspectiveType:"global",
					editorheight:"930,700,600,450",
					responsiveLevels:"1240,1024,778,480",
					progressBar:{disableProgressBar:true},
					navigation: {
						wheelCallDelay:1000,
						onHoverStop:false,
						arrows: {
							enable:true,
							style:"persephone",
							hide_onmobile:true,
							hide_under:"991px",
							left: {
								h_align:"right",
								v_align:"bottom",
								h_offset:69
							},
							right: {
								v_align:"bottom",
								h_offset:-1
							}
						}
					},
					viewPort: {
						global:true,
						globalDist:"-200px",
						enable:false
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid:true
					},
			});
			
		}} // End of RevInitScript
		if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 7*/
	var	tpj = jQuery;
		if(window.RS_MODULES === undefined) window.RS_MODULES = {};
		if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider81"] = {once: RS_MODULES.modules["revslider81"]!==undefined ? RS_MODULES.modules["revslider81"].once : undefined, init:function() {
			window.revapi8 = window.revapi8===undefined || window.revapi8===null || window.revapi8.length===0  ? document.getElementById("rev_slider_8_1") : window.revapi8;
			if(window.revapi8 === null || window.revapi8 === undefined || window.revapi8.length==0) { window.revapi8initTry = window.revapi8initTry ===undefined ? 0 : window.revapi8initTry+1; if (window.revapi8initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider81"].init()}); return;}
			window.revapi8 = jQuery(window.revapi8);
			if(window.revapi8.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_8_1"); return;}
			revapi8.revolutionInit({
					revapi:"revapi8",
					DPR:"dpr",
					sliderLayout:"fullwidth",
					visibilityLevels:"1240,1024,778,480",
					gridwidth:"1400,1024,778,480",
					gridheight:"800,650,550,400",
					lazyType:"smart",
					perspective:600,
					perspectiveType:"global",
					editorheight:"800,650,550,400",
					responsiveLevels:"1240,1024,778,480",
					progressBar:{disableProgressBar:true},
					navigation: {
						wheelCallDelay:1000,
						onHoverStop:false,
						arrows: {
							enable:true,
							style:"custom",
							hide_onmobile:true,
							hide_under:"991px",
							left: {
								h_offset:30,
								v_offset:40
							},
							right: {
								h_offset:30,
								v_offset:40
							}
						}
					},
					viewPort: {
						global:true,
						globalDist:"-200px",
						enable:false
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid:true
					},
			});
			
		}} // End of RevInitScript
		if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};