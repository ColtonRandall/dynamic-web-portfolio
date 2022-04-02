import './App.css';

function App() {
  return (
    <body>

    {/* Background image  */}
    <div>
        <img src="./website_attachments/images/Surface duo.jpg" id="background"/>
    </div>




    {/* Headers  */}
    <div class="nav">

        <a href="./projects.html">Personal Projects</a>
        <a href="./certificates.html">Certifications</a>

        <a href="./index.html" id="home">Home</a>
        
        
    </div>


    <br></br>
    <br></br>
    <br></br>

    <div id="header">
        <p id="title">Colton<br></br>Randall</p>
        

        <img src="./website_attachments/images/Picture-removebg-preview.png" id="mainphoto" title="Me :)"/>

        <div id="subTitle"><div id="SEtitle">Software Engineer<blink>|</blink></div><br></br> with a passion for Aviation &#x2708; and Biochemistry &#x1F9EC; </div>

        <p id="location"> &#x1F30F; Auckland | New Zealand </p>
       
    </div>
    
    {/* ICONS  */}
    <div class="iconLinks">

        {/* CV  */}
        <a href="./website_attachments/documents/Colton_CV_09.21.pdf">
            <img src="./website_attachments/images/CV3.png" id="cvicon" title="View my CV!"/>
        </a>

        {/* github  */}
        <a href="https://github.com/ColtonRandall">
            <img src="./website_attachments/images/github4.png" id="github" title="See what I've been working on!"/>
        </a>


        {/* linkedin  */}
        <a href="https://www.linkedin.com/in/coltonrandall/">
            <img src="./website_attachments/images/linkedin3.png" id="linkedin" title="Find me on LinkedIn!"/>
        </a>

        
        {/* email  */}
        <a href="mailto:coltondominicrandall@gmail.com">
            <img src="./website_attachments/images/mail.png" id="gmail" title="Send me an email!"/>
        </a>

    

    </div>


    <br></br>
    <br></br>


    {/* scroll down bar  */}
    <div id="scrollDiv">
        <img src="./website_attachments/scroll.png" id="scroll"/>
    </div>


    {/* Aboutme reveal button  */}
    <div id="buttonDiv">
    <button type="button" onclick="showAboutme()">Get to know me!</button>
    </div>

    

    {/* ABOUT  */}
    <div id="ABOUTME">


        <div class="aboutMeContent">


            {/* COLENANOOK  */}
            <div class="coleNanook">

                <div id="imgTag">
                    <p>New puppy and videogames, what a life! (1999)</p> 
                    <img src="./website_attachments/images/coleNanook.jpg" id="coleNanookIMG" title="1999: My first playstation and first puppy, what a life!"/>
                </div>

                <p id="coleNanookContent">
                    Hi! I'm Colton, a proud dual citizen of two of the most beautiful countries in the world - Canada
                    (my
                    birthplace) and New Zealand (where I grew up). We moved to NZ in 1998, leaving behind all of our
                    extended family in Vancouver. In my early years, I gravitated toward spending time with our new
                    puppy,
                    Nanook, and got my first playstation in 1999 (picture for proof), which was where my interest for
                    technology started.
                </p>


            </div>




            {/* RWANDA1   */}
            <div class="Rwanda1Div">

                <p id="Rwanda1Content">
                    Fast forward to 2013. I had just finished high-school and was experiencing the need to explore the
                    world and
                    what it had to offer. Luckily for me, I had an Aunt who was living and working in Rwanda. This acted
                    as the
                    opportunistic-fuel I needed to nose-dive into some volunteer experience.
                </p>

                <img src="./website_attachments/images/rwanda1.jpg" id="rwanda1IMG" title="2013: Volunteering at a Rwandan pre-school"></img>

            </div>




            {/* RWANDA2 */}
            <div class="Rwanda2Div">

                <img src="./website_attachments/images/rwanda2.jpg" id="rwanda2IMG" title="Me and my good friend Kristen!"></img>

                <p id="Rwanda2Content">
                    In Rwanda, I taught English at a local orphanage and a nearby pre-school. It was a raw experience
                    where I
                    discovered amazing places and people, along with frequent and sombering reminders of how
                    lucky I
                    am. I later went back in 2016, this time to Kenya, to complete more volunteer work. I taught Maths
                    and
                    Physics at a high school in Kibera - the largest slum in Africa. Additionally, I worked as a
                    healthcare
                    assistant deeper in the slum to help local doctors treat the residents for Malaria and various
                    respiratory
                    infections. This inevitably encouraged an interest in healthcare and Biology, which is where my
                    first
                    University degree came into play.
                </p>


            </div>

            {/* extra kenya / Africa photos */}
            <div id="extraPhotos">
                
                <img src="./website_attachments/images/kenya.jpg" title="2016, Kenya: The pre-school in Kibera slum I volunteered at" id="kenya"></img>

                <img src="./website_attachments/images/elephant.jpg" title="My adopted baby elephant 'Ngilai' from David Sheldrick Wildlife Trust" id="elephant"></img>

            </div>




            {/* OTAGO  */}
            <div class="OtagoDiv">

                <p id="otagoContent1">
                    I started my BSc at the University of Otago in 2015, taking a general Health Science
                    program which
                    involved completing eight interdisciplinary courses, spread throughout various degree programs
                    and
                    subjects. This was what introduced me to Biochemistry. It was something I never thought I'd enjoy,
                    but the
                    requirement to take that course was what steered me toward a degree in Biochemistry. Genetic Engineering played a big part in the course content throughout the program, along with the treatment of cancer. I was intrigued with how technology can be coupled with biochemical processes in working toward curing the seemingly uncurable. I graduated in 2018 and was torn between the pursuit of refining my technological knowledge and my passion for Aviation.
                </p>

            </div>

            
            <div id="otagoImages">
                <img src="./website_attachments/images/otago.jpg" id="otagoIMG"></img>

                <img src="./website_attachments/images/otagoGrad.JPG" id="otagoGradIMG" title="2018: Graduation day -My partner Emma and I"></img>
            </div>




            {/* FLYING   */}
            <div class="flyingDiv">
                <p id="flyingContent">
                    In 2018, toward the end of my degree, I decided to simultaneously take some flight lessons at a local aero
                    club. This
                    resulted in my first ever solo flight - a childhood dream. I decided that I would enroll in a full-time
                    course
                    at a flight school to pursue a career as a pilot. I started in 2019, got my private license, then
                    Covid-19
                    spread across the globe. This global event and it's inevitable impact on the industry forced me to
                    step
                    back and reconsider this path.
                </p>

                <img src="./website_attachments/images/flying.JPG" id="flyingIMG" title="2019: My first solo cross country flight"/>
            </div>

            <div class="BioinformaticsDiv">
                Once lockdown ended, I managed to secure myself three jobs as a Bioinformatics Research Assistant, two
                at the University of Auckland and one at Landcare Reasearch.
                These jobs helped me in getting first-hand programming experience, while continuing to progress through the
                online courses and slowly updating my GitHub profile with small projects.

                <br></br>
                <br></br>

                Reaching out and making connections during these jobs helped me realise that a formal qualification in
                programming can not only compliment my BSc in Biochemistry, but open up many more doors than I initially
                thought. I enrolled in the postgraduate certificate in Information Technology at Auckland University,
                obtained two <strong>'Certificate of outstanding achievement'</strong> awards in both papers, and qualified
                for the Master of Information Technology, where I am specialising in software development and health informatics. 
            </div>

        </div>
        </div>

        <br></br>
        <hr></hr>
        <hr></hr>
        <br></br>
        <br></br>
        <div class="toTop"><a href="#"><img src="./website_attachments/images/up.png" id="arrow" title="Back to top!"></img></a>
    </div>
</body>);

  
};


export default App;
