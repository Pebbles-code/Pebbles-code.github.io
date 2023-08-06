         // Check if user is already logged in
         const loggedInMTF = localStorage.getItem("loggedInMTF");
         const loggedInSCP = localStorage.getItem("loggedInSCP");
         
         if (loggedInMTF) {
           loadMTFStyles();
         } else if (loggedInSCP) {
           loadSCPStyles();
         }

         function loadMTFStyles() {
         const styleLinks = [
           "./scp/index_files/style.css",
           "./scp/index_files/1",
                   "./resources/css/normalize.min.css",
           "./resources/css/black-highlighter.min.mtf.css",
           "./resources/css/darksidebar.css",
           "./resources/css/anombar.css",
           "./resources/css/extrablack.css",
           "./resources/css/center-mtf.css",
];
styleLinks.forEach(link => {
   const styleLink = document.createElement("link");
   styleLink.rel = "stylesheet";
   styleLink.href = link;
   document.head.appendChild(styleLink);
 });
}

         function loadSCPStyles() {
           const styleLinks = [
           "./scp/index_files/style.css",
           "./scp/index_files/1",
                     "./resources/css/normalize.min.css",
           "./resources/css/black-highlighter.min.19.css",
           "./resources/css/darksidebar.css",
           "./resources/css/anombar.css",
           "./resources/css/extrablack.css",
           "./resources/css/center.css",
           ];
           styleLinks.forEach(link => {
   const styleLink = document.createElement("link");
   styleLink.rel = "stylesheet";
   styleLink.href = link;
   document.head.appendChild(styleLink);
 });
}