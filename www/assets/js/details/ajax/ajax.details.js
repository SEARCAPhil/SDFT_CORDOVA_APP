
/*ajax details*/
function __ajax_details(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.details.url+'?cache='+__config.cache,
    method:__config.endpoint.details.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



/*ajax groups*/
function __ajax_collaborators(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.list.collaborators.url,
    method:__config.endpoint.list.collaborators.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


/*ajax groups*/
function __ajax_activities(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.list.activities.url+'?cache='+__config.cache,
    method:__config.endpoint.list.activities.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


/*ajax attachments*/
function __ajax_attachments_delete(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.delete.url,
    method:__config.endpoint.basket.attachments.delete.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


/*ajax attachments*/
function __ajax_attachments_close(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.close.url,
    method:__config.endpoint.basket.attachments.close.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}

/*ajax attachments*/
function __ajax_attachments_category_update(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.category.url,
    method:__config.endpoint.basket.attachments.category.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



/*ajax basket*/

function __ajax_basket_open(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.close.url,
    method:__config.endpoint.basket.close.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}

function __ajax_basket_close(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.close.url,
    method:__config.endpoint.basket.close.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_basket_publish(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.publish.url,
    method:__config.endpoint.basket.publish.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



function __ajax_basket_delete(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.delete.url,
    method:__config.endpoint.basket.delete.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}

/*ajax collaborators*/
function __ajax_basket_collaborator_post(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.collaborators.post.url,
    method:__config.endpoint.basket.collaborators.post.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}

function __ajax_basket_collaborator_delete(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.collaborators.delete.url,
    method:__config.endpoint.basket.collaborators.delete.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_basket_update_description(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.update.url,
    method:__config.endpoint.basket.update.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_basket_update_keywords(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.keywords.update.url,
    method:__config.endpoint.basket.keywords.update.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');
       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


/*ajax notes*/
function __ajax_notes(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.list.notes.url+'?cache='+__config.cache,
    method:__config.endpoint.list.notes.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}

/*ajax notes*/
function __ajax_post_notes(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.notes.post.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.notes.post.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



/*ajax notes*/
function __ajax_notes_delete(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.notes.delete.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.notes.delete.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_notes_update(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.notes.update.url,
    method:__config.endpoint.basket.notes.update.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



/*ajax storage*/
function __ajax_storage(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.storage.url+'?cache='+__config.cache,
    method:__config.endpoint.storage.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_post_storage(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.storage.post.url+'?cache='+__config.cache,
    method:__config.endpoint.storage.post.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_search(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.storage.search.url+'?cache='+__config.cache,
    method:__config.endpoint.storage.search.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



function __ajax_email_search(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.email.search.url+'?cache='+__config.cache,
    method:__config.endpoint.email.search.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_token(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.token.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.attachments.token.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_generate_token(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.token.post.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.attachments.token.post.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_attachments_link_delete(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.token.delete.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.attachments.token.delete.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_attachments_link_get_email(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.token.email.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.attachments.token.email.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


function __ajax_attachments_link_update_email(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.token.email.update.url+'?cache='+__config.cache,
    method:__config.endpoint.basket.attachments.token.email.update.method,
    cache : false,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })
}


/*ajax attachments*/
function __ajax_post_attachments_link(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.link.post.url,
    method:__config.endpoint.basket.attachments.link.post.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}


/*ajax attachments*/
function __ajax_post_attachments_comment(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.comment.post.url,
    method:__config.endpoint.basket.attachments.comment.post.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



/*ajax attachments*/
function __ajax_delete_attachments_comment(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.attachments.comment.delete.url,
    method:__config.endpoint.basket.attachments.comment.delete.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



function __ajax_routes(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.routes.url,
    method:__config.endpoint.basket.routes.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}



function __ajax_update_route(data,success_callback,error_callback){
  $.ajax({
    url:__config.endpoint.basket.routes.update.url,
    method:__config.endpoint.basket.routes.update.method,
    data:data,
    beforeSend:function(){
       $.mobile.loading('show');

       //enable debugging
       if(__config.debug) console.log('\u{26AB} Connecting . . .')
    }
  }).success(function(json){ 

    $.mobile.loading('hide');  
    success_callback(json);

     //enable debugging
      if(__config.debug) console.log('\u{26AB} Connected')

  }).fail(function(json){ 
    
    $.mobile.loading('hide');  
    error_callback(json); 

    //enable debugging
    if(__config.debug) console.log('\u{26AB} Unable to fetch data. Please check connection')

  })

}













