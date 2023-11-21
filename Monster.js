class Monster {
    #type
    #color
    #pattern

    constructor(type, color, pattern) {
        this.#type = type
        this.#color = color
        this.#pattern = pattern
    }

    get type() {
        return this.#type
    }

    get color() {
        return this.#color
    }

    get patter() {
        return this.#pattern
    }

}

export default Monster