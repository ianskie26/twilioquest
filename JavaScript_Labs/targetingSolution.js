class TargetingSolution {
    constructor(obj) {
        const {x,y,z} = obj
        this.x = x
        this.y = y
        this.z = z
    }

    target() {
        const {x,y,z} = this
        return `(${x}, ${y}, ${z})`
    }
}