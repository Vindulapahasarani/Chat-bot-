var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Horror','Science fiction','Action','Comedy','Thriller','Fantacy','Animation'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.","The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.","The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA."],
        url : {
            more:"https://www.context.news/tech-society?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTmg7weoBVr188DNddxEgO_qqkqGywglosxOh5Vgrt-Hnm9bYlTkEBhoCXjUQAvD_BwE",
            link:["https://www.timesofearth.com/?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTi_irdIT7Za9rT9_fZkcCNqEM_8eUy9UGA1jFsNj65pDiTwhcnBg1xoCeCMQAvD_BwE"]
           
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
 
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers','Laptops'],
        url : {
            more:"https://youtu.be/8ZSSheyE-7w?si=VL3yxyNYzRUJ6DmY",
            link:["https://www.banggood.com/brands.html?utm_source=google&utm_medium=cpc_brand&utm_content=all&utm_campaign=aceng-skw-ads-all-bgn-enew&gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTt5Vrjsz_3ao1bmJM0MnRdtzptwdIj-TMgc4fp2BFIHSZ7YT-pF-2BoCqoYQAvD_BwE","https://www.daraz.lk/"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://youtu.be/GcczLPEhf5I?si=_s1zXW7Lwo58bXWJ",
            link:["https://www.discoverresultsfast.com/web?q=beauty+products+online+shopping&o=1673447&cid=20381785874&agid=152283457598&utm_source=google&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTiErtTdRck_t5VA0vPH8zCRHm0jID_8o6RgaAJgc30S_jpTzbHu0ZhoCwqUQAvD_BwE&gad_source=1&qo=semQuery&ag=fw10&an=google_s&tt=rmd&ad=semA&akid=drf-20381785874-152283457598","https://beautyspotboutique.com/?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTsdJY-csSmZ0iMn9g0u5sZ3wEVbRhtcIvrHX5LO8L6YMATaoz6F-ERoCIq8QAvD_BwE"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://youtu.be/XfLc11qWvW4?si=ILdd9pbt2zbHCGsw",
            link:["https://www.made-in-china.com/cs/hot-china-products/Cell_Phone_Accessories.html?acc=55573435-zcj&cpn=122320855-5524148935&tgt=kwd-19830870&net=g&dev=c-&gid=CjwKCAiA_tuuBhAUEiwAvxkgTm2ObJv5Bwz1zdHH0e9uzv7LF438tA3FSmoF1Ly1u2kLcQtvteNP2xoCXfcQAvD_BwE&kwd=mobile%20phone%20accessories&mtp=b&gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTm2ObJv5Bwz1zdHH0e9uzv7LF438tA3FSmoF1Ly1u2kLcQtvteNP2xoCXfcQAvD_BwE","https://business.google.com/v/imobile-supreme/015155960079343702606/7201/_?caid=21025354042&agid=158962185036&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTl_XCkSaUJJSbZDwkyaY3a4P_P0XuFG84ITHAuBeC-e_-8Qsf7UpBxoChA8QAvD_BwE"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://youtu.be/9v-VqYeABpE?si=efkQx44l-78GQEgg",
            link:["https://hameedia.com/product-category/men/men_accessories/","https://www.essentials.lk/collections/men-accessories"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://youtu.be/t6TFiYUXTJc?si=MRbH6HxbTZwQoa0U",
            link:["https://lazyjacks.co.uk/?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTuXYZeaTVOi6PzO5G9-OmS9v5qOJfGFOlaR1efHIKv9ObENvB9OQWhoC-d8QAvD_BwE"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3"],
        url : {
            more:"https://youtu.be/KNaCJYX-mgY?si=3nFRt5VwwP5R-Yi7",
            link:["https://youtu.be/UPkMkIOzej8?si=5wzJXsQweC_ivWSw",
            "https://youtu.be/mjO1yZyi6bM?si=5fuitLFeszvV80N6",]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.gadgets360.com/entertainment/new-english-movies",
            link:["https://timesofindia.indiatimes.com/entertainment/latest-new-movies/english-movies","https://www.imdb.com/chart/top/"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.imdb.com/india/top-rated-indian-movies/",
            link:["https://www.gadgets360.com/entertainment/new-hindi-movies","https://www.gadgets360.com/entertainment/new-hindi-movies"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.mxplayer.in/web-series",
            link:["https://en.wikipedia.org/wiki/Web_series","https://www.amazon.in/minitv/ct/web-series"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["#","#","#","#","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}