<script>
    export let id;
    export let title = 'Title';
    export let value;

</script>


<div class="uk-margin">
    <label class="uk-form-label" for={id}>{title}</label>
    <div class="uk-form-controls" id={id}>
        <textarea class="uk-textarea" rows="5" placeholder="About Me" bind:value={value}></textarea>
        <!-- <textarea bind:value={bio}></textarea> -->
    </div>
</div>