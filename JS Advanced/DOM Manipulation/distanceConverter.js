function attachEventsListeners() {
document.getElementById("convert").addEventListener('click', convert);

    function convert () {
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;
        let distance = Number(document.getElementById('inputDistance').value);

        let inputUnitsInMeters = 0;
        let result = 0;
        switch (inputUnits) {
            case 'km':
                inputUnitsInMeters = distance * 1000;
                break;
            case 'm':
                inputUnitsInMeters = distance;
                break;
            case 'cm':
                inputUnitsInMeters = distance * 0.01;
                break;
            case 'mm':
                inputUnitsInMeters = distance * 0.001;
                break;
            case 'mi':
                inputUnitsInMeters = distance * 1609.34;
                break;
            case 'yrd':
                inputUnitsInMeters = distance * 0.9144;
                break;
            case 'ft':
                inputUnitsInMeters = distance * 0.3048;
                break;
            case 'in':
                inputUnitsInMeters = distance * 0.0254;
                break;
        }

        switch (outputUnits) {
            case 'km':
                result = inputUnitsInMeters / 1000;
                break;
            case 'm':
                result = inputUnitsInMeters / 1;
                break;
            case 'cm':
                result = inputUnitsInMeters / 0.01;
                break;
            case 'mm':
                result = inputUnitsInMeters / 0.001;
                break;
            case 'mi':
                result = inputUnitsInMeters / 1609.34;
                break;
            case 'yrd':
                result = inputUnitsInMeters / 0.9144;
                break;
            case 'ft':
                result = inputUnitsInMeters / 0.3048;
                break;
            case 'in':
                result = inputUnitsInMeters / 0.0254;
                break;
        }

        document.getElementById('outputDistance').value = result;
        document.getElementById('outputDistance').disabled = '';
    }
}

/*
1 km = 1000 m
1 m = 1 m
1 cm = 0.01 m
1 mm = 0.001 m
1 mi = 1609.34 m
1 yrd = 0.9144 m
1 ft = 0.3048 m
1 in = 0.0254 m*/
