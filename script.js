let systemtray = document.querySelector('.system-tray')
let chromebtn = document.querySelector('.chrome')
let vscodebtn = document.querySelector('.Vs-code')
let startmenu = document.querySelector('#start-menu')

startmenu.addEventListener('click', function () {
  const existingPanel = document.querySelector(".window-toggle")

  if (existingPanel) {
    existingPanel.remove();
  } else {

    let popupwindow = document.createElement('div')
    popupwindow.className = 'window-toggle'
    popupwindow.innerHTML = `
    <div class="start-title">Pinned</div>
    <div class="start-grid">
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#1e88e5" d="M40.69,35.42c-9.15,11.88-21.41,8.8-26.23,6.1 c-7.35-4.11-12.5-13.68-9.44-23.25c0.9-2.82,2.27-5.23,3.98-7.23c1.67,0.13,3.65,0.13,6-0.04c14-1,18,11,17,14 c-0.51,1.53-2.32,2.02-3.97,2.13c0.16-0.22,0.36-0.54,0.64-1.02c0.87-1.54,0.98-4.49-1.73-6.27c-2.61-1.7-5.43-0.65-6.88,1.28 c-1.45,1.92-0.88,4.81-0.37,6.09c2.2,5.52,6.26,6.95,9.02,7.78c2.76,0.83,6.86,0.71,9.05-0.19c2.18-0.91,2.8-1.43,3.22-0.97 C41.41,34.29,41.11,34.82,40.69,35.42z"></path><path fill="#0d47a1" d="M40.732,35.42c-3.48,4.52-7.41,6.87-11.21,7.91 c-0.03,0.01-0.06,0.01-0.08,0.02c-2.2,0.42-3.95,0.08-5.85-0.29c-3.09-0.6-7.35-4.01-8.38-10.18c-0.88-5.31,1.63-9.81,5.59-12.54 c-0.26,0.24-0.49,0.5-0.7,0.78c-1.45,1.92-0.88,4.81-0.37,6.09c2.2,5.52,6.26,6.95,9.02,7.78c2.76,0.83,6.86,0.71,9.05-0.19 c2.18-0.91,2.8-1.43,3.22-0.97C41.452,34.29,41.152,34.82,40.732,35.42z"></path><path fill="#00e5ff" d="M26.94,4.25c0.02,0.26,0.03,0.54,0.03,0.81c0,3.78-1.75,7.14-4.48,9.32 c-1.02-0.52-2.21-0.94-3.65-1.22c-4.07-0.78-10.63,1.1-13.3,5.77c-0.88,1.53-1.25,3.1-1.41,4.55c0.04-1.71,0.33-3.46,0.89-5.21 C8.31,8.01,17.86,3.05,26.94,4.25z"></path><path fill="#00e676" d="M41.4,27.89c-2.76,2.78-6.27,2.86-8.67,2.73 c-2.41-0.12-3.59-0.82-4.69-1.5c-1.11-0.69-0.48-1.37-0.37-1.52c0.11-0.15,0.38-0.41,1-1.49c0.29-0.51,0.5-1.18,0.54-1.91 c4.62-3.43,7.96-8.49,9.16-14.34c2.92,2.95,4.3,6.21,4.79,7.61C44.04,19.99,44.71,24.56,41.4,27.89z"></path><path fill="#1de9b6" d="M38.37,9.85v0.01c-1.2,5.85-4.54,10.91-9.16,14.34c0.03-0.42,0-0.87-0.1-1.32 c0-0.02-0.01-0.04-0.01-0.05c-0.25-1.47-0.99-3.33-2.22-4.77c-1.22-1.44-2.52-2.73-4.39-3.68c2.73-2.18,4.48-5.54,4.48-9.32 c0-0.27-0.01-0.55-0.03-0.81c0.4,0.05,0.79,0.11,1.19,0.19C32.74,5.33,36.04,7.49,38.37,9.85z"></path>
</svg>Edge</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#2196F3" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"></path><path fill="#FFF" d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"></path><path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"></path><path fill="#FFF" d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"></path>
</svg>Word</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
</svg>Excel</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#dc4c2c" d="M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z"></path><path fill="#f7a278" d="M26,6v18h18C44,14.059,35.941,6,26,6z"></path><path fill="#c06346" d="M26,6C16.059,6,8,14.059,8,24h18V6z"></path><path fill="#9b341f" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z"></path>
</svg>PowerPoint</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#103262" d="M43.255,23.547l-6.81-3.967v11.594H44v-6.331C44,24.309,43.716,23.816,43.255,23.547z"></path><path fill="#0084d7" d="M13,10h10v9H13V10z"></path><path fill="#33afec" d="M23,10h10v9H23V10z"></path><path fill="#54daff" d="M33,10h10v9H33V10z"></path><path fill="#027ad4" d="M23,19h10v9H23V19z"></path><path fill="#0553a4" d="M23,28h10v9H23V28z"></path><path fill="#25a2e5" d="M33,19h10v9H33V19z"></path><path fill="#0262b8" d="M33,28h10v9H33V28z"></path><polygon points="13,37 43,37 43,24.238 28.99,32.238 13,24.238" opacity=".019"></polygon><polygon points="13,37 43,37 43,24.476 28.99,32.476 13,24.476" opacity=".038"></polygon><polygon points="13,37 43,37 43,24.714 28.99,32.714 13,24.714" opacity=".057"></polygon><polygon points="13,37 43,37 43,24.952 28.99,32.952 13,24.952" opacity=".076"></polygon><polygon points="13,37 43,37 43,25.19 28.99,33.19 13,25.19" opacity=".095"></polygon><polygon points="13,37 43,37 43,25.429 28.99,33.429 13,25.429" opacity=".114"></polygon><polygon points="13,37 43,37 43,25.667 28.99,33.667 13,25.667" opacity=".133"></polygon><polygon points="13,37 43,37 43,25.905 28.99,33.905 13,25.905" opacity=".152"></polygon><polygon points="13,37 43,37 43,26.143 28.99,34.143 13,26.143" opacity=".171"></polygon><polygon points="13,37 43,37 43,26.381 28.99,34.381 13,26.381" opacity=".191"></polygon><polygon points="13,37 43,37 43,26.619 28.99,34.619 13,26.619" opacity=".209"></polygon><polygon points="13,37 43,37 43,26.857 28.99,34.857 13,26.857" opacity=".229"></polygon><polygon points="13,37 43,37 43,27.095 28.99,35.095 13,27.095" opacity=".248"></polygon><polygon points="13,37 43,37 43,27.333 28.99,35.333 13,27.333" opacity=".267"></polygon><polygon points="13,37 43,37 43,27.571 28.99,35.571 13,27.571" opacity=".286"></polygon><polygon points="13,37 43,37 43,27.81 28.99,35.81 13,27.81" opacity=".305"></polygon><polygon points="13,37 43,37 43,28.048 28.99,36.048 13,28.048" opacity=".324"></polygon><polygon points="13,37 43,37 43,28.286 28.99,36.286 13,28.286" opacity=".343"></polygon><polygon points="13,37 43,37 43,28.524 28.99,36.524 13,28.524" opacity=".362"></polygon><polygon points="13,37 43,37 43,28.762 28.99,36.762 13,28.762" opacity=".381"></polygon><polygon points="13,37 43,37 43,29 28.99,37 13,29" opacity=".4"></polygon><linearGradient id="Qf7015RosYe_HpjKeG0QTa_ut6gQeo5pNqf_gr1" x1="38.925" x2="32.286" y1="24.557" y2="36.024" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#31abec"></stop><stop offset="1" stop-color="#1582d5"></stop></linearGradient><path fill="url(#Qf7015RosYe_HpjKeG0QTa_ut6gQeo5pNqf_gr1)" d="M15.441,42h26.563c1.104,0,1.999-0.889,2-1.994C44.007,35.485,44,24.843,44,24.843	s-0.007,0.222-1.751,1.212S14.744,41.566,14.744,41.566S14.978,42,15.441,42z"></path><linearGradient id="Qf7015RosYe_HpjKeG0QTb_ut6gQeo5pNqf_gr2" x1="13.665" x2="41.285" y1="6.992" y2="9.074" gradientUnits="userSpaceOnUse"><stop offset=".042" stop-color="#076db4"></stop><stop offset=".85" stop-color="#0461af"></stop></linearGradient><path fill="url(#Qf7015RosYe_HpjKeG0QTb_ut6gQeo5pNqf_gr2)" d="M43,10H13V8c0-1.105,0.895-2,2-2h26c1.105,0,2,0.895,2,2V10z"></path><linearGradient id="Qf7015RosYe_HpjKeG0QTc_ut6gQeo5pNqf_gr3" x1="28.153" x2="23.638" y1="33.218" y2="41.1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33acee"></stop><stop offset="1" stop-color="#1b8edf"></stop></linearGradient><path fill="url(#Qf7015RosYe_HpjKeG0QTc_ut6gQeo5pNqf_gr3)" d="M13,25v15c0,1.105,0.895,2,2,2h15h12.004c0.462,0,0.883-0.162,1.221-0.425L13,25z"></path><path d="M21.319,13H13v24h8.319C23.352,37,25,35.352,25,33.319V16.681C25,14.648,23.352,13,21.319,13z" opacity=".05"></path><path d="M21.213,36H13V13.333h8.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C24.333,34.603,22.936,36,21.213,36z" opacity=".07"></path><path d="M21.106,35H13V13.667h8.106c1.414,0,2.56,1.146,2.56,2.56V32.44C23.667,33.854,22.52,35,21.106,35z" opacity=".09"></path><linearGradient id="Qf7015RosYe_HpjKeG0QTd_ut6gQeo5pNqf_gr4" x1="3.53" x2="22.41" y1="14.53" y2="33.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1784d8"></stop><stop offset="1" stop-color="#0864c5"></stop></linearGradient><path fill="url(#Qf7015RosYe_HpjKeG0QTd_ut6gQeo5pNqf_gr4)" d="M21,34H5c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C23,33.105,22.105,34,21,34z"></path><path fill="#fff" d="M13,18.691c-3.111,0-4.985,2.377-4.985,5.309S9.882,29.309,13,29.309	c3.119,0,4.985-2.377,4.985-5.308C17.985,21.068,16.111,18.691,13,18.691z M13,27.517c-1.765,0-2.82-1.574-2.82-3.516	s1.06-3.516,2.82-3.516s2.821,1.575,2.821,3.516S14.764,27.517,13,27.517z"></path>
</svg>Outlook</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<linearGradient id="WX5n~0dYBett_wj6JwCiNa_P0xhuRBy8MnO_gr1" x1="4" x2="44" y1="12.5" y2="12.5" gradientUnits="userSpaceOnUse"><stop offset=".176" stop-color="#cdcdcd"></stop><stop offset=".244" stop-color="#b5b5b5"></stop><stop offset=".274" stop-color="#b5b5b5"></stop><stop offset=".308" stop-color="#bdbdbd"></stop><stop offset=".349" stop-color="#cdcdcd"></stop><stop offset=".638" stop-color="#cdcdcd"></stop><stop offset=".668" stop-color="#c5c5c5"></stop><stop offset=".702" stop-color="#b5b5b5"></stop><stop offset=".76" stop-color="#b5b5b5"></stop><stop offset=".78" stop-color="#bdbdbd"></stop><stop offset=".803" stop-color="#cdcdcd"></stop></linearGradient><rect width="40" height="3" x="4" y="11" fill="url(#WX5n~0dYBett_wj6JwCiNa_P0xhuRBy8MnO_gr1)"></rect><linearGradient id="WX5n~0dYBett_wj6JwCiNb_P0xhuRBy8MnO_gr2" x1="6.438" x2="25.707" y1="-.499" y2="29.446" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fcfcfc"></stop><stop offset=".495" stop-color="#f4f4f4"></stop><stop offset=".946" stop-color="#e8e8e8"></stop><stop offset="1" stop-color="#e8e8e8"></stop></linearGradient><path fill="url(#WX5n~0dYBett_wj6JwCiNb_P0xhuRBy8MnO_gr2)" d="M42,41H6c-1.105,0-2-0.895-2-2V14h40v25C44,40.105,43.105,41,42,41z"></path><polygon fill="#f2f2f2" points="16,1 13,4 13,14 16,14"></polygon><polygon fill="#f2f2f2" points="32,1 35,4 35,14 32,14"></polygon><rect width="16" height="3" x="16" y="1" fill="#ccc"></rect><rect width="6.5" height="6.5" x="17" y="20" fill="#f25022"></rect><rect width="6.5" height="6.5" x="24.5" y="20" fill="#7fba00"></rect><rect width="6.5" height="6.5" x="17" y="27.5" fill="#00a4ef"></rect><rect width="6.5" height="6.5" x="24.5" y="27.5" fill="#ffb900"></rect><linearGradient id="WX5n~0dYBett_wj6JwCiNc_P0xhuRBy8MnO_gr3" x1="24" x2="24" y1="37.956" y2="41.21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e8e8e8"></stop><stop offset=".332" stop-color="#e0e0e0"></stop><stop offset=".848" stop-color="#cacaca"></stop><stop offset="1" stop-color="#c2c2c2"></stop></linearGradient><path fill="url(#WX5n~0dYBett_wj6JwCiNc_P0xhuRBy8MnO_gr3)" d="M42,41H6c-1.105,0-2-0.895-2-2v-1h40v1C44,40.105,43.105,41,42,41z"></path>
</svg>Store</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#607D8B" d="M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"></path><path fill="#455A64" d="M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"></path>
</svg>Settings</div>
      <div class="start-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#8bc34a" d="M24.001,4c-11.077,0-20,8.923-20,20s8.923,20,20,20c11.076,0,20-8.923,20-20S35.077,4,24.001,4z"></path><path fill="#fff" d="M31.747,33.915c-0.292,0-0.585-0.145-0.877-0.292c-2.777-1.607-6.139-2.484-9.792-2.484c-2.047,0-4.093,0.291-5.993,0.73c-0.292,0-0.731,0.146-0.877,0.146c-0.731,0-1.169-0.586-1.169-1.17c0-0.73,0.438-1.17,1.023-1.314c2.338-0.586,4.677-0.877,7.161-0.877c4.093,0,7.893,1.021,11.108,2.924c0.438,0.291,0.731,0.584,0.731,1.314C32.916,33.478,32.331,33.915,31.747,33.915z M33.793,28.945c-0.438,0-0.73-0.144-1.023-0.291c-3.068-1.9-7.308-3.071-12.13-3.071c-2.339,0-4.531,0.293-6.139,0.733c-0.439,0.144-0.585,0.144-0.877,0.144c-0.877,0-1.462-0.73-1.462-1.461c0-0.877,0.439-1.316,1.169-1.607c2.192-0.584,4.385-1.023,7.454-1.023c4.97,0,9.793,1.17,13.593,3.507c0.584,0.291,0.877,0.877,0.877,1.461C35.255,28.215,34.67,28.945,33.793,28.945z M36.132,23.101c-0.438,0-0.585-0.146-1.023-0.291c-3.508-2.047-8.769-3.217-13.885-3.217c-2.631,0-5.262,0.293-7.6,0.877c-0.293,0-0.585,0.146-1.023,0.146c-1.023,0.146-1.754-0.73-1.754-1.754c0-1.023,0.585-1.607,1.315-1.754c2.777-0.877,5.7-1.17,9.062-1.17c5.554,0,11.4,1.17,15.785,3.654c0.584,0.293,1.022,0.877,1.022,1.754C37.886,22.369,37.154,23.101,36.132,23.101z"></path>
</svg>Spotify</div>
    </div>
    <div class="start-bottom">
      <div class="profile">Ahmad yusuf</div>
      <div class="power">⏻</div>
    </div>
    `

    document.body.appendChild(popupwindow)
  }

})

chromebtn.addEventListener('click', function () {
  let openchrome = document.createElement('div')
  openchrome.className = 'chrome-open'
  openchrome.innerHTML = `
       <div class="chrome-header">
      <span>Chrome</span>
      <div class="chrome-buttons">
        <button id="minimize">🗕</button>
        <button id="maximize">🗖</button>
        <button id="close">✖</button>
      </div>
    </div>
    <div class="chrome-content">
      This is Chrome
    </div>
    `
  document.body.appendChild(openchrome)

  const maximizeBtn = openchrome.querySelector('#maximize');
  let isMaximized = false;
  maximizeBtn.addEventListener('click', () => {
    if (!isMaximized) {
      openchrome.style.top = '0';
      openchrome.style.left = '0';
      openchrome.style.width = '100vw';
      openchrome.style.height = '100vh';
      isMaximized = true;
    } else {
      openchrome.style.top = '60px';
      openchrome.style.left = '100px';
      openchrome.style.width = '500px';
      openchrome.style.height = '300px';
      isMaximized = false;
    }
  });

  const closeBtn = openchrome.querySelector('#close');
  closeBtn.addEventListener('click', () => {
    openchrome.remove();
  });

  let newX = 0
  let newY = 0
  let startX = 0
  let startY = 0

  openchrome.addEventListener('mousedown', mousedown)

  function mousedown(e) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)

  }

  function mousemove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    openchrome.style.top = (openchrome.offsetTop - newY) + 'px'
    openchrome.style.left = (openchrome.offsetLeft - newX) + 'px'

  }

  function mouseup(e) {
    document.removeEventListener('mousemove', mousemove)
    document.removeEventListener('mouseup', mouseup)

  }

})

vscodebtn.addEventListener('click', function () {
  let openvscode = document.createElement('div')
  openvscode.className = 'vscode-open'
  openvscode.innerHTML = `
       <div class="vscode-header">
      <span>Vs-code</span>
      <div class="vscode-buttons">
        <button id="minimize">🗕</button>
        <button id="maximize">🗖</button>
        <button id="close">✖</button>
      </div>
    </div>
    <div class="vscode-content">
      This is Vscode
    </div>
    `
  document.body.appendChild(openvscode)

  const maximizeBtn = openvscode.querySelector('#maximize');
  let isMaximized = false;
  maximizeBtn.addEventListener('click', () => {
    if (!isMaximized) {
      openvscode.style.top = '0';
      openvscode.style.left = '0';
      openvscode.style.width = '100vw';
      openvscode.style.height = '100vh';
      isMaximized = true;
    } else {
      openvscode.style.top = '60px';
      openvscode.style.left = '100px';
      openvscode.style.width = '500px';
      openvscode.style.height = '300px';
      isMaximized = false;
    }
  });

  const closeBtn = openvscode.querySelector('#close');
  closeBtn.addEventListener('click', () => {
    openvscode.remove();
  });

  let newX = 0
  let newY = 0
  let startX = 0
  let startY = 0

  openvscode.addEventListener('mousedown', mousedown)

  function mousedown(e) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)

  }

  function mousemove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    openvscode.style.top = (openvscode.offsetTop - newY) + 'px'
    openvscode.style.left = (openvscode.offsetLeft - newX) + 'px'

  }

  function mouseup(e) {
    document.removeEventListener('mousemove', mousemove)
    document.removeEventListener('mouseup', mouseup)

  }

})

systemtray.addEventListener('click', function () {
  const existingPanel = document.querySelector(".system-panel");

  if (existingPanel) {
    existingPanel.remove();
  } else {
    const panel = document.createElement('div');
    panel.className = 'system-panel';
    panel.innerHTML = `
        <div class="system-panel">
  <div class="tray-grid">
    <div class="tray-toggle" data-status="off">
      <i class="ri-wifi-line"></i>
      <span>WiFi</span>
      <small>Airtel_Dont<br><span class="status">Connect</span></small>
    </div>
    <div class="tray-toggle" data-status="off">
      <i class="ri-bluetooth-line"></i>
      <span>Bluetooth</span>
      <small>Boult Audio<br><span class="status">Airbass</span></small>
    </div>
    <div class="tray-toggle" data-status="off">
      <i class="ri-flight-takeoff-line"></i>
      <span>Airplane mode</span>
    </div>
    <div class="tray-toggle" data-status="off">
      <i class="ri-battery-2-charge-line"></i>
      <span>Energy saver</span>
    </div>
    <div class="tray-toggle" data-status="off">
      <i class="ri-moon-clear-line"></i>
      <span>Night light</span>
    </div>
    <div class="tray-toggle" data-status="off">
      <i class="ri-accessibility-line"></i>
      <span>Accessibility</span>
    </div>
  </div>

  <div class="sliders">
    <div class="slider-group">
      <i class="ri-sun-line"></i>
      <input type="range" min="50" max="150" value="100" class="brightness-slider">
    </div>
    <div class="slider-group">
      <i class="ri-volume-up-line"></i>
      <input type="range" min="0" max="100" value="100" class="volume-slider">
    </div>
  </div>
  <div class="bottom-panel">
    <span><i class="ri-battery-line"></i> 80%</span>
    <i class="ri-settings-3-line"></i>
  </div>
</div>
    `;
    systemtray.appendChild(panel);

    // document.querySelectorAll('.tray-toggle').forEach(toggle => {
    //     toggle.addEventListener('click', () => {
    //         const isOn = toggle.getAttribute('data-status') === "on";
    //         toggle.setAttribute('data-status', isOn ? "off" : "on");
    //     });
    // });

    document.querySelector('.brightness-slider')?.addEventListener('input', (e) => {
      document.body.style.filter = `brightness(${e.target.value}%)`;
    });

    document.querySelector('.volume-slider')?.addEventListener('input', (e) => {
      document.body.style.setProperty('--volume-level', e.target.value);
    });
  }
})

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString('en-GB');

  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);
updateClock();

