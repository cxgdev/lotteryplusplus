/*
    This file contains types from the custom Server API
*/

export namespace ServerResponses {
    type Purchase = {
        type: "buy" | "sell",
        item: string;
        price: string;
    }

    export type PlayerResponse = {
        online: boolean;
        purchaseHistory: Purchase[]
    }
}