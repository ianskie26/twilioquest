class Ducktypium {


    // The constructor should take a single string argument, a crystal color, and store that data in an 
    // instance variable named color. The color can only be red, blue, or yellow. 
    // The constructor should throw an error if the argument is any other string.
    // Define a property called calibrationSequence that is initally set to be an empty array.
    // The Ducktypium class must implement two instance methods: refract and calibrate

    constructor(color) {
        this.color = color
        this.acceptedColor = ['red','blue','yellow']
        this.error = new Error('Color must be red, yellow, or blue!')
        this.calibrationSequence = []

        if(!this.acceptedColor.find(item => item === color)) {
            throw this.error
        }
    }

    // The refract method must take a single string argument, which must be one of red, blue, or yellow. 
    // The method should throw an error if the argument is any other string, just like the constructor. 
    // This function should return a single string, which is the color produced by the combination of the 
    // instance's color property and the color passed in to the refract function.
    // If the instance's color property is the same as the argument passed in, return that value
    // If the combination of colors is different, it should return a string which is the combination of those two primary colors.
    
    refract(newColor) {
        if(!this.acceptedColor.find(item => item.toLowerCase() === newColor.toLowerCase())) {
            throw this.error
        }

        const colors = {
            red: { blue: 'purple', yellow: 'orange' },
            yellow: { red: 'orange', blue: 'green' },
            blue: { red: 'purple', yellow: 'green' },
        }

        return this.color.toLowerCase() === newColor ? this.color : colors[newColor][this.color]

    }


    // The calibrate method takes a single argument, an array of numbers. With this input array, 
    // you must do the following:
    // Sort the numbers from smallest to largest
    // Multiply each number in the array by 3
    // Assign the resulting array to the Ducktypium instance's calibrationSequence variable.
    
    calibrate(num) {
        const sortedNum = num.sort()
        this.calibrationSequence = sortedNum.map(item => item * 3)
        return this.calibrationSequence
    }
}