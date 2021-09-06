<script>
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    import CycleButton from '../shared/CircleButton.svelte';
    import handleDeleteing from '../scripts/handleDeleteing';
    import TextArea from './components/TextArea.svelte';

    let exp = {
        jobTitle: 'Full Stack Devevloper',
        company: 'Dot.IT',
        from: '2020',
        to: 'current',
        description: 'Sit adipisci error aut quo tenetur adipisci. Qui voluptatum voluptas ut. Saepe deleniti odit.'
    }

    const  handleAdd= () => {
        CV.update(currentData => {
            let exps = currentData.experiences;
            exps.push(exp);
            exp = {
                jobTitle: '',
                company: '',
                from: '',
                to: '',
                description: '',
            }
            return currentData;
        });
    };

    const  handleDelete= (data) => {
        CV.update(currentData => {
            let exps = [...currentData.experiences];
            currentData.experiences = handleDeleteing(data, exps);
            return currentData;
        });
    };
    

</script>

<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Experience</span>
            <div class="uk-accordion-content">
                <div>
                    <form on:submit|preventDefault={handleAdd} class="uk-form-stacked">
                        <Input id='job-title' title='Job Title' bind:value={exp.jobTitle}></Input>
                        <Input id='company' title='Company' bind:value={exp.company}></Input>
                        <Input title='From (Year of start)' id='exp-from' bind:value={exp.from}></Input>
                        <Input id='exp-to' title='To (From (Year of leave)' bind:value={exp.to}></Input>
                        <TextArea id='description-exp' title='Job Description' bind:value={exp.description}></TextArea>
                        
                        <div class="uk-padding-small uk-text-center">
                            <button class="uk-button uk-button-primary">Add</button>
                        </div>                    
                    </form>
                </div>
                <div  class="uk-padding-samll uk-padding-remove-horizontal uk-flex uk-flex-wrap uk-flex-wrap-around">
                {#each $CV.experiences as experience, index (index) }
                    
                    <div class="item uk-width-auto" in:fly='{{y:150, duration:500}}' out:fade='{{duration:400}}' animate:flip={{duration:500}}>
                        <div>
                            <p class="uk-width-auto">{experience.jobTitle}</p><CycleButton icon='close' on:click={()=>{{handleDelete(experience)}}}></CycleButton>
                        </div>
                    </div>
                {/each}
            </div>
            </div>
            
        </li>
    </ul>
</div>

<style>
    div.item{
        background: teal;
        border-radius: 6px;
        padding: 5px 7px;
        margin: 2px 3px;
        color: white;
    }
    p{
        display: inline-block;
        padding: 5px 15px 5px 5px;

        margin: 0;
    }
</style>