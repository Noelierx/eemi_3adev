package com.example.kotlinsensorapp

import android.content.Context
import android.hardware.*
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import kotlin.math.roundToInt



class MainActivity : AppCompatActivity(), SensorEventListener {

    private val sensorManager: SensorManager by lazy {
        getSystemService(Context.SENSOR_SERVICE) as SensorManager
    }
    
    override fun onSensorChanged(event: SensorEvent?) {
        if (event !== null) {
            var colorId : Int? = null
// changement de la couleur du layout en fonction des axes X,Y et Z
            val (x, y, z) = getScoresFromAxis(event)
            xElement.text = x.toString()
            yElement.text = y.toString()
            zElement.text = z.toString()

            when {
                z == 10 -> colorId = R.color.colorPrimary
                y == 10 -> colorId = R.color.colorAccent
                x == 10 -> colorId = R.color.colorPrimaryDark
            }

            if (colorId !== null) {
                mainlayout.setBackgroundResource(colorId)
            }
        }
    }

    override fun onAccuracyChanged(p0: Sensor?, p1: Int) {
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    private fun getScoresFromAxis(event: SensorEvent): Triple<Int, Int, Int> {
        var axisX = event.values[0]
        var axisY = event.values[1]
        var axisZ = event.values[2]

        return Triple(roundValue(axisX), roundValue(axisY), roundValue(axisZ))
    }

    private fun roundValue(axisValue: Float): Int {
        var result = axisValue.roundToInt()
        if (result < 0) {
            result *= -1
        }

        return result
    }

    override fun onResume() {
        super.onResume()
        sensorManager.registerListener(
            this,
            sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER),
            SensorManager.SENSOR_DELAY_GAME
        )
    }

    override fun onPause() {
        super.onPause()
        sensorManager.unregisterListener(this)
    }

}

