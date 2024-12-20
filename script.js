const report = document.getElementById('Texts');

report.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        BUTTON();
    }
});

function BUTTON(){
    if(report.value === ''){
        document.getElementById('Checkone').innerHTML = 'BRO I KNOW WHERE YOU LIVE';
    }else{
        document.getElementById('Checkone').innerHTML = 'HELP IS ON THE WAY';
    }

}

