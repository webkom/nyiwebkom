import { useState } from 'react'; 
import { Events } from '../types';

const EventList = () => {
    const [events, setEvents] = useState<Events>([]);

    const fromDate = new Date();
    const toDate = new Date()
    toDate.setMonth(fromDate.getUTCMonth() + 2);

    const fetchUsers = async (): Promise<Events> => {

      const data = await fetch(`https://lego.abakus.no/api/v1/events?date_after=${fromDate.getUTCFullYear()}-${fromDate.getUTCMonth() + 1}-${fromDate.getUTCDate()}&date_before=${toDate.getUTCFullYear()}-${toDate.getUTCMonth()}-${toDate.getUTCDate()}`)
        .then(res => res.json())
        .catch(err => console.log(err));
      setEvents(data.results);

      return data.results;
    };
      
    return (
        <>
        {events.length <= 0 ? 
          <div className="buttonBox">
            <button onClick={fetchUsers}>Fetch Events</button>
            <p>Oi her var det tomt!</p>
          </div> :
          <ul className='eventList'> 
            {events.map(e => {
              const date = new Date(e.startTime).toLocaleString("no-NO", { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit"});
              return <li key={e.id}>
                <h2>{e.title}</h2>
                <div className='description'>
                  <p>{e.description}</p>
                  <p>{date + " " + e.location}</p>
                </div>
                </li>
              })}
          </ul>
        }
        </>
    )
}

export default EventList;