
/*--------------------------------------------------------------
| GET LIST
| get baskets from remote server
|---------------------------------------------------------------*/
function __get_notifications(data,callback=function(e){}){

	var status=data.status;
				
	__ajax_notifications(data,function(e){


		try{
			data=JSON.parse(e)

			if(typeof data.status!='undefined'){
				//save list to storage
				//__saveListToStorage(e,status);

				callback(data);

			}
 
		}catch(e){}


	},function(){

	})
}



function __showNotifications(json,target,callback=function(json){}){


	/*-----------------------------------------
	| Define stack for empty notification
	|----------------------------------------*/
	if(typeof json.notifications =='undefined'){
		json.notifications=[];
	}



	for(var x=0;x<json.notifications.length;x++){ 


		/*-----------------------------------------
		| Custom icon for notification list
		|----------------------------------------*/
		var icon='';
		var active_css='text-muted';
		var active_section_css='';

		if(json.notifications[x].action==='added_as_collaborator'){
			icon='<i class="material-icons md-36">shopping_basket</i>';
		}

		if(json.notifications[x].action==='uploaded'){
			icon='<div class="file-icon file-icon-default" data-type="doc"></div>';
		}


		/*-----------------------------------------
		| Custom style for unread notifications
		|----------------------------------------*/

		if(json.notifications[x].flag=='unread'){
			active_css='text-info';
			active_section_css="background:rgba(230,230,230,0.1);border-bottom:1px solid rgba(225,225,225,0.4);"
		}


		var html=`<!--details-->
					<div class="col col-md-12 col-xs-12 notifications " style="padding:10px 5px 10px 5px;`+active_section_css+`" data-list="`+json.notifications[x].basket_id+`" data-notif="`+json.notifications[x].id+`">
						<small>
							<div class="col col-md-2 col-lg-1 col-xs-2 text-muted">
								`+icon+`
							</div>
							<div class="col col-md-8 col-xs-10">
								<p><b>`+json.notifications[x].sender.name+`</b></p>
								<p class="notification-message `+active_css+`">`+json.notifications[x].message+`</p>
								<p>`+json.notifications[x].date_created+`</p>
							</div>
						</small>
					</div>
				<!--/details-->`;
		$(target).append(html)
	}

	//callback
	setTimeout(function(){ callback(json); },600);

	
}




function getNotifications(data,callback=function(json){}){
	__get_notifications(data,function(json){
		callback(json);
	});
}





/*-----------------------------------------
| Show more notifications
|----------------------------------------*/

function showMoreNotifications(){

	//Increment page per click
	window.sdft.notification_page++


	//remove in DOM
	$('.load-more-notification-button').remove();


		var data={
			token:__config.session.token,
			page:window.sdft.notification_page
		}

		getNotifications(data,function(json){
			setTimeout(function(){ 
				__showNotifications(json,'.notification-section',function(){
					if(json.notifications.length==30){

						$('.notification-section-load-more').html(`<p class="text-muted load-more-notification-button">Load More</p>`);
						bindShowMoreNotifications();

					}

					bindViewNotification()
				}); 
			},800);
		});
}



/*-----------------------------------------
| Attach event to load more button
|----------------------------------------*/

function bindShowMoreNotifications(){
	$('.load-more-notification-button').off('click')
	$('.load-more-notification-button').on('click',showMoreNotifications);
}

function bindViewNotification(){
	$('.notifications').off('click');

	$('.notifications').on('click',function(e){
		//toggle page
		$('.notification-icon').click();
		//show loading
		$.mobile.loading('show')

		var element=this;
		//load content
		loadDetailsPage(function(e){
			if($(element).attr('data-list')!='undefined'){ 
				window.sdft.active=$(this).attr('data-list');
				loadDetailsInit('id='+$(element).attr('data-list')+'&token='+__config.session.token+'&notification=true&notif='+$(element).attr('data-notif'))
				
				//change to read
				$(element).children().children().children('p.notification-message').removeClass('text-info')
				$(element).css({background:'none'})
				

			}
			
			$('#activity-tab').click(function(){
				loadActivityContent('id='+$(element).attr('data-list')+'&token='+__config.session.token,function(e){ 
					
				})
			})
		});

		//hide list for mobile
		if(window.sdft.deviceInstance=='mobile'){ 
			$('.docker-menu-toggle-content')[1].click()
		}
	})
}


