async function removeUser(){
  log = document.getElementById('username').value;
  const dataToRemove = {
    log
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToRemove)
  };
    fetch('/api_remove', options);
    const root = document.createElement('div');
    const log_info = document.createElement('div');
    log_info.textContent = `Successfully Removed! Refresh the page to update.`;
    log_info.style.cssText = `margin:1%; padding:1%;`;
    root.append(log_info);
    document.body.append(root);
  };
