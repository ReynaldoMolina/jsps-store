export function getSelectOptions(data, columns, elementId) {

    let dataColumns = Object.keys(data[0]);

    const selectOptions = document.querySelector(elementId);
    let tags = "";

    data.map(d => {
        tags += `
            <option value="${d[dataColumns[columns[0]]]}">${d[dataColumns[columns[1]]]}</option>
        `
    });

    selectOptions.innerHTML = tags;
}