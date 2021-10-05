import { FlightUserInterface } from './flightUser'

export interface FlightInterface {
    id: number | null
    fromDate: string
    toDate: string
    fromAirport: string
    toAirport: string
    flightNum: string
    ticketNum: string
    fromTerminal: string
    toTerminal: string
    fromTime: string
    toTime: string
    airline: string
    hotel: string
    user: FlightUserInterface | null
}

export default class Flight implements FlightInterface {
    public id: number | null
    public fromDate: string
    public toDate: string
    public fromAirport: string
    public toAirport: string
    public flightNum: string
    public ticketNum: string
    public fromTerminal: string
    public toTerminal: string
    public fromTime: string
    public toTime: string
    public airline: string
    public hotel: string
    public user: FlightUserInterface | null

    constructor(
        id: number | null,
        fromDate: string,
        toDate: string,
        fromAirport: string,
        toAirport: string,
        flightNum: string,
        ticketNum: string,
        fromTerminal: string,
        toTerminal: string,
        fromTime: string,
        toTime: string,
        airline: string,
        hotel: string,
        user: FlightUserInterface | null
    ) {
        this.id = id
        this.fromDate = fromDate
        this.toDate = toDate
        this.fromAirport = fromAirport
        this.toAirport = toAirport
        this.flightNum = flightNum
        this.ticketNum = ticketNum
        this.fromTerminal = fromTerminal
        this.toTerminal = toTerminal
        this.fromTime = fromTime
        this.toTime = toTime
        this.airline = airline
        this.hotel = hotel
        this.user = user
    }
}
