<script>
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    import CycleButton from '../shared/CircleButton.svelte';
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let value = '';
    let level = 'Beginner';
    let valid = false;

    const handleAdd = () => {
        CV.update(currentData => {
                let data = {language:value, level};
                currentData.languages.push(data);
                value = '';
                return currentData;
        });
    };

    const handleDelete = (data) => {

        CV.update(currentData => {
            
            let langs = [...currentData.languages];
            let tempData = [];

            langs.forEach(element => {
                if(data !== element){
                    tempData.push(element)
                }
            });
            currentData.languages = tempData;
            return currentData;
        });
    };

</script>

<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Languages</span>
            <div class="uk-accordion-content">
                <div>
                    <form on:submit|preventDefault={handleAdd} class="uk-form-stacked">
                        <div class="uk-padding-small uk-padding-remove-horizontal"> 
                            <Input id='lang-input' title='Language' bind:value/>
                            <div>
                                <div class="uk-form-label">Level</div>
                                <div class="uk-form-controls">
                                    <select class="uk-select" bind:value={level}>
                                        <option>Native</option>
                                        <option>Advanced</option>
                                        <option>Intermediate</option>
                                        <option>Beginner</option>
                                    </select>
                                </div>
                            </div>
                            <div class="uk-padding-small uk-text-center">
                                <button class="uk-button uk-button-default">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div  class="uk-padding-samll uk-padding-remove-horizontal uk-flex uk-flex-wrap uk-flex-wrap-around">
                {#each $CV.languages as language, index (index) }
                    
                    <div class="item uk-width-auto" in:fly='{{y:150, duration:500}}' out:fade='{{duration:400}}' animate:flip={{duration:500}}>
                        <div>
                            <p class="uk-width-auto">{language.language}</p><CycleButton icon='close' on:click={()=>{{handleDelete(language)}}}></CycleButton>
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
