<script>
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    import CycleButton from '../shared/CircleButton.svelte';
    import handleDeleteing from '../scripts/handleDeleteing';

    let edu = {
        degree: 'Bachelor in Mechaincal Engineering',
        college: 'college of engineering',
        univercity: 'Harvard',
        GOD: '2019',
        address: 'Najaf, Iraq'
    };

   const handleAdd = () => {
       CV.update(currentData => {
        let education = currentData.edu;
        education.push(edu);
        edu = {
            degree: '',
            college: '',
            univercity: '',
            GOD: '',
            address: '',
        };
        return currentData;
       });
   };

   const handleDelete = (data) => {
       CV.update(currentData => {
           let edus = [...currentData.edu];
           currentData.edu = handleDeleteing(data, edus);
           return currentData;
       });
   };

</script>
<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Education</span>
            <div class="uk-accordion-content">
                <div>
                    <form on:submit|preventDefault={handleAdd} class="uk-form-stacked">
                        <Input id='degree' title='Title or Degree' bind:value={edu.degree}></Input>
                        <Input id='college' title='College' bind:value={edu.college}></Input>
                        <Input title='Univercity' id='univercity' bind:value={edu.univercity} required={false}></Input>
                        <div class="uk-margin">
                            <label class="uk-form-label" for='date'>Graduation Date</label>
                            <div class="uk-form-controls">
                                <input class="uk-input" id='date' type='date' placeholder='Graduation Date' bind:value={edu.GOD} required>
                            </div>
                        </div>
                        <Input id='address-edu' title='Address of College' bind:value={edu.address} required={false}></Input>
                        <div class="uk-padding-small uk-text-center">
                            <button class="uk-button uk-button-primary">Add</button>
                        </div>                    </form>
                </div>
                <div  class="uk-padding-samll uk-padding-remove-horizontal uk-flex uk-flex-wrap uk-flex-wrap-around">
                {#each $CV.edu as degree, index (index) }
                    
                    <div class="item uk-width-auto" in:fly='{{y:150, duration:500}}' out:fade='{{duration:400}}' animate:flip={{duration:500}}>
                        <div>
                            <p class="uk-width-auto">{degree.degree}</p><CycleButton icon='close' on:click={()=>{{handleDelete(degree)}}}></CycleButton>
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