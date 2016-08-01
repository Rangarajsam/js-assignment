exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	  return arr.indexOf(item);
  },

  sum: function(arr) {
	  var ab=0;
	  arr.forEach(function(item,arr,index){
		  ab=ab+item;
	  });
	  return ab;
  },

  remove: function(arr, item) {
	 var item, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        item = a[--L];
        while ((ax= arr.indexOf(item)) !== -1) {
            arr.splice(ax, 1);
        }
    }
	  return arr;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
