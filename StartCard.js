class StartCard {
    #color

    constructor(color) {
        this.#color = color
    }

    get color() {
        return this.#color
    }
}

export default StartCard