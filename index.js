// acces the btn, content,

let btn = document.querySelector("#btn");
let content = document.querySelector("#text");
let voice = document.querySelector("#voice");

// new function for speaking : (wish, etc.)

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB";
    window.speechSynthesis.speak(text_speak);
}

// new function for wish me

function wish_me(){
    let day= new Date();
    let hours= day.getHours();

    if(hours>=0 && hours<12){
        speak("good morning everyone,click the button to ask questions");
    } else if(hours>=12 && hours<16){
        speak("Good afternoon everyone, click the button to ask questions");
    } else{
        speak("good evening everyone ,click the button to ask questions");
    } 
}
    window.addEventListener('load',()=>{
        wish_me()
        voice.style.display= "none";
    });

  
    // recognisation of speech

    let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition ;
    let recognition =new speechRecognition();
    recognition.onresult=(event)=>{
        let currentIndex=event.resultIndex; 
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText=transcript;
        // console.log(event);
        takeCommand(transcript.toLowerCase());
    }
    // all this recognition shoul start after the btn click.
    btn.addEventListener( "click",()=>{
        recognition.start()
        btn.style.display="none";
        voice.style.display="flex";
    })


    // bolalela command take krtay tya sathi function

    function takeCommand(message){
        btn.style.display="flex";
        voice.style.display="none";
        if(message.includes("hello")){
            speak("Hello Guys, How can I help you");
        } else if (message.includes("who are you") || message.includes("hu r u")){
            speak("   I am Yannddi, A virtual AI model, made by yash, using, HTML, CSS, JavaScript");
        } else if (message.includes("open youtube")){
            speak(" opening youtube");
            window.open("https://www.youtube.com");
        } else  if(message.includes("how are you")){
            speak("I am fine , How can I help you");
        }  else if(message.includes("open instagram")){
            speak("opening instagram");
            window.open("https://www.instagram.com/");
        } else if(message.includes("open calculator")){
        speak("opening  calculator");
        window.open("calculator://");
     
         } else if(message.includes("open whatsapp")){
        speak("opening  whatsapp");
        window.open("whatsapp://");
         }  
        
        // else if(message.includes("open camera")){
        //  speak("opening  camera");
        // window.open("camera://");
        //  }
        //     else if(message.includes("open gallery")){
        // speak("opening  gallery");
        // window.open("gallery://");
        //  }
                else if(message.includes("open snapchat")){
        speak("opening  snapchat");
        window.open("snapchat://");
         }
        
        
     else if(message.includes("time right now")){
            let time= new Date().toLocaleString(undefined,{hour: "numeric",minute:"numeric"});
            speak(time);
         } 
        
         else if(message.includes("can you speak")){
             speak(" okkey "+message.replace("can you speak",""));
         }

        // other any que saathi google la connect 
        else if(message.inlcudes("what is ")) {  
            let finalText = "this is what I found on internet regarding"+ message.replace("yanndi","") ;
            speak(finalText);
            window.open(`https://www.google.com/search?q=${message.replace("yanndi","")}`,"blank");
        }
    }
