/* - - - - - - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - - - - - - */
export interface SmartHouseCommandProtocol {
    execute(): void;
    undo(): void;
}