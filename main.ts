input.onButtonPressed(Button.A, function () {
    if (colourFlag == 0) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Red))
    } else if (colourFlag == 1) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Green))
    } else if (colourFlag == 2) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Blue))
    } else if (colourFlag == 3) {
        tileDisplay.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.White))
    } else if (colourFlag == 4) {
        tileDisplay.showRainbow(1, 360)
        rainbowFlag = 1
    } else if (colourFlag == 5) {
        tileDisplay.clear()
        tileDisplay.show()
        rainbowFlag = 0
    }
    if (colourFlag < 5) {
        colourFlag += 1
    } else {
        colourFlag = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    tileDisplay.clear()
    for (let Column = 0; Column <= 7; Column++) {
        for (let Row = 0; Row <= 7; Row++) {
            tileDisplay.setMatrixColor(Column, Row, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
            tileDisplay.show()
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    brightLevel += (20)
    tileDisplay.setBrightness(brightLevel)    
    if (brightLevel > 241 ) {
        brightLevel = 10
    } 
    tileDisplay.show()   
})


let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
let brightLevel = 10
let colourFlag = 0
let rainbowFlag = 0
rainbowFlag = 1
colourFlag = 0

tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.setBrightness(brightLevel)
tileDisplay.clear()
tileDisplay.showRainbow(1, 360)
tileDisplay.show()
basic.forever(function () {
    if (rainbowFlag == 1) {
        tileDisplay.rotate(1)
        tileDisplay.show()
    }
})

