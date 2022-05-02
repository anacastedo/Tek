let log, i=0;
getData();
async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  const table = document.createElement('table');
  table.setAttribute("id","db_table");
  document.body.appendChild(table);

  for (item of data) {
    i++;
    const row=document.createElement("tr");
    row.setAttribute("id", `row_${i}`);
    document.getElementById("db_table").appendChild(row);
    const column1=document.createElement("td");
    const log_info = document.createTextNode(`Username: ${item.log}`);
    column1.appendChild(log_info);
    column1.setAttribute("class", "column1");

    document.getElementById(`row_${i}`).appendChild(column1);
    const column2=document.createElement("td");
    column2.setAttribute("class","column2");
    const name_info = document.createTextNode(`Name: ${item.name}`);
    column2.appendChild(name_info);
    document.getElementById(`row_${i}`).appendChild(column2);

  }
  console.log(data);
};
