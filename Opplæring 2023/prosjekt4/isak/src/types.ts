
type ApiBase = {
    id: number;
    title: string;
    description: string;
    location: string;
    /* Allow extra values */
    [x: string | number | symbol]: unknown;
  };
  
  export type Event = ApiBase & {
    startTime: Date;
    endTime: Date;
  };

  export type Events = Array<Event>
