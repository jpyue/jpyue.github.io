// SORT COLUMNS WHEN CLICKING TOP HEADER ARROWS

jQuery.fn.sort = (function(){    
    var sort = [].sort;
    return function(comparator, getSortable) {
        getSortable = getSortable || function(){return this;};
        var placements = this.map(function(){
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );
            
            return function() {
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }
                parentNode.insertBefore(this, nextSibling);
                parentNode.removeChild(nextSibling);
                
            };
            
        });
       
        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });
        
    };
    
})();

$(document).ready(function(){
  var table = $('.table table');

  function createClickHandler(column, isAscending){
    return function(e){
      table.find('td')
        .filter(function(){
          return $(this).index() === column;
        })
        .sort(function(a, b){
          var order = $.text([a]) > $.text([b]);
          return isAscending ? order : !order;
        }, function(){
          return this.parentNode; 
        })
      ;
    };
  }
  
  // CREATE ARROWS FOR HEADER
  $('.table table tr th').each(function(column,item){
	  
	var num = 0
	 
    $(this)
//      .append($('<b id=' + num++ + '>&#9650;</b>')
//        .click(createClickHandler(column, true))
//      )
      .append($('<b id=' + num++ + '>&#9660;</b>')
        .click(createClickHandler(column, false))
      )
      ;
  });

});

function select_option(){ 

	var confirm1 = confirm("Are you sure you want to change this option?");
	
        if(confirm1){
            form.submit(); // EDIT: forms are not defined 
        } else {
            return false;
        }

}