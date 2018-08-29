function systemComponents(arr) {

    let components = [];
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i].split(' | ');
        let systemName = tmp[0];
        let componentName = tmp[1];
        let subcomponentName = tmp[2];
        if (components[systemName]) {
            if (!components[systemName][componentName]) {
                components[systemName][componentName] = [];
            }
            components[systemName][componentName].push(subcomponentName);
        } else {
            let obj = {};
            obj[componentName] = [subcomponentName];
            components[systemName] = obj;
        }
    }

    for (const componentsKey in components) {
        let orderdComponents = Object.keys(components[componentsKey]).sort((a, b) => {
            let ord =  components[componentsKey][b].length - components[componentsKey][a].length;
            return ord;
        })

        let tmpMap = new Map();
        for (let i = 0; i < orderdComponents.length; i++) {
            let tmp = components[componentsKey][orderdComponents[i]];
            tmpMap[orderdComponents[i]] = tmp;
        }
        delete components[componentsKey];
        components[componentsKey] = tmpMap;
    }

    let sortedComponents = Object.keys(components).sort((a, b) => {
        let ord = Object.keys(components[b]).length - Object.keys(components[a]).length;
        if (Object.keys(components[a]).length === Object.keys(components[b]).length) {
            return a.localeCompare(b);
        }
        return ord;
    })

    let output = new Map();
    for (let i = 0; i < sortedComponents.length; i++) {
        let tmp = components[sortedComponents[i]];
        output[sortedComponents[i]] = tmp;
    }

    for (const outputKey in output) {
        console.log(outputKey)
        for (const outputKey1 in output[outputKey]) {
            console.log(`|||${outputKey1}`)
            for (const outputKey2 in output[outputKey][outputKey1]) {
                console.log(`||||||${output[outputKey][outputKey1][outputKey2]}`)
            }
        }
    }

}

systemComponents(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"]);