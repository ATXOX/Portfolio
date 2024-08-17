var modalInfo = {
    1: {
      title: "Build a SaaS: AI Short Clipper",
      info: "I participated in the Coders Launchpad Hackathon, where my team and I developed an AI Video Clipper using HTML, CSS, Flask, OpenAI, and youtube_dl. The website takes a YouTube URL, downloads the video in mp4 and mp3 formats, uses OpenAI to generate a transcript, identifies the most engaging parts, and creates short clips from those timestamps.",
      link: "#",
      github: "#"
    },
    2: {
      title: "Ecotopia",
      info: "Created a game in collaboration with my group using software's such as Unity, Unreal Engine and blender in the HP Sustainability Hackathon.",
      link: "https://abdullah-tahir.itch.io/ecotopia",
      github: "#"
    },
    3: {
      title: "PAYIT APPLICATION PROTOTYPE",
      info: "Enhanced the user experience of the financial digital wallet using Figma tools during the Payit Hackathon hosted by First Abu Dhabi Bank",
      link: "https://www.figma.com/proto/mM4VwNvn0e0FFeMvxVhl6c/PAYIT-PROTOTYPE---MPJ---RIT?type=design&node-id=5-7&t=HvHxYZ47q2GOebnr-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A7",
      github: "#"
    },
    4: {
      title: "Live Transcriber",
      info: "....",
      link: "#",
      github: "#"
    },
    5: {
      title: "Face Cluster",
      info: "...",
      link: "#",
      github: "#"
    },
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }