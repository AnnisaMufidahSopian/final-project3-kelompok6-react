function getAPI({ req }) {
    const API = `http://localhost:3200/${req}`;
    return API;
  }
  
  export default getAPI;
  