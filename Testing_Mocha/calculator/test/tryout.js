let dirSearcher = require('../lib/Make_It_Modular');

dirSearcher("../files", "js", function (err, data) {
    if (err) {
        return callback(err);
    }
    console.log(data.join('\n'));
});