<script>
    import html2canvas from 'html2canvas';
    import { saveAs } from 'file-saver';
    import CVStore from '../Stores/CVStore';
    import CV from '../Stores/CVStore';
    

    const downloadAsPNG = () => {
        let node = document.getElementById('print-doc');
        let wantedWidth = (2480/node.offsetWidth);

        html2canvas(node, {scale: wantedWidth}).then(canva => {
            canva = canva.toDataURL('image/png',    1);
            window.saveAs(canva, `${$CV.name}.png`);
        });
        
    };
</script>

<div>
    <button class="uk-button uk-button-default" on:click={downloadAsPNG}>Download</button> 
</div>


