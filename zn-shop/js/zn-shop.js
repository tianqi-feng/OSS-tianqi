$(function(){
	//欢迎模块
	console.log('%c重牛物联欢迎你！！！', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
	
	
	
    //日期选择模块
	function init(){
		var month = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
		var jmonth = $("select.month");
		var jdate = $("select.date");
		var month_len = month.length;
		for(var i = 1;i <= month_len;i++){
			jmonth.append("<option value='"+i+"'>" + i + "&nbsp;月</option>");
		}
		for(var j = 1;j < 32;j++){
			jdate.append("<option value='"+j+"'>" + j + "&nbsp;日</option>");
		}
		jmonth.change(function(){
			var the_year = new Date().getFullYear();
			var date_sum = new Date(the_year,jmonth.val(),0).getDate();
			jdate.empty();
			for(var k = 1;k <= date_sum;k++){
			    jdate.append("<option value='"+k+"'>" + k + "&nbsp;日</option>");
		    }
		});
	};
	init();
	
	
	//上传文件处理
	(function(){
		$(".upload-btn+input[type='file']").on("change",function(){
			var filename = $(".upload-btn+input[type='file']").val()
			if(!filename){
				$(".upload-btn").text("点此上传附件");
				return;
			}
			$(".upload-btn").attr("title",filename);
			$(".upload-btn").text(filename);
		});
		$(".upload-btn").click(
			function(){
				$(this).next().click();
			}
		)
	})();
	
	
	//需求列表筛选功能
	(function(){
		$(".filter>span").on("click",function(e){
			if($(this).text() == "供应商"){
				$(".filter-wrapper-supplier").show();
				$(".filter-wrapper-needs").hide();
				$(".filter>span:contains('供应商')").addClass("active");
				$(".filter>span:contains('供应商')").siblings().removeClass("active");
			}else if($(this).text() == "需求"){
				$(".filter-wrapper-supplier").hide();
				$(".filter-wrapper-needs").show();
				$(".filter>span:contains('供应商')").removeClass("active");
				$(".filter>span:contains('供应商')").siblings().addClass("active");
			}
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
		});
	})();

    //首页
    (function(){
    	//地区选择初始化
        if($("[data-toggle=distpicker]").distpicker){
        	$("[data-toggle=distpicker]").distpicker('reset',true);
        };
        //展示切换模块
        $(".advanced-tools-btn").on("click",function(){
        	$(".advanced-tools").show();
        	$(".case-hall").hide();
        })
        $(".case-hall-btn").on("click",function(){
        	$(".advanced-tools").hide();
        	$(".case-hall").show();
        })
        $(".box-show-all-btn").on("click",function(){
        	$(".advanced-tools").show();
        	$(".case-hall").show();
        })
    	
    })();

    //注册
    (function(){
    	$(".reg-btn-wx").click(function(){
    		var _this = $(this).closest(".form-group").siblings(":lt(2)").not(":not('.active')");
    		var isfinish =!! $(_this[0]).find(".check-code-btn")[0];
    		console.log( isfinish);
    		_this.not(":not('.active')").removeClass("active").next().not(":last-child").addClass("active");
    		if(isfinish){
    			$(this).html("完成");
    		}
    	})
    })();
    
    //实名认证
    (function(){
    	$(".cert-type-company,.cert-type-personal").on("click",function(e){
    		e.stopPropagation();
    		var _active = $(this).parentsUntil(".cert-type").hasClass("active")|| $(this).hasClass("active");
    		if(!_active){
    			$(".cert-type-company,.cert-type-personal").toggleClass("active");
	    		if($(".cert-type-company").hasClass("active")){
	    			$(".zn-shop-cert-form-personal").hide();
	    			$(".zn-shop-cert-form-company").show();
	    		}else{
	    			$(".zn-shop-cert-form-personal").show();
	    			$(".zn-shop-cert-form-company").hide();
	    		}
    		}
    	});
    })();
    
    (function(){
    	$(".cert-type-company,.cert-type-personal").on("click",function(e){
    		e.stopPropagation();
    		var _active = $(this).parentsUntil(".cert-type").hasClass("active")|| $(this).hasClass("active");
    		if(!_active){
    			$(".cert-type-company,.cert-type-personal").toggleClass("active");
	    		if($(".cert-type-company").hasClass("active")){
	    			$(".zn-shop-cert-form-personal").hide();
	    			$(".zn-shop-cert-form-company").show();
	    		}else{
	    			$(".zn-shop-cert-form-personal").show();
	    			$(".zn-shop-cert-form-company").hide();
	    		}
    		}
    	});
    })();
    
    //文本编辑器
    if(typeof bkLib != 'undefined'){
    	bkLib.onDomLoaded(function() {
	    	new nicEditor({iconsPath : 'nicEditorIcons.gif',buttonList : ['fontSize','bold','italic','underline','strikeThrough']}).panelInstance('area1');
	    });
    }
    
    //文件上传模块
    (function(){
    	$(".zn-upload-mask-btn").click(function(){
    		$(this).next("input[type=file]").click();
    	})
    })();
    
    //店铺处理模块
    (function(){
    	var shopShowBoxHtml = '<div class="col-md-4 col-xs-6 shop-service-show-box"><span class="glyphicon glyphicon-plus"></span></div>';
    	$(".shop-service-show-box-wx").append(shopShowBoxHtml);
    	$(".shop-service-delete-btn").on("click",function(e){
    		e.preventDefault();
    		$(this).closest(".shop-service-show-box").remove();
    	});
    	$(".shop-service-show-box:last-child>.glyphicon").on("click",function(){
    		window.location.href = "zn-shop-user-center-shop-edit.html";
    	});
    })();
    
    
})
