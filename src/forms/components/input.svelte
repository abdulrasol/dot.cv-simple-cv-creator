<script>
    export let id;
    export let title = 'Title';
    export let value ='';
    export let  required = true
    // export let inputType = 'text';

</script>

<div class="uk-margin">
    <label class="uk-form-label" for={id}>{title}</label>
    <div class="uk-form-controls">
        <input class="uk-input" id={id} type='text' placeholder={title} bind:value required={required}>
    </div>
</div>