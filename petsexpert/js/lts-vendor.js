function getURLVar(key) {
	var value = [];

	var query = String(document.location).split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}

$(document).ready(function() {
	//Form Submit for IE Browser
	$('button[type=\'submit\']').on('click', function() {
		$("form[id*='form-']").submit();
	});

	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();

		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});

	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body', html: true});

	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});

	// https://github.com/opencart/opencart/issues/2595
	$.event.special.remove = {
		remove: function(o) {
			if (o.handler) {
				o.handler.apply(this, arguments);
			}
		}
	}
	
	// tooltip remove
	$('[data-toggle=\'tooltip\']').on('remove', function() {
		$(this).tooltip('destroy');
	});

	// Tooltip remove fixed
	$(document).on('click', '[data-toggle=\'tooltip\']', function(e) {
		$('body > .tooltip').remove();
	});
	
	$('#button-menu').on('click', function(e) {
		e.preventDefault();
		
		$('#column-left').toggleClass('active');
	});

	// Set last page opened on the menu
	$('ul.list-unstyled li a').on('click', function() {
		sessionStorage.setItem('menu', $(this).attr('href'));
		
	});



	if (!sessionStorage.getItem('menu')) {
		$('ul.list-unstyled li > #lts-dashboard').addClass('active');

		console.log(sessionStorage.getItem('menu'));
	} else {

		$('ul.list-unstyled li a[href=\'' + sessionStorage.getItem('menu') + '\']').addClass('active');
	}
	
	// $('#menu a[href=\'' + sessionStorage.getItem('menu') + '\']').parents('li > a').removeClass('collapsed');
	
	// $('#menu a[href=\'' + sessionStorage.getItem('menu') + '\']').parents('ul').addClass('in');
	
	// $('#menu a[href=\'' + sessionStorage.getItem('menu') + '\']').parents('li').addClass('active');
	
	// Image Manager
	
	
	// клик по фото 1 этап
	$(document).on('click', 'a[data-toggle=\'image2\']', function(e) {
		var $element = $(this);
		var $popover = $element.data('bs.popover'); // element has bs popover?

		e.preventDefault();

		// destroy all image popovers
		$('a[data-toggle="image"]').popover('destroy');

		// remove flickering (do not re-add popover when clicking for removal)
		if ($popover) {
			return;
		}

		$element.popover({
			html: true,
			placement: 'right',
			trigger: 'manual',
			content: function() {
				return '<button type="button" class="btn btn-danger button-clear"><i class="fa fa-trash-o"></i></button>';
			}
		});

		$element.popover('show');
		
/*  =====================================  клик по карандашу 2 этап */
	/*		var $button = $(this);
			var $icon   = $button.find('> i');

			$('#modal-image').remove();

			$.ajax({
				url: 'index.php?route=account/vendor/lts_filemanager&target=' + $element.parent().find('input').attr('id') + '&thumb=' + $element.attr('id'),
				dataType: 'html',
				beforeSend: function() {
					$button.prop('disabled', true);
					if ($icon.length) {
						$icon.attr('class', 'fa fa-circle-o-notch fa-spin');
					}
				},
				complete: function() {
					$button.prop('disabled', false);

					if ($icon.length) {
						$icon.attr('class', 'fa fa-pencil');
					}
				},
				success: function(html) {
					$('body').append('<div id="modal-image" class="modal">' + html + '</div>');

					$('#modal-image').modal('show');
				}
			});

			$element.popover('destroy');*/
/*  =====================================  клик по карандашу 2 этап */








		$('#vendor-image').on('click', function() {
			var $button = $(this);
			var $icon   = $button.find('> i');

			$('#modal-image').remove();

			$.ajax({
				url: 'index.php?route=account/vendor/lts_filemanager&target=' + $element.parent().find('input').attr('id') + '&thumb=' + $element.attr('id'),
				dataType: 'html',
				beforeSend: function() {
					$button.prop('disabled', true);
					if ($icon.length) {
						$icon.attr('class', 'fa fa-circle-o-notch fa-spin');
					}
				},
				complete: function() {
					$button.prop('disabled', false);

					if ($icon.length) {
						$icon.attr('class', 'fa fa-pencil');
					}
				},
				success: function(html) {
					$('body').append('<div id="modal-image" class="modal">' + html + '</div>');

					$('#modal-image').modal('show');
				}
			});

			$element.popover('destroy');
		});

		$('#button-clear').on('click', function() {
			
			console.log('1');
			
			$element.find('img').attr('src', $element.find('img').attr('data-placeholder'));

			$element.parent().find('input').val('');

			$element.popover('destroy');
		});
		

		
		
	});
	
	
	
	$(document).on('click', 'a[data-toggle=\'image\']', function(e) {	//	console.log('5');
	    $('.btn.btn-danger.button-clear').hide();
		$(this).closest('.inli').find('.btn.btn-danger.button-clear').show();		
	});
	
	
	
	$(document).on('click', 'div[data-toggle=\'imageplus\']', function(e) {//console.log('1');
		var $button = $(this);
		var $element = $(this);
			var $icon   = $button.find('> i');

			$('#modal-image').remove();
				
			
           // console.log('id = ' + $element.parent().find('input').last().attr('id'));

			$.ajax({
				url: 'index.php?route=account/vendor/lts_filemanager&target=' + $element.parent().find('input').last().attr('id') + '&thumb=' + $element.attr('id'),
				dataType: 'html',
				beforeSend: function() {
					$button.prop('disabled', true);
					if ($icon.length) {
						$icon.attr('class', 'fa fa-circle-o-notch fa-spin');
					}
				},
				complete: function() {
					$button.prop('disabled', false);

					if ($icon.length) {
						$icon.attr('class', 'fa fa-pencil');
					}
				},
				success: function(html) {
					$('body').append('<div id="modal-image" class="modal">' + html + '</div>');
                    //Поазать что есть в модальном окне
					//$('#modal-image').modal('show');
				}
			});

			$element.popover('destroy');		
	});
	
	
	
	$(document).on('click', '.button-clear', function(e) {
			//console.log('2');
			// если класс inli 1 то меняем crc не удаляем
	//	if($(location).attr('href').indexOf('edit')!=-1){}
        console.log('====================');
		var ttt = $(this).parent().find('.img-thumbnail').attr('id');
		var vadel = $(this).parent().find('input').attr('value');
		
		
		
		if(vadel.indexOf('vendor')!=-1){deleter(vadel);console.log('deleter = '+ vadel );
			if(getUrlParameter('product_id')>10){
	       // console.log('product_id = '+ getUrlParameter('product_id'));
			deleterbase(vadel,getUrlParameter('product_id'));console.log('deleterbase = '+ vadel );
		    }
	    }
		
		
		
		
		
		
	//	$('.inli').css('border', '3px solid black');
		
		
		if(ttt=='thumb-image'){
		var src1= $(this).parent().next('.inli').find('.img').attr('src');
		var src2= $(this).parent().next('.inli').find('input').attr('value');
		var src3= $(this).parent().next('.inli').find('.source').attr('src');
		
		if(src1!='http://petsexpert.ru/image/cache/no_image2-100x100.png'){
		//$(this).parent().find('.img').attr('src', src1);
		
	 if($(this).parent().next('.inli').find('.img').prop("tagName")=='VIDEO'){html = '<video class="ppv img" loop muted autoplay><source class="source" src="'+ src3 +'" type="video/mp4"></video>';}else{html = '<img class="ppp img" src="'+ src1 +'" />';}		
		$(this).parent().find('.img').remove();
		$(this).parent().find('a').html(html);
		 console.log('src1='+ src3 );
		 console.log('tagName='+ $(this).parent().next('.inli').find('.img').prop("tagName") ); 
		 console.log(html);
		
		$(this).parent().find('input').attr('value', src2);
		
		if(getUrlParameter('product_id')>10 && src2.indexOf('vendor')!=-1){deleterbase(src2,getUrlParameter('product_id'));deleterbaseinsert(src2,getUrlParameter('product_id'));console.log('deleterbaseinsert = '+ src2 );}
		
		$(this).parent().next('.inli').remove();
		
		}else{
		//$(this).parent().find('.img').attr('src', src1);
		
	 if($(this).parent().next('.inli').find('.img').prop("tagName")=='VIDEO'){html = '<video class="ppv img" loop muted autoplay><source class="source" src="'+ src3 +'" type="video/mp4"></video>';}else{html = '<img class="ppp img" src="'+ src1 +'" />';}		
		$(this).parent().find('.img').remove();
		$(this).parent().find('a').html(html);
		
		$(this).parent().find('input').attr('value', src2);	
		
		
		
		
		$(this).parent().remove();
		

html = '<input class="deletent" type="hidden" name="image" value="/catalog/no_image.png" id="input-image" />';
$('div[data-toggle=\'imageplus\']').before(html);
		
		
		
		}
		
	//	console.log(src2);
		
		}else{
		$(this).parent().remove();
		
		}
  
	//	console.log(ttt);
		
		
	});
	
	
});


function deleter(src) {
		$.ajax({
			url: 'index.php?route=account/vendor/lts_filemanager/delete',
			type: 'post',
			dataType: 'json',
			data: {'path[]': src},
			beforeSend: function() {
				$('#button-delete').prop('disabled', true);
			},
			complete: function() {
				$('#button-delete').prop('disabled', false);
			},
			success: function(json) {
				if (json['error']) {
					alert(json['error']);
				}

				if (json['success']) {
				//	alert(json['success']);

				//	$('#button-refresh').trigger('click');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
}


function deleterbase(src,product_id) {
		$.ajax({
			url: 'index.php?route=account/vendor/lts_filemanager/deleterbase',
			type: 'post',
			dataType: 'json',
			data: {'path[]': src, 'product_id':product_id },
			beforeSend: function() {
				$('#button-delete').prop('disabled', true);
			},
			complete: function() {
				$('#button-delete').prop('disabled', false);
			},
			success: function(json) {
				if (json['error']) {
					alert(json['error']);
				}

				if (json['success']) {
				//	alert(json['success']);

				//	$('#button-refresh').trigger('click');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
}

function deleterbaseinsert(src,product_id) {
		$.ajax({
			url: 'index.php?route=account/vendor/lts_filemanager/deleterbaseinsert',
			type: 'post',
			dataType: 'json',
			data: {'path[]': src, 'product_id':product_id },
			beforeSend: function() {
				$('#button-delete').prop('disabled', true);
			},
			complete: function() {
				$('#button-delete').prop('disabled', false);
			},
			success: function(json) {
				if (json['error']) {
					alert(json['error']);
				}

				if (json['success']) {
				//	alert(json['success']);

				//	$('#button-refresh').trigger('click');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};



// Autocomplete */
(function($) {
	$.fn.autocomplete = function(option) {
		return this.each(function() {
			var $this = $(this);
			var $dropdown = $('<ul class="dropdown-menu" />');

			this.timer = null;
			this.items = [];

			$.extend(this, option);

			$this.attr('autocomplete', 'off');

			// Focus
			$this.on('focus', function() {
				this.request();
			});

			// Blur
			$this.on('blur', function() {
				setTimeout(function(object) {
					object.hide();
				}, 200, this);
			});

			// Keydown
			$this.on('keydown', function(event) {
				switch(event.keyCode) {
					case 27: // escape
						this.hide();
						break;
					default:
						this.request();
						break;
				}
			});

			// Click
			this.click = function(event) {
				event.preventDefault();

				var value = $(event.target).parent().attr('data-value');

				if (value && this.items[value]) {
					this.select(this.items[value]);
				}
			}

			// Show
			this.show = function() {
				var pos = $this.position();

				$dropdown.css({
					top: pos.top + $this.outerHeight(),
					left: pos.left
				});

				$dropdown.show();
			}

			// Hide
			this.hide = function() {
				$dropdown.hide();
			}

			// Request
			this.request = function() {
				clearTimeout(this.timer);

				this.timer = setTimeout(function(object) {
					object.source($(object).val(), $.proxy(object.response, object));
				}, 200, this);
			}

			// Response
			this.response = function(json) {
				var html = '';
				var category = {};
				var name;
				var i = 0, j = 0;

				if (json.length) {
					for (i = 0; i < json.length; i++) {
						// update element items
						this.items[json[i]['value']] = json[i];

						if (!json[i]['category']) {
							// ungrouped items
							html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
						} else {
							// grouped items
							name = json[i]['category'];
							if (!category[name]) {
								category[name] = [];
							}

							category[name].push(json[i]);
						}
					}

					for (name in category) {
						html += '<li class="dropdown-header">' + name + '</li>';

						for (j = 0; j < category[name].length; j++) {
							html += '<li data-value="' + category[name][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[name][j]['label'] + '</a></li>';
						}
					}
				}

				if (html) {
					this.show();
				} else {
					this.hide();
				}

				$dropdown.html(html);
			}

			$dropdown.on('click', '> li > a', $.proxy(this.click, this));
			$this.after($dropdown);
		});
	}
})(window.jQuery);
