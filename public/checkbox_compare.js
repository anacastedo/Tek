let username1, username2, log, i=0;
getData();
async function getData() {
  i = 0;
  const response = await fetch('/api');
  const data = await response.json();

  const table = document.createElement('table');
  table.setAttribute("id", "compare_table");
  demo.appendChild(table);

  for (item of data) {
    i++;
    const row = document.createElement("tr");
    row.setAttribute("id", `row_${i}`);
    row.setAttribute("class", "compare_row");
    document.getElementById('compare_table').appendChild(row);

    const input = document.createElement("input");
    input.setAttribute("id", `input_${i}`);
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "checkbox_db");
    input.setAttribute("name", "usernames_input");
    input.setAttribute("value", `${item.log}`);
    document.getElementById(`row_${i}`).appendChild(input);

    const label_c = document.createElement("label");
    label_c.setAttribute("id", `label_${i}`);
    label_c.setAttribute("for", `input_${i}`);
    document.getElementById(`input_${i}`).appendChild(label_c);

    const log_info = document.createTextNode(`Username: ${item.log}`);
    const name_info = document.createTextNode(`Name: ${item.name}`);
    document.getElementById(`label_${i}`).appendChild(log_info);
    document.getElementById(`row_${i}`).appendChild(label_c);
  };
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="usernames_input"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    alert(values);

    username1 = values[0];
    username2 = values[1];
    getDataToCompare(username1, username2);
  });



  console.log(data);
};
