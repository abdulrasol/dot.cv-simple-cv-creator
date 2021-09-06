<script>
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    import CycleButton from '../shared/CircleButton.svelte';
    import handleDeleteing from '../scripts/handleDeleteing';
    import TextArea from './components/TextArea.svelte';

    let certs = {
        title: 'Basic English',
        from: 'Future Learnning',
        date: '2019',
        preaf: 'Ea atque explicabo ut corrupti. Tenetur nihil quod fugiat. Nisi aut amet.'
    };

   const handleAdd = () => {
       CV.update(currentData => {
        let certsData = currentData.certifications;
        certsData.push(certs);
        certs = {
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
           let certs = [...currentData.certifications];
           currentData.certifications = handleDeleteing(data, certs);
           return currentData;
       });
   };

</script>
<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Certifications</span>
            <div class="uk-accordion-content">
                <div>
                    <form on:submit|preventDefault={handleAdd} class="uk-form-stacked">
                        <Input id='cert-title' title='Certifcation Title' bind:value={certs.title}></Input>
                        <Input id='cert-from' title='From' bind:value={certs.from}></Input>
                        <Input title='Date of get this certicate' id='exp-from' bind:value={certs.date}></Input>
                        <TextArea id='cert-preaf' title='Preaf about this certicate' bind:value={certs.preaf}></TextArea>
                        
                        <div class="uk-padding-small uk-text-center">
                            <button class="uk-button uk-button-primary">Add</button>
                        </div>                    
                    </form>
                </div>
                <div  class="uk-padding-samll uk-padding-remove-horizontal uk-flex uk-flex-wrap uk-flex-wrap-around">
                {#each $CV.certifications as certification, index (index) }
                    
                    <div class="item uk-width-auto" in:fly='{{y:150, duration:500}}' out:fade='{{duration:400}}' animate:flip={{duration:500}}>
                        <div>
                            <p class="uk-width-auto">{certification.title}</p><CycleButton icon='close' on:click={()=>{{handleDelete(certification)}}}></CycleButton>
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