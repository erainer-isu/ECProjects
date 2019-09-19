    var date;
    var url = 'https://api.nasa.gov/planetary/apod?api_key=jT9a9djmlXvr6QGYLXet52uTP4ycNUGYnqdQeCA7&date=';
    
    nasa(url);

    function myFunction()
    {
        date = (document.getElementById('dateEnter').value);
        url = url + date;
        nasa(url);
    }

    function nasa(url)
    {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() 
        {
            var data = JSON.parse(this.response);
            document.getElementById("date1").innerHTML = data.date;
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("description").innerHTML = data.explanation;
            document.getElementById("image").src = data.url;
            console.log(date);
        }
        request.send();
    }
    