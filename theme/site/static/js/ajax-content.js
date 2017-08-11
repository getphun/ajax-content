$(function(){
    var ctns = $('.ajax-content');
    if(!ctns.length)
        return;
    
    ctns.each(function(i,e){
        var el = $(e);
        
        var name      = el.data('ajax');
        var placement = el.data('placement');
        var callback  = el.data('callback');
        
        var target = '/comp/ajax-content/'+name;
        
        $.get(target, function(html){
            if(!html)
                return;
            
            html = $(html);
            switch(placement){
                case 'child':
                    el.append(html);
                    break;
                case 'replace':
                    el.replaceWith(html);
                    break;
                case 'before':
                    html.insertBefore(el);
                    break;
                case 'after':
                    html.insertAfter(el);
                    break;
            }
            
            if(callback)
                window[callback](el, html);
        });
    });
});