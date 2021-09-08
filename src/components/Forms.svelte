<script>
    import domtoimage from 'dom-to-image';
    import { saveAs } from 'file-saver';
    import Modal from '../shared/Modal.svelte';
    import PersonalInfoForm from '../forms/PersonalInfoForm.svelte';
    import ContactForm from '../forms/ContactForm.svelte';
    import ProfSkillsForm from '../forms/ProfSkillsForm.svelte';
    import SoftSkillsForm from '../forms/SoftSkillsForm.svelte';
    import LanguagesForm from '../forms/LanguagesForm.svelte';
    import SocialForm from '../forms/SocialForm.svelte';
    import EducationForm from '../forms/EducationForm.svelte';
    import ExperienceForm from '../forms/ExperienceForm.svelte';
    import CertificationsForm from '../forms/CertificationsForm.svelte';
    import CV from '../Stores/CVStore';
    import { fade } from 'svelte/transition';
    
    async function download() {
        let node = document.getElementById('print-doc');
        const res = await domtoimage.toPng(node).then(function (blob) {   
            window.saveAs(blob, `${$CV.name}.png`);
        });
    }
        
    let promise = download();

    function handleClick() {
        promise = download();
    }
    
    
</script>

<div class="forms" uk-grid>
    <PersonalInfoForm></PersonalInfoForm>
    <ContactForm></ContactForm>
    <EducationForm></EducationForm>
    <ExperienceForm></ExperienceForm>
    <ProfSkillsForm></ProfSkillsForm>
    <SoftSkillsForm></SoftSkillsForm>
    <LanguagesForm></LanguagesForm>
    <CertificationsForm></CertificationsForm>
    <SocialForm></SocialForm>
    
    <div>
        <button class="uk-button uk-button-default" on:click={handleClick}>Download</button>
        {#await promise}
            <div class="downloading" in:fade|local={{duration:500}}>
                <button class="uk-button uk-button-default" disabled >Downloading</button>
            </div>
        {/await } 
          
    </div>
    
</div>

<style>
    .downloading{
        width: 100%;
        margin: 5px auto;
    }
</style>