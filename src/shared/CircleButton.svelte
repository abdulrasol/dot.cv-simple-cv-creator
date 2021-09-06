<script>
    export let icon='close';
   
    export let color= 'tomato';
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<a style="background: {color};"  class="uk-icon-button" uk-icon={icon} on:click>
    <slot></slot>
</a>

<style>
    a{
        color: white;
    }
</style>

