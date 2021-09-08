<script>
    
    import PersonalInfoForm from '../forms/PersonalInfoForm.svelte';
    import ContactForm from '../forms/ContactForm.svelte';
    import ProfSkillsForm from '../forms/ProfSkillsForm.svelte';
    import SoftSkillsForm from '../forms/SoftSkillsForm.svelte';
    import LanguagesForm from '../forms/LanguagesForm.svelte';
    import SocialForm from '../forms/SocialForm.svelte';
    import EducationForm from '../forms/EducationForm.svelte';
    import ExperienceForm from '../forms/ExperienceForm.svelte';
    import CertificationsForm from '../forms/CertificationsForm.svelte';
    import Downloading from './Downloading.svelte';
    
</script>

<div uk-grid>
    <PersonalInfoForm></PersonalInfoForm>
    <ContactForm></ContactForm>
    <EducationForm></EducationForm>
    <ExperienceForm></ExperienceForm>
    <ProfSkillsForm></ProfSkillsForm>
    <SoftSkillsForm></SoftSkillsForm>
    <LanguagesForm></LanguagesForm>
    <CertificationsForm></CertificationsForm>
    <SocialForm></SocialForm>
    <Downloading></Downloading>
</div>
