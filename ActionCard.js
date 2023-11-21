class ActionCard {
    #type

    constructor(type) {
        this.#type = type
    }

    get type() {
        return this.#type
    }
}

export default ActionCard