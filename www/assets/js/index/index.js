/*require functions.list.js*/
window.sdft={}
window.sdft.deviceInstance='desktop';

function changeDockerSize(parent){
	//get height of list
	var list_height=($(parent).height()+200) 
	//set docker height to full height
	document.querySelector('#docker-sidebar > .content').style.height=((list_height>(document.body.clientHeight+200)?list_height:document.body.clientHeight+200))+'px';	
}


function deviceReadyForMobile(){
	//save to window
	window.sdft.deviceInstance='mobile';

}

function loadDetailsPage(callback){
	//show loading
	$.mobile.loading('show');  

	var html=`

		<style type="text/css">
			.attachments,.units{
				margin-bottom: 20px;
				padding-bottom:20px;
			}
			.attachments:not(:last-child),.units:not(:last-child){
				border-bottom: 1px solid rgba(230,230,230,0.4);
			}
		</style>

		<div class="details-content">
			<div class="col col-md-12 row details-menu">
				
			</div>

			<div class="col col-md-12 row">
				<div class="media">
				  <div class="media-left">
				    <a href="#">
				      <div class="media-circles"><img src="assets/images/user.png" width="100%;"></div>
				    </a>
				  </div>
				  <div class="media-body">
				    <h4 class="media-heading author-name"></h4>
				    <small>
					    <p class="department"></p>
						<p class="position"></p>
						</small>
				  </div>
				</div>
			</div>

			<br/>
			<p><b>Description</b></p>
			<p class="description"></p>


			


			

		  <!-- Nav tabs -->
		  <ul class="nav nav-tabs" role="tablist" style="max-height: 80px;">
		    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i class="material-icons">folder_shared</i> Content</a></li>
		    <li role="presentation" id="activity-tab"><a href="#activities" aria-controls="activities" role="tab" data-toggle="tab">Activities</a></li>
		    <li role="presentation"><a href="#route" aria-controls="route" role="tab" data-toggle="tab">Route</a></li>
		  </ul>

		  <!-- Tab panes -->
		  <div class="tab-content">
		    <div role="tabpanel" class="tab-pane active" id="home">

		    </div>

		    <div role="tabpanel" class="tab-pane" id="activities" style="padding-top: 30px;">

		    </div>
		    <div role="tabpanel" class="tab-pane" id="route" style="padding-top: 30px;"><center><h3>Not available</h3><p class="text-muted">Our team is continously improving our services.We are adding additional functionalities that will make you happy.
		    Please stay tuned and wait for the next update. Your loving team  <br/><br/>-ITSU</p></center></div>
		  </div>
		</div>
		<div class="details-content-status"></div>
	`;
	$('.main-page-content').html(html)

	
		callback(this)
	
		
	
}



function loadListContent(data,callback){

	//remove attach and share options
	clearLoadTopMenu();

	__get_list(data,function(){
		callback(this)
	});
	
}

function loadActivityContent(data,callback){
	getActivities(data,function(){
		callback(this)
	});
	
}

function loadRouteContent(id){
	$('#route').load('routes.html');
}


function attachEventToList(){
	$('.list:not([data-role="none"])').click(function(){
		$('.list').removeClass('active');
		$(this).addClass('active')

		var element=this;
		//load content
		loadDetailsPage(function(e){
			if($(element).attr('data-list')!='undefined'){
				loadDetailsInit('id='+$(element).attr('data-list')+'&token='+__config.session.token)	
			}
			
			$('#activity-tab').click(function(){
				loadActivityContent('id='+$(element).attr('data-list')+'&token='+__config.session.token,function(e){ console.log(e)
					
				})
			})
		});

		//hide list for mobile
		if(window.sdft.deviceInstance=='mobile'){
			
			$('.docker-menu-toggle-content')[0].click()
		}


	});

}


function attachEventToMenu(callback){
	$('.main-menu li:not([data-role="none"])').click(function(){
		$('.main-menu li').removeClass('active');
		$(this).addClass('active')

		callback(this);
		

	});

}




function deviceReady(){
	console.log('device is ready . . .')

	//materialize
	$.material.init();

	//show docker
	docker.init();

	//change docker size
	changeDockerSize('#item-docker-menu');


	attachEventToMenu(function(e){
	
		if((e.id!='groups')&&(e.id!='new')){
			//hide ajax section
			$('.container-ajax').hide();
			//show main-page
			$('.container-main').show();
			//load list
			loadListContent({token:__config.session.token,page:1,status:$(e).attr('data-status')},function(e){
				setTimeout(function(){
					changeDockerSize('#item-docker-menu');	
					//materiaize input field in list
				    //materialize
					$.material.init();

					//attach list event
					attachEventToList()

					//autoclick list for desktop
					if(window.sdft.deviceInstance=='desktop'){
						//$('.list:not([data-role="none"])')[0].click();
					}else{
						//if show list page is hidden -> show list
						var itemCssDefaultDisplay=window.getComputedStyle($('#item-docker-menu')[0]).display;

						if(itemCssDefaultDisplay=='none'&&($('.list:not([data-role="none"])')[0]!='undefined')){
							$('.docker-menu-toggle-content')[0].click()
						}

					}


				},300)
					
			});	
		}
		
	});
	
	$('.main-page-content').load('welcome.html')

	//show list after attachEventToMenu
	setTimeout(function(){
		$('.main-menu li:not([data-role="none"])')[0].click();
	},300)





	//loadActivityContent(1)

	//loadRouteContent(1)


	$('.docker-menu-toggle-content').click(function(e){
		var itemCssDefaultDisplay=window.getComputedStyle($('#item-docker-menu')[0]).display

		
		if(itemCssDefaultDisplay=='none'){
			$('#main-page').removeClass('show');
			$('#main-page').addClass('hide');
			document.querySelector('#item-docker-menu').classList.remove('hide');
			document.querySelector('#item-docker-menu').classList.add('show');
		}else{
			$('#main-page').removeClass('hide');
			$('#main-page').addClass('show');
			document.querySelector('#item-docker-menu').classList.remove('show');
			document.querySelector('#item-docker-menu').classList.add('hide');
		}
	})


}


function init(){
	
	document.addEventListener("deviceready",deviceReady,false);
	document.addEventListener("deviceready",deviceReadyForMobile,false);

	//-----------------------------------
	// DESKTOP DETECTION
	// Load function if deviceinstance is non-mobile
	//----------------------------------
	setTimeout(function(){ 
		if(window.sdft.deviceInstance=='desktop'){
			$(document).ready(function(){
				
				deviceReady();




			});
		}else{}
	},300)

	

	
	

}


function deviceOffline(){
	$('.offline-status-bar').show();
}

function deviceOnline(){
	$('.offline-status-bar').hide();
}

document.addEventListener("offline",deviceOffline,false);
document.addEventListener("online",deviceOnline,false);
/*
*/

window.addEventListener('orientationchange', function(){
    changeDockerSize('#item-docker-menu');

});
