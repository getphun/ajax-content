$(function(){
    var ctns = $('.ajax-content');
    if(!ctns.length)
        return;
    
    var cDevice = [1,4,6,7];
    if(screen.width >= 992)
        cDevice = [1,2,3,4];
    else if(screen.width >= 768)
        cDevice = [1,3,5,6];
    
    ctns.each(function(i,e){
        var el = $(e);
        
        var name      = el.data('ajax');
        var placement = el.data('placement');
        var callback  = el.data('callback');
        var device    = parseInt((el.data('device') || 1));
        
        if(!~cDevice.indexOf(device)){
            if(placement == 'replace')
                el.remove();
            return;
        }
        
        var target = '/comp/ajax-content/'+name;
        
        $.get(target, function(html){
            if(!html){
                if(placement == 'replace')
                    el.remove();
                return;
            }
            
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