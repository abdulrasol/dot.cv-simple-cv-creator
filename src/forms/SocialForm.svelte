<script>
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    import CycleButton from '../shared/CircleButton.svelte';
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let url = '';
    let username = '';
    let icon;
    let valid = false;

    const handleAdd = (data) => {
        CV.update(currentData => {
            let copiedData = currentData;
            let socials = copiedData.socials;
            socials.forEach(element => {
                if(element.icon === data){
                    element.url = url;
                    element.username = username;
                }
            });
            username = '';
            url = '';
            return copiedData;
        });
    };

    const handleDelete = (data) => {

        CV.update(currentData => {
            
            let socials = [...currentData.socials];
            //let tempData = [];

            socials.forEach(element => {
                if(data.icon === element.icon){
                    element.username = '';
                }
            });
            return currentData;
        });
    };

</script>

<div class="uk-width-1-1">
    <ul uk-accordion>
        <li>
            <span class="uk-accordion-title">Socials</span>
            <div class="uk-accordion-content">
                <div>
                    <form on:submit|preventDefault={()=>handleAdd(icon)} class="uk-form-stacked">
                        <div class="uk-padding-small uk-padding-remove-horizontal"> 
                        <Input title='Usernane' id='username' bind:value={username}/>
                        <Input title='URL' id='url' bind:value={url} required={false}/>
                        <div>
                            <div class="uk-form-label">Social Network</div>
                            <div class="uk-form-controls">
                                <select class="uk-select" bind:value={icon}>
                                    {#each $CV.socials as social}
                                        <option value={social.icon}>{social.name}</option>
                                    {/each}
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
                {#each $CV.socials as social, index (index) }
                    
                    <div in:fly='{{y:150, duration:500}}' animate:flip={{duration:500}}>
                        {#if social.username}
                            <div class="item uk-width-auto" out:fade='{{duration:400}}'>
                                <div>
                                    <p class="uk-width-auto">{social.name}</p><CycleButton icon='close' on:click={()=>{{handleDelete(social)}}}></CycleButton>
                                </div>
                            </div>
                        {/if}                       
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
