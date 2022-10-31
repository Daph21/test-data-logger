input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
datalogger.setColumnTitles(
"Temp",
"Lum"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
loops.everyInterval(1000, function () {
    datalogger.log(
    datalogger.createCV("Temp", dstemp.celsius(DigitalPin.P1)),
    datalogger.createCV("Lum", input.lightLevel())
    )
})
basic.forever(function () {
	
})
