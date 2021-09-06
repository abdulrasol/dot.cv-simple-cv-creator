<script>
    import CV from '../Stores/CVStore';
    import CycleButton from '../shared/CircleButton.svelte';
    import { fly, fade } from 'svelte/transition';
    import handleDeleteing from '../scripts/handleDeleteing';
    import { flip } from 'svelte/animate';


    let value = '';
    let valid = false;

    const handleAdd = () => {

        // vadilate
        valid = true;
        if(value.trim().length < 1) {
            valid = false;
        }

        if (valid){
            CV.update(currentData => {
                currentData.professionalSkills.push(value);
                value = '';
                return currentData;
            });
        }
    };
    let s = CV.professionalSkills;
    
    const handleDelete = (data) => {
        CV.update(currentData => {
            let temp = handleDeleteing(data, currentData.professionalSkills);
            currentData.professionalSkills = temp;
            return currentData;
        });
    };

</script>

<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Professional Skills</span>
            <div class="uk-accordion-content">
                <div>
                    <form on:submit|preventDefault={handleAdd} class="uk-form-stacked">
                        <div class="uk-padding-small uk-padding-remove-horizontal">
                            <input class="uk-input" type='text' placeholder='New Skill' bind:value required>
                            <div class="uk-padding-small uk-text-center">
                                <button class="uk-button uk-button-default">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div  class="uk-padding-samll uk-padding-remove-horizontal uk-flex uk-flex-wrap uk-flex-wrap-around">
                {#each $CV.professionalSkills as i, index (index)}
                    
                    <div  class="item uk-width-auto" in:fly='{{y:150, duration:500}}' out:fade='{{duration:400}}' animate:flip={{duration:500}}>
                        <div>
                            <p class="uk-width-auto">{i}</p><CycleButton icon='close' on:click={()=>{{handleDelete(String(i))}}}></CycleButton>
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