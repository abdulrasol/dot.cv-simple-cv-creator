<script>
    import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    export let CV = {
    name: '',
    jobTitle: '',
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg',
    aboutMe: '',
    contacts: {},
    professionalSkills: [],
    softSkills: [],
    languages: [],
    edu: [],
    experience: [],
    certifications: []
};
</script>

<div class="container">
        <div id="print-doc" class="print">
            <!-- side container -->
            <div class="side green">
                <!-- cards -->

                <!-- profile image container -->
                {#if CV.img}

                <div class="image">
                    <img id="user-profile-image" src={CV.img} alt='{CV.name}' srcset="">
                </div>

                 {/if}
                <!-- persoanl info -->
                <div class="card contact">
                    <div class="card-title">
                        <span>Contact Me</span>
                    </div>
                    <div class="card-content">
                        <span>
                            <i class="fas fa-map-marker-alt"></i>{CV.contacts.address.value}</span>
    
                        <a href="tel:{CV.contacts.phone}">
                            <span>
                                <i class="fas fa-phone"></i>{CV.contacts.phone.value}</span>
                        </a>
                        <a href="mailto:{CV.contacts.email.value}">
                            <span>
                                <i class="fas fa-at"></i>{CV.contacts.email.value}</span>
                        </a>
                    </div>
                </div>
                <!-- End persoanl info -->

                <!-- Professional skills -->
                <div class="card skills">
                    <div class="card-title">
                        <span>Professional skills</span>
                    </div>
                    <div class="card-content">
                        {#each CV.professionalSkills as skill, index (index) }
                            <span transition:fly="{{y: 200, duration:400}}" animate:flip='{{duration: 500}}'>{skill}</span>
                        {/each}
                    </div>
                </div>
                <!-- End Professional skills -->

                <!-- soft skills -->
                <div class="card soft">
                    <div class="card-title">
                        <span>Soft skills</span>
                    </div>
                    <div class="card-content">
                        <ul>
                            {#each CV.softSkills as  skill, index (index)}
                                <li transition:fly='{{x:-200, duration:500}}' animate:flip='{{duration: 500}}'>{skill}</li>
                            {/each}

                        </ul>
                    </div>
                </div>
                <!-- End soft skills -->

                <!-- start langs -->
                <div class="card langs">
                    <div class="card-title">
                        <span>Languages</span>
                    </div>
                    <div class="card-content">
                        {#each CV.languages as  language, index (index)}
                            <div class="lang" animate:flip='{{duration: 500}}'>
                                <h4 transition:fly='{{x:-200, duration:500}}'>{language.language}</h4>
                                <span transition:fly='{{x:-200, duration:500}}'>{language.level}</span>
                            </div>
                        {/each}

                    </div>
                </div>
                <!-- End lang -->

                <!-- start langs -->
                <div class="card social">
                    <div class="card-title">
                        <span>Social</span>
                    </div>
                    <div class="card-content">
                        {#each CV.socials as social, index (index)  }
                            <div in:fly='{{x:-200, duration:500}}' animate:flip='{{duration: 500}}'>
                                {#if social.username}
                                    <a href="{social.url}" out:fly='{{x:-200, duration:500}}'>
                                        <span><i class="fab fa-{social.icon}"></i>{social.username}</span>
                                    </a>
                                {/if}
                            </div>
                    {/each}
                    
                </div>
            </div>
            <!-- End lang -->


        </div>
        <!-- end side container -->

        <!-- start right container -->
        <div class="right">

            <!-- Start name div -->
            <div class="name-dev">
                <h1>{CV.name}</h1>
                <h4>{CV.jobTitle}</h4>
            </div>
            <div class="line"></div>
            <!-- end name div -->

            <!-- Start Details div -->
            <div class="details">

                <!-- Start cards -->

                <!-- start about me -->
                <div class="card about">
                    <div class="title">
                        <span>About Me</span>
                    </div>

                    <div class="content">
                        <p>{CV.aboutMe}</p>
                    </div>

                </div>
                <!-- start about me -->

                <!-- start Edu -->
                <div class="card edu">
                    <div class="title">
                        <span>Education</span>
                    </div>

                    <div class="content">
                        {#each CV.edu as edu, index (index) }
                            <div class="item" transition:fly='{{x:-200, duration:500}}' animate:flip='{{duration: 500}}'>
                                <div class="degree-container">
                                    <span class="degree">{edu.degree} <span class="date">| {edu.GOD}</span></span>
                                </div>
                                <div class="college">
                                    <p>{edu.college}</p>
                                    <p>{edu.univercity} <span class="country">| {edu.address}</span></p>
                                </div>
                            </div>
                        {/each}
                    
                    </div>

                </div>
                <!-- start Experience -->

                <!-- start Experience -->
                <div class="card exp">
                    <div class="title">
                        <span>Experience</span>
                    </div>

                    <div class="content">
                        {#each CV.experiences as experience, index (index) }
                            <div class="item" transition:fly='{{x:-200, duration:500}}' animate:flip='{{duration: 500}}'>
                                <div>
                                    <span class="in">{experience.company}</span>
                                </div>
                                <div>
                                    As
                                    <span class="as">{experience.jobTitle}</span>
                                    <span class="from"> | {experience.from}</span>
                                    -
                                    <span class="to">{experience.to}</span>
                                </div>
                                <p>{experience.description}</p>
                            </div>                        
                        {/each}
                    </div>

                </div>
                <!-- start Experience -->

                <!-- start certifications -->
                <div class="card cert">
                    <div class="title">
                        <span>certifications</span>
                    </div>

                    <div class="content">
                        {#each CV.certifications as cert, index (index) }
                            <div class="item">
                                <div>
                                    <span class="title">{cert.title}</span>
                                </div>
                                <div>
                                    <span class="from">{cert.from}</span>
                                    |
                                    <span class="date">{cert.date}</span>
                                </div>
                                <p>{cert.preaf}</p>
                            </div>
                        {/each}
                    </div>

                </div>
                <!-- start Certifcations -->

            </div>
            <!-- end Details div -->
        </div>
        <div class="clear-fix"></div>
    <!-- end right container -->
    </div>
</div>

<div id="print-svg" class="print"></div>

<style>
       /* CV Main Container */

    :root {
        --white: #ffffff;
        --green: #019786;
        --teal: #00695C;
        --red: #C62828;
        --pink: #AD1457;
        --purple: #6A1B9A;
        --indigo: #283593;
        --blue: #1565C0;
        --cyan: #00838F;
        --font-size-left-text: 1vm;
        --font-size-left-title: 1.5vm;

    }

    /* colors class */
    .white {
        background-color: var(--white);
        color: #183c3f;
        border-color: #ccc;
    }

    .blue {
        background-color: var(--blue);
        color: #183c3f;
        border-color: var(--blue);
    }

    .green {
        background-color: var(--green);
        color: #183c3f;
        border-color: var(--green);
    }

    .teal {
        background-color: var(--teal);
        color: rgb(236, 230, 230);
        border-color: var(--teal);
    }

    .cyan {
        background-color: var(--cyan);
        color: rgb(236, 230, 230);
        border-color: var(--cyan);
    }

    /* colors class */


    * :not(i) {
        font-family: Almarai;
        box-sizing: border-box;
        text-transform: capitalize;
        color: inherit;
    }


    .container {
        width: 210mm;
        height: 297mm;
        margin: auto;
        min-height: 100px;
        border: 1px solid #CCC;
    }

    #print-doc {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: 100%;
    }

    /* Colors Classes */

    /* side */
    .container .side {
        width: 30%;
        padding: 10px;
        padding-top: 20px;
        border-right-width: 1px;
        border-right-style: solid;
        font-size: 12pt;
    }

    .container .side .image {
        text-align: center;
        margin-bottom: 18px;
    }

    .container .side .image img {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        border: 1px solid var(--white)
    }

    .container .side .card {
        margin-bottom: 20px;
        color: inherit;

    }

    .container .side .card::after {
        padding-top: 5px;
        content: '';
        display: block;
        width: 50%;
        margin: auto;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .container .side .card .card-title {
        text-align: left;
        font-weight: bold;
        font-family: Tajawal;
        color: inherit;
    }

    .container .side .card .card-title span {
        font-size: 16pt;
        text-transform: capitalize;
        color: inherit;
    }

    .container .side .card .card-content {
        padding-left: 0.5vw;
    }

    .container .side .card .card-content span {
        font-size: 12pt;
        color: inherit;
    }

    /* personal info */
    .container .side .social span,
    .container .side .contact span {
        display: block;
        padding-bottom: 7px;
        color: inherit;
    }

    .container .side .social a,
    .container .side .contact a {
        color: inherit;
        text-decoration: inherit;
    }

    .container .side .social span i,
    .container .side .contact span i {
        padding-right: 0.3vw;
    }

    /* end personal info */

    /* start skills */
    .container .side .skills .card-content span {
        display: inline-block;
        padding: 5px;
        margin: 2px 2px 2px 0;
        border-radius: 5px;
        font-weight: 500;
        background-color: teal;
        color: whitesmoke;

    }

    /* end skills */


    /* start soft skills */
    .container .side .soft .card-content ul {
        padding: 0;
        padding-left: .9vw;
        margin: 0;

    }

    .container .side .soft .card-content ul li {
        list-style-type: circle;
        padding-bottom: 5px;
        font-size: 12pt;

    }

    /* end soft skills */


    /* start soft langs */
    /* start soft langs */
    .container .side .langs .card-content .lang {
        padding-bottom: 10pxw;

    }

    .container .side .langs .card-content h4 {
        font-size: 14pt;
        text-transform: uppercase;
        margin: 0 0 5px 0;

    }

    .container .side .langs .card-content div>span {
        font-size: 12pt;
        display: block;
        margin-bottom: 0.630vw;
    }


    /* end soft langs */

    /* end soft langs */


    /* start right container */

    .right {
        background-color: var(--white);
        width: 70%;
        padding: 10px 30px;
        padding-top: 20px;
    }

    /* start name container */
    .right .name-dev {
        padding-left: 0px;
    }

    .right .name-dev h1 {
        font-size: 20pt;
        margin-bottom: 8px;
        text-transform: capitalize;
    }

    .right .name-dev h4 {
        font-size: 14pt;
        margin-top: 0;
        text-transform: capitalize;
    }

    .right .line {
        width: 100%;
        border-bottom: 2px solid var(--purple);
        opacity: 0.5;
    }

    /* end name container */


    /* start details container */
    .right .details {
        padding-left: 0;
    }

    .right .details .card {
        border-bottom: 2px solid #cccccc57;
        margin-top: 5px;
        margin-bottom: 20px;
    }

    .right .details .card .title {
        padding-left: 0px;
        font-size: 16pt;
        font-weight: bold;
        padding-bottom: 15px;
    }

    .right .details .card .content {
        padding-left: 0px;
        font-size: 12pt;
        font-weight: normal;
        text-align: justify;
        text-justify: inter-word;

    }

    .right .details .card .content div {
        margin-bottom: 15px;
    }

    /* start about */
    .right .details .about .content {
        margin-bottom: 20px;
    }

    .right .details .about .content p {
        padding: 0px;
        margin: 0px;
    }

    /* end about */


    /* start edu */

    .right .details .edu .content .item {
        margin-bottom: 12px;
    }


    .right .details .edu .content div .degree {
        font-size: 1.5vw;
    }

    .right .details .edu .content div .university,
    .right .details .edu .content div .college,
    .right .details .edu .content div .country {
        font-size: 1.2vw;
    }


    /* end edu */


    /* start exp */

    .right .details .exp .content .item {
        margin-bottom: 2.519vw;

    }


    .right .details .exp .content div {
        margin-bottom: 0.630vw;
    }

    .right .details .exp .content div .in {
        font-size: 1.5vw;
    }

    .right .details .exp .content div .to,
    .right .details .exp .content div .from {
        font-size: 0.9vw;
    }

    .right .details .exp .content div .as {
        font-size: 1.2vw;
    }

    .right .details .exp .content div p {
        font-size: 1vw;
        margin: 5px 0;
        text-align: justify;
        text-justify: inter-word;

    }

    /* start cert */

    .right .details .cert .content .item {
        margin-bottom: 2.519vw;

    }

    .right .details .cert .content div {
        margin-bottom: 0.630vw;
    }

    .right .details .cert .content div .title {
        font-size: 1.5vw;
        font-weight: normal;
    }

    .right .details .cert .content div .from {
        font-size: 1.2vw;
        font-weight: normal;
    }

    .right .details .cert .content div p {
        font-size: 1vw;
        margin: 5px 0;
        text-align: justify;
        text-justify: inter-word;

    }




    /* end cert */


    /* end details container */





    /* end right container*/


    .color-ccc {
        color: #CCC;
    }

    .color-w {
        color: #fff;
    }

    .width-25 {
        width: 25%;
        float: left;
    }

    .name {
        font-size: 2vw;
    }

    .side-title {
        font-size: 2vw;
    }

    .contact-container>div:first div:last-child {
        width: 25%;
    }



    .contact-feild div {
        position: relative;
    }

    .contact-feild div span {
        display: block;
        font-size: 1vw;
    }

    .clear-fix {
        clear: both;
    }
</style>