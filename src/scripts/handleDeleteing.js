    const handleDeleteing = (data, dataArray) => {

        let langs = [...dataArray];
        let tempData = [];

        langs.forEach(element => {
            if (data !== element) {
                tempData.push(element)
            }
        });

        return tempData;
    };

    export default handleDeleteing;