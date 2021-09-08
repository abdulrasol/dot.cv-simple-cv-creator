<script>
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    import TextArea from './components/TextArea.svelte';

    let name = 'First & Last Name';
    let jobTitle = 'Your Job Title';
    let bio = 'Expedita provident qui. Culpa praesentium voluptas aut consequatur iure nihil dignissimos qui quisquam. Quos expedita quaerat natus esse sapiente adipisci aut ullam repellendus. Impedit ut quos. Ipsam sed ipsam mollitia.'
    let image = '';
    $: {
        $CV.name = name;
        $CV.jobTitle = jobTitle;
        $CV.aboutMe = bio;
        $CV.img = image;
    };

    function handleImage() {
        let input = document.getElementById("img-select");
        let fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        fReader.onloadend = function(event){
            image = event.target.result;
        }
    }

</script>

<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Personal Infomation</span>
            <div class="uk-accordion-content">
                <form class="uk-form-stacked">
                    <Input title='Full Name' id='name' bind:value={name}></Input>
                    <Input title='Job Title' id='job-title' bind:value={jobTitle}></Input>
                    <TextArea id='about-me' title='About Me' bind:value={bio}></TextArea>
                    <div class="uk-margin">
                        <label class="uk-form-label" for='img-select'>Profile Image</label>
                        <div uk-form-custom>
                            <input on:change={handleImage} id='img-select' type="file" accept="image/*" name="file" bind:value={image}>
                            <button class="uk-button uk-button-default" type="button" tabindex="-1">Select Profile Picture</button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        </li>
    </ul>
</div>