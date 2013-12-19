lessimport
==========

## Install

	npm install lessimport
	
## Usage

	var lessImport = require('lessimport');	
	//file you want to analysis
	lessImport('index.less', 'utf-8');
	
	//return:
	[ 
	  '/Users/xhowhy/dev/test/detail/src/page/itemDetail.less',
      '/Users/xhowhy/dev/test/detail/src/css/base.less',
      '/Users/xhowhy/dev/test/detail/src/sku/regionSell.less',
      '/Users/xhowhy/dev/test/detail/src/body/brand.less' 
    ]


less file dependency analysis,import file analysis,依赖分析
