var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article = {
    'article-one':{
    title: 'article-one! magilchi',
    heading:'article-one',
    date: 'jul 30 1997',
    content:`
    <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>
                <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>
                 <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>`
},
    'article-two':{title: 'article-two! magilchi',
    heading:'article-two',
    date: 'aug 24 1997',
    content:`
    <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>
    
                 <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>`},
    'article-three':{title: 'article-three! magilchi',
    heading:'article-three',
    date: 'feb 14 1997',
    content:`
    <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>
                <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>
                 <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>`}
};
function createtemplate(data){
    var title= data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate = `
<html>
    <head>
        <title>${title}</title>
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>home</a>    
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
return htmltemplate;
}



app.get('/:articlename', function (req, res){
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
