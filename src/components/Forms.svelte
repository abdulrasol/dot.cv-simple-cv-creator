<script>
    import domtoimage from 'dom-to-image';
    import { saveAs } from 'file-saver';
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
    
    const handlePrint = () => {
        let node = document.getElementById('print-doc');
        domtoimage.toPng(node).then(function (blob) 
            {   
                window.saveAs(blob, `${$CV.name}.png`);
            });
    };
    
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
    
    <!-- <Button on:click()={handlePrint}>Print</Button> -->
    <div>
        <button class="uk-button uk-button-default" on:click={handlePrint}>Download</button>
    </div>
    
</div>