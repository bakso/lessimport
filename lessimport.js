var fs = require('fs'),
    path = require('path');

var importReg = /@import\s*\(?\"(.+?)\"\)?;?/g;

function getImporters(cfg, ret){
    var file = cfg.file;
    var charset = cfg.charset || 'utf-8';
    var filename = path.resolve(file);

    ret = ret || [filename];

    var content = fs.readFileSync(file, charset);

    //remove comment
    //content = content.replace(/\/\*.+?\*\//g, '');

    var importsStatement = content.match(importReg);

    if(importsStatement && importsStatement.length){
        var imports = [];
        importsStatement.forEach(function(statement){
            imports.push(statement.match(/\"(.+?)\"/)[1]);
        });

        var filedir = path.dirname(file);

        imports.forEach(function(item){
            var importfile = path.resolve(filedir, item);
            ret.push(importfile);
            getImporters({
                file: importfile,
                charset: 'utf-8'
            }, ret);
        });
    }

    return ret;
}

module.exports = function(filename, charset){
    return getImporters({
        file: filename,
        charset: charset || 'utf-8'
    })
}






