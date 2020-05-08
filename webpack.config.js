const path=require('path');
/**
 * [hash]
 * [chunkhash]
 * [id]
 * [name]
 * [query]
 * [contnenthash]
 */


module.exports={

    mode:'development',
    // entry:'./src/index.js',
    entry:{
     main:'./src/index.js'
    },
    output:{
      path:path.resolve(__dirname,"dist"),
        // filename:'main.js'
        filename:'[name].js',
        publicPath:'/dist/',
        libraryTarget:'umd', //var,amd,common.js,umd
        library:'rstate',
        umdNamedDefine: true,
        libraryExport: 'default' 
    },
    devServer:{
        port:1234,
        contentBase:path.join(__dirname,'dist')
    }


}
