function handle_ajax(event) {
  console.log('DOM fully loaded and parsed');
  const resultsDiv = document.getElementById('results-div');
  const restOpsDiv = document.getElementById('rest-ops');
  const listUsersButton = document.getElementById('list-users');
  const listFactsButton = document.getElementById('list-facts');
  const createFactButton = document.getElementById('create-fact');
  const createUserButton = document.getElementById('create-user');
  const deleteUserButton = document.getElementById('delete-user');
  const deleteFactButton = document.getElementById('delete-fact');
  const userName = document.getElementById('user-username');
  const userPassword = document.getElementById('user-password');
  const updateUserButton = document.getElementById('update-user')
  const updateFactButton = document.getElementById('update-fact')
  const userID = document.getElementById('user-id')
  const userID1 = document.getElementById('user-id1')
  const userID2 = document.getElementById('user-id2')
  const userID3 = document.getElementById('user-id3')
  const userID4 = document.getElementById('user-id4')
  const userID5 = document.getElementById('user-id5')
  const factID = document.getElementById('fact-id')
  const factID1 = document.getElementById('fact-id1')
  const factText = document.getElementById('fact-text')
  const factText1 = document.getElementById('fact-text1')
  const likes = document.getElementById('likes')
  const likes1 = document.getElementById('likes1')
  const userName1 = document.getElementById('user-username1')
  const userPassword1 = document.getElementById('user-password1')
  const users_path = 'http://localhost:3001/api/v1/users'

  restOpsDiv.addEventListener('click', (event) => {
    if (event.target === listUsersButton) {
      fetch(users_path).then((response) => {
        if (response.status === 200) {
          resultsDiv.innerHTML = '';
          response.json().then((data) => {
            for (let i=0; i<data.length; i++) {
              let parag = document.createElement('P');
              parag.textContent = JSON.stringify(data[i]);
              resultsDiv.appendChild(parag);
            }
          });
        } else {
          alert(`Return code ${response.status} ${response.statusText}`);
        }
      }).catch((error) => {
        console.log(error);
        alert(error);
      });
    } else if (event.target === createUserButton) {
      var dataObject = {
        username: userName.value,
        password: userPassword.value
      }
      fetch(users_path,
        { method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === updateUserButton) {
      var dataObject = {
        username: userName1.value,
        password: userPassword1.value
      }
      if (dataObject.username === "") {  // blank usernames not supported
        delete dataObject.username;
      }
      if (dataObject.password === "") { // blank passwords not supported
        delete dataObject.password;
      }
      fetch(`${users_path}/${userID.value}`,
        { method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === deleteUserButton) {
      var dataObject = {
        userID: userID1.value,
      }
      if (dataObject.userID === "") {  // blank userID not supported
        delete dataObject.userID1;
      }
      fetch(`${users_path}/${userID1.value}`,
        { method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === listFactsButton) {
      var dataObject = {
        userID: userID2.value,
      }
      if (dataObject.userID === "") {  // blank userID not supported
        delete dataObject.userID2;
      }
      fetch(`${users_path}/${userID2.value}/facts`,
        { method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === createFactButton) {
      var dataObject = {
        fact_text: factText.value,
        likes: likes.value
      }
      if (dataObject.factText === "") {  // blank userID not supported
        delete dataObject.factText;
      }
      if (dataObject.likes === "") {  // blank userID not supported
        delete dataObject.likes;
      }
      fetch(`${users_path}/${userID3.value}/facts`,
        { method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === deleteFactButton) {
      fetch(`${users_path}/${userID4.value}/facts/${factID.value}`,
        { method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === updateFactButton) {
      var dataObject = {
        fact_text: factText1.value,
        likes: likes1.value
      }
      if (dataObject.fact_text === "") {  // blank fact_text not supported
        delete dataObject.fact_text;
      }
      if (dataObject.likes === "") { // blank likes not supported
        delete dataObject.likes;
      }
      fetch(`${users_path}/${userID5.value}/facts/${factID1.value}`,
        { method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    }
  });
}
document.addEventListener('DOMContentLoaded', handle_ajax(event));
