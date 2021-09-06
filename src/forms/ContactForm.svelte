<script>
    import CV from '../Stores/CVStore';
    import Input from './components/input.svelte';
    let phone= '798-313-2689';
    let address = '72710 Nathen Locks';
    let email =  'yourname@domain.com';

    
    $:{
         $CV.contacts.phone.value = phone;
         $CV.contacts.address.value = address;
         $CV.contacts.email.value = email;
    }

</script>

<div class="uk-width-1-1">
    <ul uk-accordion>
    <li>
        <span class="uk-accordion-title">Contacts Infomation</span>
        <div class="uk-accordion-content">
            <form class="uk-form-stacked">
                <Input title='Phone' id='phone' bind:value={phone}></Input>
                <Input title='Adress' id='adress' bind:value={address}></Input>
                <Input title='Email' id='email' bind:value={email}></Input>
            </form>
        </div>
    </li>
</ul>


</div>