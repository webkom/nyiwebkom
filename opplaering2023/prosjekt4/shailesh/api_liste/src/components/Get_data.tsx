
import React, { useEffect, useState } from "react"




const Get_data = () => {

    const [company_name, addCompanyname] = useState([] as string[])
    const fromDate = new Date();
    const toDate = new Date()
    toDate.setMonth(fromDate.getUTCMonth() + 2);
 
    const dataFetch = async() => {
        const lego_api = await fetch(`https://lego.abakus.no/api/v1/events?date_after=${fromDate.getUTCFullYear()}-${fromDate.getUTCMonth() + 1}-${fromDate.getUTCDate()}&date_before=${toDate.getUTCFullYear()}-${toDate.getUTCMonth()}-${toDate.getUTCDate()}`)
            .then(res => res.json())
            .catch(err => console.log(err))

        console.log(lego_api)
        addCompanyname(lego_api.results.map((e:any) => {
            return e.title;
            
        }))
        
       

        

       
    }
    useEffect( () => {
        dataFetch()
        
    }, [])

    

return (
<div>
    <div>{company_name && company_name.map((e) => {return <p key={e}>{e}</p>})}</div>
</div>
);

}

export default Get_data;