export type Ticket = {
    /** Unique ID (should count up 1 every time) of the ticket */
    id: number;
    /** Player who entered the ticket */
    player: {
        /** Player's name */
        name: string;
        /** Player's UUID */
        uuid: string;
        /** Player's suffix and prefix  */
        display: {
            /** HTML-encoded prefix of the player */
            prefix: string;
            /** HTML-encoded suffix of the player */
            suffix: string;
        }
    };
}

export type Lottery = {
    /** UNIX Timestamp of when this lottery started */
    start: number;
    /** UNIX Timestamp of when this lottery should end */
    end: number;
    /** Winning ticket (is undefined if lottery has not ended) */
    winningTicket?: Ticket;
    /** Array of tickets that have been entered to this lottery */
    tickets: Ticket[];
}