var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 'article-one' : {
    title:'Article one ! Shalet Kishore',
    heading:'Article One',
    date:'October 14,2016',
    content:`<p>
                This is my first article .This is my first article .This is my first article .This is my first article .This is my first article .
            </p>
            <p>
                This is my first article .This is my first article .This is my first article .This is my first article .This is my first article .
            </p>
            <p>
                This is my first article .This is my first article .This is my first article .This is my first article .This is my first article .
            </p>`
},
 'article-two' : {
    title:'Article two ! Shalet Kishore',
    heading:'Article Two',
    date:'October 15,2016',
    content:`<p>
                This is my second article .
            </p>`
},
 'article-three' : {
    title:'Article three ! Shalet Kishore',
    heading:'Article Three',
    date:'October 17,2016',
    content:`<p>
                This is my third article .
            </p>`
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
         ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
          
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
