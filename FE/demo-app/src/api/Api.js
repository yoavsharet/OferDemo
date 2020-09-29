import axios from "axios";
import { GATEWAY_URL} from "../consts/apiConsts";

class DemoApi {
    constructor() {
      this.baseUrl = `${GATEWAY_URL}`;
    }
  
    async get(url) {
      console.log("request to BE");
      return axios.get(`${this.baseUrl}/${url}`).then(res => res.data);
    }
  
}
  
  const demoApi = new DemoApi();
  
  export default demoApi;
  