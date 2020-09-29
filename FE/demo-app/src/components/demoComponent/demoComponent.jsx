import React, { useState, useEffect} from 'react';
import demoApi from "../../api/Api";

const Demo = () => {
    const [serverCheck, setServerCheck] = useState({'Connection':'No'})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        const checkServer = async () => {
          return await demoApi.get(`check`);
        };
    
        checkServer().then(ans => {
            console.log(ans)
            setServerCheck(ans)
          setIsLoading(false);
      });
      }, []);
    return isLoading ? <h3>loading...</h3> :(
        <div>
            <h3>This is my demo</h3>
            <h4>connect to BE : {serverCheck.Connection}</h4>

        </div>
    );
  }
  
  export default Demo;