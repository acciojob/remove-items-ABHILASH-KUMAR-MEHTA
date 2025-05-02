function removeSelectedColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedValue = colorSelect.value;
    
    // Loop through the options and remove the selected one
    for (let i = 0; i < colorSelect.options.length; i++) {
        if (colorSelect.options[i].value === selectedValue) {
            colorSelect.remove(i);
            break;
        }
    }
}

document.getElementById('removeButton').addEventListener('click', removeSelectedColor);
