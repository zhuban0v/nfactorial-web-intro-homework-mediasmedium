const articles = [
    {
        author : 'Beka',
        authorpic: './authorpic1.png',
        topicName: 'Topics name',
        date: '7 July',
        title: '7 Practical CSS Tips',
        caption: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
        readtime: '12 min read',
        selected: 'Selected for you',
        image : "./0.png"
    },
    {
        author : 'Aruzhan',
        authorpic: './authorpic1.png',
        topicName: 'Topics name',
        date: '7 July',
        title: '7 Practical CSS Tips',
        caption: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.        You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        readtime: '12 min read',
        selected: 'Selected for you',
        image : "./1.png"
    },
    {
        author : 'notBeka',
        authorpic: './authorpic1.png',
        topicName: 'Topics name',
        date: '7 July',
        title: '7 Practical CSS Tips',
        caption: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
        readtime: '12 min read',
        selected: 'Selected for you',
        image : "./2.png"
    }
];

const articleDiv = document.getElementById('articlesID');

articles.map((item) => {
    const html = `
    <div class="wholeart">   
    <div class="article">
         <div>
          <ul class="postdata">
       <li><img class="authorpic" src="${item.authorpic}"></li>
            <li><p class="authorname">${item.author}</p></li>
                <li><p class="in opacity">in</p></li>
                <li><p class="topicname">${item.topicName}</p></li>
                <li><p>·</p></li>
                <li><p class="in opacity">${item.date}</p></li>
            </ul>
            </div>
            <div>
            <a href="./article.html"><p class="topic">${item.title}</p></a>
            </div>
            <div>
                <p class="description">${item.caption}</p>
            </div>
            <div>
                <ul class="postend">
                    <li><p class="optexts">Java Script</p></li>
                    <li><p class="in opacity">${item.readtime}</p></li>
                    <li><p>·</p></li>
                    <li><p class="optexts opacity">${item.selected}</p></li>
                </ul>
                </div> 

            </div>  
              <div>
                <img src="${item.image}" class="topicpic">
            </div>
        </div>;`
        articleDiv.innerHTML += html;
});

fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=9Fj5478g9OVLbE9irqDJnl3Tx7PJV9cp')
.then((response) => console.log(response.json()))
.then(data => (data));
